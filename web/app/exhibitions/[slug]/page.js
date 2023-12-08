import { sanityClient } from '@/lib/sanity'
import ExhibitionContent from '@/components/ExhibitionContent'
import { urlFor } from '@/lib/sanity'

async function getData(slug) {
  const exhibition = await sanityClient.fetch(`*[_type == "exhibition" && slug.current == $slug][0]{
    title,
    slug,
    start_date,
    end_date,
    description,
    featuredImage{
      asset->{
        ...,
        metadata
      }
    },
    artists[]->{
      name,
      slug,
      bio,
    },
    files[]{
      _type,
      imageFile{
        asset->{
          ...,
          metadata
        }
      },
      text,
      videoFile,
      videoPoster{
        asset->{
          ...,
          metadata
        }
      },
      youtubeId
    }
  }`, { slug }, {
    cache: 'no-store'
  })

  return exhibition
}

export async function generateMetadata({ params }) {
  const { slug } = params

  const res = await sanityClient.fetch(`*[_type == "exhibition" && slug.current == $slug][0]{
    title,
    ogImage{
      asset->{
        ...,
        metadata
      }
    }
  }`, { slug }, {
    cache: 'no-store'
  })

  const exhibitionData = res.result
  const image = urlFor(exhibitionData.ogImage.asset.url).width(1500).quality(80).url()
 
  return {
    title: `Washer / Dryer Projects | ${exhibitionData.title}`,
    openGraph: {
      images: [image]
    }
  }
}

export default async function ExhibitionDetail({ params }) {
  const { slug } = params
  const data = await getData(slug)

  return (
    <ExhibitionContent exhibition={data} />
  )
}