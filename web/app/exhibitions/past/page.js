import { sanityClient } from '@/lib/sanity'
import ExhibitionGrid from '@/components/ExhibitionGrid'

async function getData() {
  const exhibitions = await sanityClient.fetch(`*[_type == "exhibition"] | order(start_date desc){
    title,
    slug,
    start_date,
    end_date,
    featuredImage{
      asset->{
        ...,
        metadata
      }
    },
    artists[]->{
      name,
      slug
    }
  }`)

  return exhibitions
}

export default async function Exhibitions() {
  const data = await getData()

  const pastExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const endDate = new Date(exhibition.end_date)

    return endDate < today
  })

  return (
    <div className="page-exhibitions mt-16 pb-48">
      {pastExhibitions.length > 0 && (
        <ExhibitionGrid
          exhibitions={pastExhibitions}
          title="Past Exhibitions"
        />
      )}
    </div>
  )
}