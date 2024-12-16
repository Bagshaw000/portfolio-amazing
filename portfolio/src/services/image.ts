import { client } from "./sanity";
import { IImages } from "./types";

export async function getImages(): Promise<IImages[] | undefined> {
  try {
    const getData: Array<IImages> = await client.fetch(
      `*[_type == "websiteimages" ]{header{ asset -> {
                _id,
                url
    },alt},_id,profile { asset -> {
                _id,
                url
              },
              alt,}, service[]{ asset -> {
                _id,
                url
              },alt}}`
    );
    console.log(getData);
    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
