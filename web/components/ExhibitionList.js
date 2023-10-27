import ExhibitionItemBasic from '@/components/ExhibitionItemBasic'

const ExhibitionList = ({ exhibitions, title }) => {
  return (
    <section className="exhibition-list">
      {title && (
        <h2 className="italic mb-4 bg-primary inline-block">{title}</h2>
      )}

      {exhibitions.map((exhibition) => (
        <ExhibitionItemBasic
          key={exhibition.slug.current}
          exhibition={exhibition}
        />
      ))}
    </section>
  )
}

export default ExhibitionList