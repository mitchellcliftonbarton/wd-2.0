import { sanityClient } from '@/lib/sanity'
import CurrentExhibitions from '@/components/CurrentExhibitions'
import UpcomingExhibitions from '@/components/UpcomingExhibitions'
import ExhibitionGrid from '@/components/ExhibitionGrid'

async function getHomeData() {
  const exhibitions = await sanityClient.fetch(`*[_type == "exhibition"] | order(start_date desc) {
    title,
    slug,
    displayTitle,
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

export default async function Home() {
  const data = await getHomeData()

  const upcomingExhibitions = data.filter((exhibition) => {
    const today = new Date()
    const startDate = new Date(exhibition.start_date)

    return startDate > today
  })

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
    <div className="page-home mt-16 pb-48">
      {currentExhibitions.length > 0 && (
        <CurrentExhibitions exhibitions={currentExhibitions} />
      )}

      {upcomingExhibitions.length > 0 && (
        <UpcomingExhibitions exhibitions={upcomingExhibitions} />
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