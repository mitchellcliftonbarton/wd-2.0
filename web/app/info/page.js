import { sanityClient } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

async function getData() {
  const infoPage = await sanityClient.fetch(`*[_type == "infoPage"][0]{
    infoText
  }`)

  return infoPage
}

export default async function Info() {
  const data = await getData()
  const { infoText } = data

  if (infoText) {
    return (
      <div className="grid grid-cols-12 gap-4 mt-16">
        <div className="col-span-12 lg:col-span-4 rich-text">
          <PortableText value={infoText} />
        </div>
      </div>
    )
  }

  return (
    <p>No info text</p>
  )
}