import React from "react";
import { BusinessDetails as BusinessDetailsType } from "../../models/domain";
import StaticMap from "../../design-system/StaticMap/StaticMap";
import { address, map } from "./BusinessDetailsLocation.treat";

type Props = {
  details: BusinessDetailsType;
  className?: string;
};

function BusinessDetailsLocation({ details, className }: Props) {
  return (
    <div className={className}>
      <h2>Address</h2>
      <address className={address}>
        {details.location.display_address.map((row) => (
          <div key={row}>{row}</div>
        ))}
      </address>
      <StaticMap coords={details.coordinates} className={map} />
    </div>
  );
}

export default BusinessDetailsLocation;
