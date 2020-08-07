import React, { useCallback } from "react";
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
  linkWrapper,
} from "./BusinessListItem.treat";
import PhoneNumber from "../../design-system/PhoneNumber/PhoneNumber";
import { doUpdateCurrentView } from "../../navigation";

type Props = {
  business: Business;
};

function BusinessListItem({ business }: Props) {
  const navigateToDetailView = useCallback(() => {
    doUpdateCurrentView({
      view: "itemView",
      itemAlias: business.alias,
    });
  }, [business.alias]);

  return (
    <a
      href={`/${business.alias}`}
      onClick={navigateToDetailView}
      className={linkWrapper}
    >
      <Card className={item}>
        <ImgWithPlaceholder src={business.image_url} className={image} />
        <div className={infoContainer}>
          <div className={name}>{business.name}</div>
          {business.price && (
            <div className={price}>Price: {business.price}</div>
          )}
          <Rating
            rating={business.rating}
            reviewCount={business.review_count}
            className={rating}
          />
          {business.phone && (
            <div className={phoneNumberWrapper}>
              <PhoneNumber phoneNumber={business.phone} linked={false} />
            </div>
          )}
        </div>
      </Card>
    </a>
  );
}

export default BusinessListItem;
