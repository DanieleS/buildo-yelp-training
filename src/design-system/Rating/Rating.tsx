import React, { useMemo } from "react";
import cn from "classnames";
import { starRating, top, bottom, wrapper, ratingAndCount } from "./Rating.treat";
import { array } from "fp-ts";
import { pipe } from "fp-ts/lib/function";

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  rating: number;
  ratingMin?: number;
  ratingMax?: number;
  reviewCount?: number;
};

function Rating({
  rating,
  ratingMin = 0,
  ratingMax = 5,
  reviewCount,
  className,
  ...props
}: Props) {
  const percentage = ((rating - ratingMin) / (ratingMax - ratingMin)) * 100;

  const stars = useMemo(
    () =>
      pipe(
        array.makeBy(5, (n) => n),
        array.map((i) => <span key={i}>★</span>)
      ),
    []
  );

  return (
    <div className={cn(wrapper, className)} {...props}>
      <div className={starRating}>
        <div className={top} style={{ width: `${percentage}%` }}>
          {stars}
        </div>
        <div className={bottom}>{stars}</div>
      </div>
      <div className={ratingAndCount}>
        <span>{rating.toFixed(1)}</span>
        {reviewCount && <span> ({reviewCount})</span>}
      </div>
    </div>
  );
}

export default Rating;
