import React from "react";
import { useQuery } from "avenger/lib/react";
import { fold } from "avenger/lib/QueryResult";
import { businessDetailsQuery } from "../../queries/queries";
import { pipe } from "fp-ts/lib/function";
import Loader from "../../design-system/Loader/Loader";
import ErrorView from "../../design-system/ErrorView/ErrorView";
import BusinessDetails from "../BusinessDetails/BusinessDetails";
import { wrapper } from "./BusinessDetailView.treat";
import { PathReporter } from "io-ts/lib/PathReporter";

type Props = {
  alias: string;
};

function BusinessDetailView({ alias }: Props) {
  const businessDetails = useQuery(businessDetailsQuery, alias);
  return (
    <div className={wrapper}>
      {pipe(
        businessDetails,
        fold(
          () => <Loader />,
          (error) => {
            console.log(PathReporter.report(error as any))
            return <ErrorView />;
          },
          (details) => <BusinessDetails details={details} />
        )
      )}
    </div>
  );
}

export default BusinessDetailView;
