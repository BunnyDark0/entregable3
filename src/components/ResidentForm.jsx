import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({ handleSubmit }) => {
  return (
    <article className='menu'>
      <div className='fondo2'></div>
      <div className='menu__input'>
        <form className='menu__form' onSubmit={handleSubmit}>
          <input type="text" id='idLocation' placeholder='type a location id' />
          <button>Search</button>
        </form>
      </div>
    </article>
  )
}

export default ResidentForm