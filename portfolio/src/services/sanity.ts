import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "38rsdliw",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-10-23", // use current date (YYYY-MM-DD) to target the latest API version
  perspective: "published",

  token:
    "skBlugMhCed0atvIDZhgIX6a4ZCsDE8p1MHY6ngUx8spQnODglAAwxb2nmtgz03sgCFvtmZ3qtvWW9d5N8agviyXM2x5S7tRHbI1tGLWRGoMe0ZCAzpX0q4z8dJBSjigceBV4pzT8nq3ptzXz48yb8qImA1zE3h2dH2Y5DABdDmquxNQQcew",
};
export const client = createClient(config);


