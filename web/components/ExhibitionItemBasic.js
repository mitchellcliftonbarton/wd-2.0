import { format } from 'date-fns'

const ExhibitionItemBasic = ({ exhibition, className }) => {
  return (
    <div className={className}>
      {exhibition.displayTitle && (
        <h3>“{exhibition.title}”</h3>
      )}

      {exhibition.artists.length > 0 && (
        <div>
          {exhibition.artists.map((artist, index) => {
            return (
              <span key={artist.slug.current}>
                {index !== exhibition.artists.length - 1 ? `${artist.name}, ` : artist.name}
              </span>
            )
          })}
        </div>
      )}

      {exhibition.start_date && exhibition.end_date && (
        <div>
          {format(new Date(exhibition.start_date), 'MM.dd.yyyy')} - {format(new Date(exhibition.end_date), 'MM.dd.yyyy')}
        </div>
      )}
    </div>
  )
}

export default ExhibitionItemBasic