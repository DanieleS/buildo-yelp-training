import React from "react";
import cn from "classnames";
import phoneIcon from "../../assets/images/phone-icon.svg";
import { wrapper, icon, linked as linkedStyle } from "./PhoneNumber.treat";

type Props =
  | ({
      phoneNumber: string;
      linked: true;
    } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">)
  | ({
      phoneNumber: string;
      linked?: false;
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "children">);

function PhoneNumber(props: Props) {
  const innerDom = (
    <>
      <img className={icon} src={phoneIcon} alt="Phone number icon" />
      {props.phoneNumber}
    </>
  );

  if (props.linked) {
    const { className, linked, phoneNumber, ...restProps } = props;
    return (
      <a
        className={cn(wrapper, linkedStyle, className)}
        href={`tel:${props.phoneNumber}`}
        {...restProps}
      >
        {innerDom}
      </a>
    );
  } else {
    const { className, linked, phoneNumber, ...restProps } = props;
    return (
      <div className={cn(wrapper, className)} {...restProps}>
        {innerDom}
      </div>
    );
  }
}

export default PhoneNumber;
