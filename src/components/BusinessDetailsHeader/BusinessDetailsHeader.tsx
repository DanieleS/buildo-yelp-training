import React from "react";
import { BusinessDetails as BusinessDetailsType } from "../../models/domain";
import cn from "classnames";
import PhoneNumber from "../../design-system/PhoneNumber/PhoneNumber";
import Rating from "../../design-system/Rating/Rating";
import {
  header,
  headerNoPhone,
  phoneNumber,
  ratingPriceWrapper,
  rating,
  price,
} from "./BusinessDetailsHeader.treat";

type Props = {
  details: BusinessDetailsType;
};

function BusinessDetailsHeader({ details }: Props) {
  return (
    <header
      className={cn(header, {
        [headerNoPhone]: !details.phone,
      })}
    >
      <h1>{details.name}</h1>
      {details.phone && (
        <PhoneNumber
          phoneNumber={details.phone}
          linked={true}
          className={phoneNumber}
        />
      )}
      <div className={ratingPriceWrapper}>
        <Rating
          rating={details.rating}
          reviewCount={details.review_count}
          className={rating}
        />
        <div className={price}>Price: {details.price}</div>
      </div>
    </header>
  );
}

export default BusinessDetailsHeader;
