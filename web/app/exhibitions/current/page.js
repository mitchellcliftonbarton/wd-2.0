import { sanityClient } from '@/lib/sanity'
import ExhibitionGrid from '@/components/ExhibitionGrid'

async function getData() {
  const exhibitions = await sanityClient.fetch(`*[_type == "exhibition"]{
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

  const currentExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const startDate = new Date(exhibition.start_date)
    const endDate = new Date(exhibition.end_date)

    return startDate <= today && endDate >= today
  })

  return (
    <div className="page-exhibitions mt-16 pb-48">
      {currentExhibitions.length > 0
        ? <ExhibitionGrid
            exhibitions={currentExhibitions}
            title="Current Exhibitions"
          />
        : <p className="text-left">No current exhibitions</p>
      }
    </div>
  )
}