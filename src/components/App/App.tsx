import React from "react";
import BusinessListView from "../BusinessListView/BusinessListView";
import * as QR from "avenger/lib/QueryResult";
import { useQuery } from "avenger/lib/react";
import { currentView } from "../../navigation";
import "./App.treat";
import { pipe } from "fp-ts/lib/function";
import BusinessDetailView from "../BusinessDetailsView/BusinessDetailView";

function App() {
  const view = useQuery(currentView);
  return pipe(
    view,
    QR.fold(
      () => null,
      () => null,
      (view) => {
        switch (view.view) {
          case "home":
            return <BusinessListView />;
          case "itemView":
            return <BusinessDetailView alias={view.itemAlias} />;
        }
      }
    )
  );
}

export default App;
