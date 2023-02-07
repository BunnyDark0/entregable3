import React from 'react'
import ResidentCard from './ResidentCard'
import "./styles/ResidentList.css"

const ResidentList = ({pagination}) => {
  return (
    <section className='residentList'>
      {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
      }
    </section>
  )
}

export default ResidentList