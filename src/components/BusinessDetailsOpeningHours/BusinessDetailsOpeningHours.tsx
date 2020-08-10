import React from "react";
import { BusinessDetails as BusinessDetailsType } from "../../models/domain";
import OpeningHours from "../../design-system/OpeningHours/OpeningHours";
import { pipe } from "fp-ts/lib/pipeable";
import { option } from "fp-ts";
import { chain, fold } from "fp-ts/lib/Option";
import { head } from "fp-ts/lib/Array";

type Props = {
  details: BusinessDetailsType;
  className?: string;
};

function BusinessDetailsOpeningHours({ details, className }: Props) {
  return (
    <div className={className}>
      <h2>Opening Hours</h2>
      {pipe(
        option.fromNullable(details.hours),
        chain((hours) => head(hours)),
        fold(
          () => <></>,
          (hours) => <OpeningHours openingHours={hours.open} />
        )
      )}
    </div>
  );
}

export default BusinessDetailsOpeningHours;
