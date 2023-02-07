import React from 'react'
import "./styles/LocationInfo.css"

const LocationInfo = ({ location }) => {
  return (
    <section className='info1'>
      {/* <h2>{location?.name}</h2> */}
      <ul className='info__list2'>
        <li className='info__item2'><span>Name:</span> {location?.name}</li>
        <li className='info__item2'><span>Type:</span> {location?.type}</li>
        <li className='info__item2'><span>Dimension:</span> {location?.dimension}</li>
        <li className='info__item2'><span>Population:</span> {location?.residents.length}</li>

      </ul>
    </section>
  )
}

export default LocationInfo