import { sanityClient } from '@/lib/sanity'
import ExhibitionGrid from '@/components/ExhibitionGrid'
import ExhibitionList from '@/components/ExhibitionList'

async function getData() {
  const exhibitions = await sanityClient.fetch(`*[_type == "exhibition"] | order(start_date desc) {
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

  console.log(upcomingExhibitions)

  const currentExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const startDate = new Date(exhibition.start_date)
    const endDate = new Date(exhibition.end_date)

    return startDate <= today && endDate >= today
  })

  const pastExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const endDate = new Date(exhibition.end_date)

    return endDate < today
  })

  return (
    <div className="page-exhibitions mt-16 pb-48">
      {upcomingExhibitions.length > 0 && (
        <ExhibitionList
          exhibitions={upcomingExhibitions}
          title="Upcoming Exhibitions"
        />
      )}

      {currentExhibitions.length > 0 && (
        <ExhibitionGrid
          exhibitions={currentExhibitions}
          title="Current Exhibitions"
        />
      )}

      {pastExhibitions.length > 0 && (
        <ExhibitionGrid
          exhibitions={pastExhibitions}
          title="Past Exhibitions"
        />
      )}
    </div>
  )
}