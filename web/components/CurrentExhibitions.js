import { format } from 'date-fns'
import { urlFor, getImageHeight } from '@/lib/sanity'
import DefImage from '@/components/DefImage'
import Link from 'next/link'

const CurrentExhibitions = ({ exhibitions }) => {
  return (
    <section className="current-exhibitions">
      <h2 className="italic mb-4 bg-primary inline-block">Current Exhibitions</h2>

      {exhibitions.map((exhibition, index) => (
        <div className="grid grid-cols-12 gap-4" key={index}>
          <Link
            key={exhibition.slug.current}
            href={`/exhibitions/${exhibition.slug.current}`}
            className="exhibition-item-large col-span-12 lg:col-span-10 grid grid-cols-10 gap-4"
          >
            <div className="titles col-span-10 lg:col-span-2">
              <div className="inline-block">
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
            </div>

            <div className='col-span-10 lg:col-span-7 relative'>
              <p className='view absolute top-0 left-0 bg-grey-med'>View exhibition ⇢&nbsp;</p>
              
              <DefImage 
                src={urlFor(exhibition.featuredImage.asset.url).width(1500).quality(80).url()} 
                width={1500} 
                height={getImageHeight(1500, exhibition.featuredImage.asset.metadata.dimensions.aspectRatio)}
              />
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default CurrentExhibitions