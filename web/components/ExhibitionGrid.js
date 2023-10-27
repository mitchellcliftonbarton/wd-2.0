import ExhibitionItemBlock from './ExhibitionItemBlock'

const ExhibitionGrid = ({ exhibitions, title }) => {
  return (
    <section className="exhibition-grid">
      {title && (
        <h2 className="italic mb-4 bg-primary inline-block">{title}</h2>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">
        {exhibitions.map((exhibition) => (
          <ExhibitionItemBlock
            key={exhibition.slug.current}
            exhibition={exhibition}
          />
        ))}
      </div>
    </section>
  )
}

export default ExhibitionGrid