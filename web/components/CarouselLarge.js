'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { useRef, useEffect, useState } from 'react'
import { urlFor, getImageHeight } from '@/lib/sanity'
import DefImage from '@/components/DefImage'

const CarouselLarge = ({ files, className, setCarouselState, currentCarouselItem }) => {
  const swiperRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // if current carousel item changes, slide to that item
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(currentCarouselItem, 0)
    }
  }, [currentCarouselItem])

  return (
    <div className={`carousel-large fixed top-0 left-0 w-full h-full bg-white flex flex-col ${className}`}>
      <div className="px-6 lg:px-8 py-6 flex-none flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className="underline lg:hover:no-underline mr-4"
            >Prev</button>

            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className="underline lg:hover:no-underline"
            >Next</button>
          </div>

          <div className="ml-8">{currentSlide + 1} / {files.length}</div>
        </div>

        <button
          onClick={() => setCarouselState(false)}
          className="underline lg:hover:no-underline"
        >Close</button>
      </div>

      <div className="flex-1 h-full relative p-6 lg:p-12">
        <div className="w-full h-full relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            className="!fill-parent"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {files.map((file, index) => { 
              if (file._type === 'imageObject') {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full flex justify-center items-center">
                      <DefImage 
                        src={urlFor(file.imageFile.asset.url).width(1500).quality(80).url()} 
                        width={1500} 
                        height={getImageHeight(1500, file.imageFile.asset.metadata.dimensions.aspectRatio)}
                        className="w-full h-full object-contain"
                        alt={file.imageFile.alt}
                      />
                    </div>
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default CarouselLarge