import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  coords: {
    latitude: number;
    longitude: number;
  };
};

function StaticMap({ coords, ...props }: Props) {
  const latLng = `${coords.latitude},${coords.longitude}`;
  return (
    <img
      {...props}
      alt=""
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${latLng}&zoom=16&size=600x600&markers=color:red%7C${latLng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
    />
  );
}

export default StaticMap;
