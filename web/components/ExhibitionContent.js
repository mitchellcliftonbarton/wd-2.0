'use client'

import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'
import ExhibitionImages from '@/components/ExhibitionImages'
import CarouselLarge from '@/components/CarouselLarge'
import { useState } from 'react'

const ExhibitionContent = ({ exhibition }) => {
  const {
    title,
    artists,
    start_date,
    end_date,
    description,
    files
  } = exhibition

  const [currentCarouselItem, setCurrentCarouselItem] = useState(0)
  const [carouselOpen, setCarouselOpen] = useState(false)

  const setCarouselState = (value, index = false) => {
    // if document and window exist
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      if (value) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'initial'
      }
    }

    // if index is true and we are opening the carousel
    if (index && value) {
      setCurrentCarouselItem(index)
    }
    
    setCarouselOpen(value)
  }
  
  return (
    <>
      <div className="page-exhibition-detail mt-16 pb-48">
        <div className="titles flex justify-center">
          <div className='text-center lg:w-1/2'>
            <h1 className='italic bg-primary inline-block'>“{title}”</h1>

            {artists.length > 0 && (
              <div>
                {artists.map((artist, index) => {
                  return (
                    <span key={artist.slug.current}>
                      {index !== artists.length - 1 ? `${artist.name}, ` : artist.name}
                    </span>
                  )
                })}
              </div>
            )}

            {start_date && end_date && (
              <div>
                {format(new Date(start_date), 'MM.dd.yyyy')} - {format(new Date(end_date), 'MM.dd.yyyy')}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-24">
          <div className="info-column col-span-12 lg:col-span-3 lg:pr-16 mb-16 lg:mb-0">
            <div className="info-content">
              {description && (
                <div className="description">
                  <h2 className="italic mb-4 bg-primary inline-block">Info</h2>

                  <div className="rich-text">
                    <PortableText value={description} />
                  </div>
                </div>
              )}

              {artists.length > 0 && (
                <div className="artists">
                  <h2 className="italic mb-4 bg-primary inline-block">Artists</h2>

                  <div>
                    {artists.map(artist => {
                      return (
                        <div className="artist" key={artist.slug.current}>
                          <h3>{artist.name}</h3>
                          
                          <div className={`rich-text pl-6`}>
                            <PortableText value={artist.bio} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <ExhibitionImages 
            files={files} 
            className="col-span-12 lg:col-span-9"
            setCarouselState={setCarouselState}
          />
        </div>
      </div>

      <CarouselLarge
        files={files}
        className={`${carouselOpen ? 'active' : ''}`}
        setCarouselState={setCarouselState}
        currentCarouselItem={currentCarouselItem}
      />
    </>
  )
}

export default ExhibitionContent