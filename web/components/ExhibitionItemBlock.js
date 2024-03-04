import { format } from 'date-fns'
import Link from 'next/link'
import DefImage from '@/components/DefImage'
import { urlFor, getImageHeight } from '@/lib/sanity'

const ExhibitionItemBlock = ({ exhibition }) => {
  return (
    <Link
      href={`/exhibitions/${exhibition.slug.current}`}
      className="exhibition-item-block col-span-1"
    >
      <div className="relative aspect-[3/2]">
        <p className='view absolute z-10 top-0 left-0 bg-grey-med'>View exhibition ⇢&nbsp;</p>

        {exhibition.featuredImage && (
          <div className="fill-parent">
            <DefImage 
              src={urlFor(exhibition.featuredImage.asset.url).width(1500).quality(80).url()} 
              width={1500} 
              height={getImageHeight(1500, exhibition.featuredImage.asset.metadata.dimensions.aspectRatio)}
              className="media-cover"
            />
          </div>
        )}
      </div>
      
      <div className="titles inline-block mt-4 max-w-[75%]">
        <h3>“{exhibition.title}”</h3>

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
    </Link>
  )
}

export default ExhibitionItemBlock