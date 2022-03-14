import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-09",
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
  ignoreBrowserTokenWarning: true,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

export { client, urlFor };
