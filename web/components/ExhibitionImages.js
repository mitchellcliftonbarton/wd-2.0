'use client'

import DefImage from '@/components/DefImage'
import { urlFor, getImageHeight } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

const ExhibitionImages = ({ files, className, setCarouselState }) => {
  return (
    <div className={className}>
      {files.map((file, index) => {
        if (file._type === 'imageObject') {
          return (
            <div
              className="media-item w-full grid grid-cols-9 gap-4 lg:gap-6"
              key={index}
            >
              <button
                onClick={() => setCarouselState(true, index)}
                className="cursor-pointer col-span-9 lg:col-span-6 bg-grey-light relative"
              >
                <p className='view absolute top-0 left-0 bg-grey-med'>&nbsp;+&nbsp;View in carousel&nbsp;</p>

                <DefImage
                  className="w-full"
                  src={urlFor(file.imageFile.asset.url).width(1500).quality(80).url()}
                  width={1500}
                  height={getImageHeight(1500, file.imageFile.asset.metadata.dimensions.aspectRatio)}
                />
              </button>

              <div className={`col-span-9 lg:col-span-3 flex items-start ${file.text ? 'justify-between' : 'justify-end'}`}>
                {file.text && (
                  <div>
                    <PortableText value={file.text} />
                  </div>
                )}

                <button
                  onClick={() => setCarouselState(true, index)}
                  className='lg:hidden bg-grey-light'
                >+&nbsp;Expand</button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default ExhibitionImages