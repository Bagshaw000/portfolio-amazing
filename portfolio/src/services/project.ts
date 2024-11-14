import { client } from "./sanity";
import { IProject, IProjectImage } from "./types";

export async function getAllProject(): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project"]{title,_id,category, duration,tools,overview
      ,images[] { asset -> {
              _id,
              url
            },
            alt,}, comment, client}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getContentProject(): Promise<IProject[] | undefined> {
  try {
    const getData = await client.fetch(
      `*[_type == "project" && category == "Content Creation" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            }, alt}, comment, client}`
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
      `*[_type == "project" && category == "Ad Production" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment, client}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getBrandProject(): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project" && category == "Branding" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment, client}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getProject(id: string): Promise<IProject[] | undefined> {
  try {
    const getData: Array<IProject> = await client.fetch(
      `*[_type == "project" && _id == "${id}" ]{title,_id,category, duration,tools,overview
      ,images[]{ asset -> {
              _id,
              url
            },
            alt,}, comment, client}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getProjectImage(
  project: IProject[]
): Promise<IProjectImage | undefined> {
  try {
    const getData: IProjectImage = {
      images: project.flatMap((data) =>
        data.images.map((image) => ({ url: image.asset.url }))
      ),
    };
    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
