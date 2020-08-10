import React from "react";
import MultiImagePanel from "../../design-system/MultiImagePanel/MultiImagePanel";
import BusinessDetailsHeader from "../BusinessDetailsHeader/BusinessDetailsHeader";
import BusinessDetailsLocation from "../BusinessDetailsLocation/BusinessDetailsLocation";
import BusinessDetailsOpeningHours from "../BusinessDetailsOpeningHours/BusinessDetailsOpeningHours";
import { BusinessDetails as BusinessDetailsType } from "../../models/domain";
import {
  mainWrapper,
  details as detailsStyle,
  location,
  openingHours,
} from "./BusinessDetails.treat";

type Props = {
  details: BusinessDetailsType;
};

function BusinessDetails({ details }: Props) {
  return (
    <article>
      <MultiImagePanel images={details.photos} />
      <div className={mainWrapper}>
        <BusinessDetailsHeader details={details} />
        <div className={detailsStyle}>
          <BusinessDetailsLocation details={details} className={location} />
          <BusinessDetailsOpeningHours
            details={details}
            className={openingHours}
          />
        </div>
      </div>
    </article>
  );
}

export default BusinessDetails;
