import React from "react";
import cn from "classnames";
import { nonEmptyArray } from "fp-ts";
import { fold, map } from "fp-ts/lib/Option";
import { pipe, flow, identity } from "fp-ts/lib/function";
import { groupBy } from "fp-ts/lib/NonEmptyArray";
import { mapWithIndex, collect } from "fp-ts/lib/Record";
import { safeRegexExec } from "../../utils/strings";
import * as AR from "fp-ts/lib/Array";
import { OpeningHour, DayOfWeek } from "./types";
import { today } from "./OpeningHours.treat";

type Props = {
  openingHours: OpeningHour[];
};

const days = {
  [DayOfWeek.Mon]: "Mon",
  [DayOfWeek.Tue]: "Tue",
  [DayOfWeek.Wed]: "Wed",
  [DayOfWeek.Thu]: "Thu",
  [DayOfWeek.Fri]: "Fri",
  [DayOfWeek.Sat]: "Sat",
  [DayOfWeek.Sun]: "Sun",
};

const yelpHourRegex = /^(\d{2})(\d{2})$/;

const yelpHourToReadableHour = flow(
  safeRegexExec(yelpHourRegex),
  fold(
    () => "",
    ([, hours, minutes]) => `${hours}:${minutes}`
  )
);

const openingHoursRow = flow(
  (hour: OpeningHour) => [hour.start, hour.end],
  AR.map(yelpHourToReadableHour),
  (hours) => hours.join(" - "),
  (hours) => <div key={hours}>{hours}</div>
);

const isToday = (yelpDay: DayOfWeek) =>
  new Date().getDay() === (yelpDay + 1) % 7;

function OpeningHours({ openingHours }: Props) {
  return pipe(
    nonEmptyArray.fromArray(openingHours),
    map(
      flow(
        groupBy<OpeningHour>((hour) => hour.day.toString()),
        mapWithIndex((index, hours) => {
          const dayOfWeek: DayOfWeek = parseInt(index);
          return (
            <tr key={index} className={cn({ [today]: isToday(dayOfWeek) })}>
              <th>{days[dayOfWeek]}</th>
              <td>{hours.map(openingHoursRow)}</td>
            </tr>
          );
        }),
        collect((_, row) => row),
        (rows) => (
          <table>
            <tbody>{rows}</tbody>
          </table>
        )
      )
    ),
    fold(() => <></>, identity)
  );
}

export default OpeningHours;
