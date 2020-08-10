import React from "react";
import ImgWithPlaceholder from "../ImgWithPlaceholder/ImgWithPlaceholder";
import { takeLeft } from "fp-ts/lib/Array";
import { fromPredicate, mapLeft, fold } from "fp-ts/lib/Either";
import { pipe, identity } from "fp-ts/lib/function";
import { map } from "fp-ts/lib/Array";
import {
  wrapperCommon,
  imageSingle,
  imageMultiple,
} from "./MultiImagePanel.treat";

type Props = {
  images: string[];
};

const urlToImage = (className: string) => (url: string) =>
  (
    <ImgWithPlaceholder src={url} key={url} className={className} />
  ) as React.ReactNode;

function MultiImagePanel({ images }: Props) {
  return (
    <div className={wrapperCommon}>
      {pipe(
        images,
        takeLeft(3),
        fromPredicate((arr) => arr.length === 3, identity),
        mapLeft((arr) => arr[0]),
        fold(urlToImage(imageSingle), map(urlToImage(imageMultiple)))
      )}
    </div>
  );
}

export default MultiImagePanel;
