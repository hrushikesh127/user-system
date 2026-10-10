import React from 'react'
import './navbar.css'

export default function Navbar({setsearch}) {
  return (
    <>
    <div className="navbar">
        <div className="head">
            <h1>userSystem</h1>
        </div>
        <div className="searchbar">
            <input type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='search a user' />
        </div>
    </div>
    </>
  )
}
