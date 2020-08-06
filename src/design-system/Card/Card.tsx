import React from "react";
import cn from "classnames";
import { card } from "./Card.treat";

type Props = React.HTMLAttributes<HTMLDivElement>;

function Card({ className, children, ...props }: Props) {
  return (
    <div className={cn(className, card)} {...props}>
      {children}
    </div>
  );
}

export default Card;
