import { sanityClient } from '@/lib/sanity'
import ExhibitionList from '@/components/ExhibitionList'

async function getData() {
  const exhibitions = await sanityClient.fetch(`*[_type == "exhibition"] | order(start_date desc){
    title,
    slug,
    start_date,
    end_date,
    displayTitle,
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

  const upcomingExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const startDate = new Date(exhibition.start_date)

    return startDate > today
  })

  if (upcomingExhibitions.length > 0) {
    return (
      <div className="page-exhibitions mt-16 pb-48">
        <ExhibitionList
          exhibitions={upcomingExhibitions}
          title="Upcoming Exhibitions"
        />
      </div>
    )
  }

  return (
    <div className="page-exhibitions mt-16 pb-48">
      <p>There are no upcoming exhibitions at this time.</p>
    </div>
  )
}