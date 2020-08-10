import * as t from "io-ts";

const businessBase = {
  id: t.string,
  alias: t.string,
  name: t.string,
  image_url: t.string,
  url: t.string,
  rating: t.number,
  review_count: t.number,
  price: t.union([t.string, t.undefined]),
  phone: t.string,
  categories: t.array(
    t.interface({
      title: t.string,
      alias: t.string,
    })
  ),
};

export const Business = t.interface(businessBase);

export const BusinessesApi = t.interface({
  businesses: t.array(Business),
});

export const BusinessDetails = t.interface({
  ...businessBase,
  coordinates: t.interface({
    latitude: t.number,
    longitude: t.number,
  }),
  photos: t.array(t.string),
  hours: t.union([
    t.undefined,
    t.array(
      t.interface({
        open: t.array(
          t.interface({
            start: t.string,
            end: t.string,
            day: t.number,
          })
        ),
      })
    ),
  ]),
  location: t.interface({
    display_address: t.array(t.string),
  }),
});

export type Business = t.TypeOf<typeof Business>;
export type BusinessDetails = t.TypeOf<typeof BusinessDetails>;
export type BusinessesApi = t.TypeOf<typeof BusinessesApi>;
