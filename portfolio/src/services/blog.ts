import { client } from "./sanity";
import { IBlogPost } from "./types";

export async function getAllPost(): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getContentPost(): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post" && category == "content"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getAdPost(): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post" && category== "ad"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getBrandPost(): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post" && categories== "brand"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getPost(id:string): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post" && _id == "${id}"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
