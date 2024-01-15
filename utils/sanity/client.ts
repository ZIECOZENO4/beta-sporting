import {createClient} from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url"
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 

export const client = createClient({
  projectId,
  dataset,
apiVersion: `2022-03-07`,
  useCdn: true, 
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}