import React from "react";
import { app } from "./App.treat";
import { useQuery } from "avenger/lib/react";
import { fold } from "avenger/lib/QueryResult";
import { businessListQuery } from "../../queries/queries";
import { pipe } from "fp-ts/lib/function";
import BusinessList from "../BusinessList/BusinessList";

function App() {
  const businessesList = useQuery(businessListQuery, "Milano");
  return (
    <div className={app}>
      {pipe(
        businessesList,
        fold(
          () => <>Loading...</>,
          () => <>An error occurred :(</>,
          (businesses) => <BusinessList businesses={businesses} />
        )
      )}
    </div>
  );
}

export default App;
