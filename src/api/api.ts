import { taskEither as TE } from "fp-ts";
import { identity } from "fp-ts/lib/function";
import { BusinessesApi, Business } from "../models/domain";
import { pipe } from "fp-ts/lib/pipeable";
import { Type, TypeOf } from "io-ts";

function getApiCall<T>(
  relativeUrl: string,
  params: object,
  decoder: Type<T>
): TE.TaskEither<unknown, TypeOf<typeof decoder>> {
  const query = new URLSearchParams(params as any).toString();
  return pipe(
    TE.tryCatch(
      () =>
        fetch(
          `${process.env.REACT_APP_YELP_BASE_API_URL}${relativeUrl}${
            query ? `?${query}` : ""
          }`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
            },
          }
        ),
      identity
    ),
    TE.fold(
      (error) => TE.left(error),
      (res) => TE.tryCatch(() => res.json(), identity)
    ),
    TE.fold(
      (error) => TE.left(error),
      (res) => TE.fromEither(decoder.decode(res))
    )
  );
}

export function getBusinessesList(
  location: string
): TE.TaskEither<unknown, Business[]> {
  return pipe(
    getApiCall("businesses/search", { location }, BusinessesApi),
    TE.fold(
      (error) => TE.left(error),
      (res) => TE.right(res.businesses)
    )
  );
}
