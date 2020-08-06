import React from "react";
import { Business } from "../../models/domain";
import * as AR from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";
import BusinessListItem from "../BusinessListItem/BusinessListItem";
import { list, listItem } from "./BusinessList.treat";

type Props = {
  businesses: Business[];
};

function BusinessList({ businesses }: Props) {
  return (
    <ul className={list}>
      {pipe(
        businesses,
        AR.map((business) => (
          <li key={business.id} className={listItem}>
            <BusinessListItem business={business} />
          </li>
        ))
      )}
    </ul>
  );
}

export default BusinessList;
