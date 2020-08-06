import React from "react";
import { Business } from "../../models/domain";
import Card from "../../design-system/Card/Card";
import ImgWithPlaceholder from "../../design-system/ImgWithPlaceholder/ImgWithPlaceholder";
import Rating from "../../design-system/Rating/Rating";
import {
  image,
  item,
  infoContainer,
  name,
  rating,
  price,
  phoneNumberWrapper,
} from "./BusinessListItem.treat";
import PhoneNumber from "../../design-system/PhoneNumber/PhoneNumber";

type Props = {
  business: Business;
};

function BusinessListItem({ business }: Props) {
  return (
    <Card className={item}>
      <ImgWithPlaceholder src={business.image_url} className={image} />
      <div className={infoContainer}>
        <div className={name}>{business.name}</div>
        {business.price && <div className={price}>Price: {business.price}</div>}
        <Rating
          rating={business.rating}
          reviewCount={business.review_count}
          className={rating}
        />
        {business.phone && (
          <div className={phoneNumberWrapper}>
            <PhoneNumber phoneNumber={business.phone} linked={true} />
          </div>
        )}
      </div>
    </Card>
  );
}

export default BusinessListItem;
