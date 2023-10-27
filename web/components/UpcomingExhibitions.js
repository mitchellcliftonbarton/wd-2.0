import ExhibitionItemBasic from './ExhibitionItemBasic'

const UpcomingExhibitions = ({ exhibitions }) => {
  return (
    <section className="upcoming-exhibitions bg-grey-med py-32 flex flex-col items-center">
      <h2 className="italic mb-4 bg-primary inline-block">Upcoming Exhibitions</h2>

      {exhibitions.map((exhibition) => (
        <div
          key={exhibition.slug.current}
        >
          <ExhibitionItemBasic
            className="col-span-2 text-center"
            exhibition={exhibition}
          />
        </div>
      ))}
    </section>
  )
}

export default UpcomingExhibitions