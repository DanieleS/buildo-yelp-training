import React from "react";
import { Business } from "../../models/domain";
import * as AR from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

type Props = {
  businesses: Business[];
};

function BusinessList({ businesses }: Props) {
  return (
    <ol>
      {pipe(
        businesses,
        AR.map((business) => <li key={business.id}>{business.name}</li>)
      )}
    </ol>
  );
}

export default BusinessList;
