import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="head">
            <h1>userSystem</h1>
        </div>
        <div className="searchbar">
            <input type="text" placeholder='search a user' />
        </div>
    </div>
    </>
  )
}
