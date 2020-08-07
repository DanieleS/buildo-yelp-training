import React, { useState } from "react";
import SidebarLayout from "../../design-system/SidebarLayout/SidebarLayout";
import { useQuery } from "avenger/lib/react";
import { fold } from "avenger/lib/QueryResult";
import { businessListQuery } from "../../queries/queries";
import { pipe } from "fp-ts/lib/function";
import BusinessList from "../BusinessList/BusinessList";
import { view } from "./BusinessListView.treat";
import SearchBusinessForm from "../SearchBusinessForm/SearchBusinessForm";

import Loader from "../../design-system/Loader/Loader";
import ErrorView from "../../design-system/ErrorView/ErrorView";

function BusinessListView() {
  const [state, setState] = useState({ location: "Milano", term: "" });
  const businessesList = useQuery(businessListQuery, state);
  return (
    <SidebarLayout sidebar={<SearchBusinessForm onSubmit={setState} />}>
      <div className={view}>
        {pipe(
          businessesList,
          fold(
            () => <Loader />,
            () => <ErrorView />,
            (businesses) => <BusinessList businesses={businesses} />
          )
        )}
      </div>
    </SidebarLayout>
  );
}

export default BusinessListView;
