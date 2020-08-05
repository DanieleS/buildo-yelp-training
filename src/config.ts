import * as t from "io-ts";
import { failure } from "io-ts/lib/PathReporter";
import { NonEmptyString } from "io-ts-types";
import { pipe } from "fp-ts/lib/pipeable";
import * as either from "fp-ts/lib/Either";

const BuildConfig = t.type(
  {
    REACT_APP_YELP_API_KEY: NonEmptyString,
    REACT_APP_YELP_API_ENDPOINT: NonEmptyString,
  },
  "BuildConfig"
);

export const config = pipe(
  BuildConfig.decode(process.env),
  either.fold(
    (errors) => {
      throw new Error(failure(errors).join("\n"));
    },
    (env) => ({
      yerlpApiKey: env.REACT_APP_YELP_API_KEY,
      yerlpApiEndpoint: env.REACT_APP_YELP_API_ENDPOINT,
    })
  )
);
