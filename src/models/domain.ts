import * as t from "io-ts";

export const Business = t.interface({
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
});

export const BusinessesApi = t.interface({
  businesses: t.array(Business),
});

export type Business = t.TypeOf<typeof Business>;
export type BusinessesApi = t.TypeOf<typeof BusinessesApi>;
