import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2024-11-01',
    projectId: 'qm1d16nj',
    dataset: 'sanity',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}