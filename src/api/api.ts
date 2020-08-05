import { taskEither as TS } from "fp-ts";
import { identity } from "fp-ts/lib/function";
import { BusinessesApi, Business } from "../models/domain";
import { pipe } from "fp-ts/lib/pipeable";
import { Type, TypeOf } from "io-ts";

function getApiCall<T>(
  relativeUrl: string,
  params: object,
  decoder: Type<T>
): TS.TaskEither<unknown, TypeOf<typeof decoder>> {
  const query = new URLSearchParams(params as any).toString();
  return pipe(
    TS.tryCatch(
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
    TS.fold(
      (error) => TS.left(error),
      (res) => TS.tryCatch(() => res.json(), identity)
    ),
    TS.fold(
      (error) => TS.left(error),
      (res) => TS.fromEither(decoder.decode(res))
    )
  );
}

export function getBusinessesList(
  location: string
): TS.TaskEither<unknown, Business[]> {
  return pipe(
    getApiCall("businesses/search", { location }, BusinessesApi),
    TS.fold(
      (error) => TS.left(error),
      (res) => TS.right(res.businesses)
    )
  );
}
