import React from 'react'
import "./style.css"


const Nav = ({pages, currentPage, setCurrentPage}) => {
  return (
   <nav className=" nav d-flex justify-content-between align-item-right me-0" >
    {pages.map(page => (
        <a href="/Portfolio-the-Second/"
        key={page} 
        className={`nav-link ${page === currentPage && "active"}`}
        onClick={() => setCurrentPage(page)}>
            {page}</a>
    ))}
   </nav>
  )


}

export default Nav

