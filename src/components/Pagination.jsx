import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import "./styles/Pagination.css"

const Pagination = ({ setPage, RESIDENTS_PERPAGE, location }) => {
  return (
    <div className='pagination__content'>
      <ul className='pagination__list'>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
    </div>
  )
}

export default Pagination