import { taskEither as TE } from "fp-ts";
import { identity } from "fp-ts/lib/function";
import { BusinessesApi, Business } from "../models/domain";
import { pipe } from "fp-ts/lib/pipeable";
import { Type } from "io-ts";

function getApiCall<T>(relativeUrl: string, params: object, decoder: Type<T>) {
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
    TE.chain((res) => TE.tryCatch(() => res.json(), identity)),
    TE.chainW((res) => TE.fromEither(decoder.decode(res)))
  );
}

export function getBusinessesList(params: {
  location: string;
  term?: string;
}): TE.TaskEither<unknown, Business[]> {
  return pipe(
    getApiCall("businesses/search", params, BusinessesApi),
    TE.map((res) => res.businesses)
  );
}
