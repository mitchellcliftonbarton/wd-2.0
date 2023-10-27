import { sanityClient } from '@/lib/sanity'
import ExhibitionContent from '@/components/ExhibitionContent'

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
  }`, { slug })

  return exhibition
}

export default async function ExhibitionDetail({ params }) {
  const { slug } = params
  const data = await getData(slug)

  return (
    <ExhibitionContent exhibition={data} />
  )
}