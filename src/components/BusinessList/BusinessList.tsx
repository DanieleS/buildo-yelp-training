import React from "react";
import { Business } from "../../models/domain";
import * as AR from "fp-ts/lib/Array";
import { pipe, flow } from "fp-ts/lib/function";
import BusinessListItem from "../BusinessListItem/BusinessListItem";
import { list as listStyle, listItem } from "./BusinessList.treat";
import ErrorView from "../../design-system/ErrorView/ErrorView";
import { nonEmptyArray, option } from "fp-ts";

type Props = {
  businesses: Business[];
};

function BusinessList({ businesses }: Props) {
  return pipe(
    nonEmptyArray.fromArray(businesses),
    option.fold(
      () => <ErrorView errorMessage="No element found :(" />,
      flow(
        AR.map((business) => (
          <li key={business.id} className={listItem}>
            <BusinessListItem business={business} />
          </li>
        )),
        (list) => <ul className={listStyle}>{list}</ul>
      )
    )
  );
}

export default BusinessList;
