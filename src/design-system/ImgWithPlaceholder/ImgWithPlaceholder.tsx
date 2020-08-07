import React from "react";
import placeholder from "../../assets/images/photo-placeholder.png";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholderSrc?: string;
};

function ImgWithPlaceholder({
  src,
  placeholderSrc = placeholder,
  alt,
  ...props
}: Props) {
  return <img src={src || placeholderSrc} alt={alt} {...props} />;
}

export default ImgWithPlaceholder;
