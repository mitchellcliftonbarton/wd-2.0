import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const sanityClient = createClient({
  projectId: 'yjozkztk',
  dataset: 'production',
  apiVersion: "2022-03-25",
  useCdn: false
})

const builder = imageUrlBuilder(sanityClient)

const urlFor = (source) => {
  return builder.image(source)
}

const getImageHeight = (width, aspectRatio) => {
  return width / aspectRatio
}

export { sanityClient, urlFor, getImageHeight }