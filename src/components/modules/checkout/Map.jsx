import React, { useEffect, useState } from 'react'

const GoogleMap = () => {
  const [googleMap, setGoogleMap] = useState(false)
  // for google map
  useEffect(() => {
    setGoogleMap(true)
  }, [])
  return (
    <>
      {googleMap && <div>
        <iframe
          className='rounded w-full h-[230px] md:h-[300px] lg:h-[374px]'
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Devorbis+(Devorbis)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a
            href="https://www.maps.ie/distance-area-calculator.html">
            Lahore, Pakistan
          </a>
        </iframe>
      </div>}
    </>
  )
}

export default GoogleMap