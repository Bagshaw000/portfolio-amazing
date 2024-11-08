import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "38rsdliw",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-10-23", // use current date (YYYY-MM-DD) to target the latest API version
  perspective: "published",
};
export const client = createClient(config);

// const data = await client.fetch<number>(`count(*)`);
// // data is typed as `number`
// console.log(`Number of documents: ${data}`);
