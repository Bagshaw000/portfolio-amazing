import { client } from "./sanity";
import { IBlogPost, IComment, ICommentArray, ITestimonial } from "./types";

export async function getAllPost(): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},categories,publishedAt, body, tag}`
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
      `*[_type == "post" && category== "brand"]{title,_id,slug,author,mainImage { asset -> {
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

export async function getPost(id: string): Promise<IBlogPost[] | undefined> {
  try {
    const getData: Array<IBlogPost> = await client.fetch(
      `*[_type == "post" && _id == "${id}"]{title,_id,slug,author,mainImage { asset -> {
              _id,
              url
            },
            alt,},category,publishedAt, body[]{subtitle,body, image{ asset -> {
              _id,
              url
            },alt} }  , tag}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function addComment(
  id: string,
  comment: IComment[]
): Promise<IComment[] | undefined> {
  try {
    const addData = await client
      .patch(id)
      .setIfMissing({ comment: comment })
      .append("comment", comment)
      .commit({ autoGenerateArrayKeys: true });
    return addData.comment;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getComment(
  id: string
): Promise<ICommentArray[] | undefined> {
  try {
    const getData: Array<ICommentArray> = await client.fetch(
      `*[_type == "post" && _id == "${id}"]{comment}`
    );
    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function replyComment(
  postId: string,
  commentKey: string,
  reply: IComment[]
): Promise<IComment[] | undefined> {
  try {
    const addData = await client
      .patch(postId)
      .append(`comment[_key=="${commentKey}"].reply`, reply)
      .commit({ autoGenerateArrayKeys: true });
    return addData.reply;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}

export async function getTestimonial() {
  try {
    const getData: Array<ITestimonial> = await client.fetch(
      `*[_type == "testimonial"]{title,comment}`
    );

    return getData;
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
  }
}
