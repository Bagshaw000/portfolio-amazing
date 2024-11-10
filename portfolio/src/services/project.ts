import { client } from "./sanity";
import { IProject } from "./types";

export async function getAllProject(): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project"]{title,_id,category, duration,tools,overview
      ,images[] { asset -> {
              _id,
              url
            },
            alt,}, comment}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getContentProject(): Promise<IProject[] | undefined> {
  try {
    const getData = await client.fetch(
      `*[_type == "project" && category == "content" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            }, alt}, comment}`
    );
    console.log(getData);
    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getAdProject(): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project" && category == "ad" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getBrandProject(): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project" && category == "brand" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getProject(id: string): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project" && _id == ${id} ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
