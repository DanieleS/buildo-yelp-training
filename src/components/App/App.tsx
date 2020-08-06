import React from "react";
import { app } from "./App.treat";
import { useQuery } from "avenger/lib/react";
import { fold } from "avenger/lib/QueryResult";
import { businessListQuery } from "../../queries/queries";
import { pipe } from "fp-ts/lib/function";
import BusinessList from "../BusinessList/BusinessList";

import Loader from "../../design-system/Loader/Loader";
import ErrorView from "../../design-system/ErrorView/ErrorView";

function App() {
  const businessesList = useQuery(businessListQuery, { location: "Milano" });
  return (
    <div className={app}>
      {pipe(
        businessesList,
        fold(
          () => <Loader />,
          () => <ErrorView />,
          (businesses) => <BusinessList businesses={businesses} />
        )
      )}
    </div>
  );
}

export default App;
