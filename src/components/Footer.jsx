import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className="footer-nav">
        <Link to="/">
          <img src="https://i.imgur.com/cKylCLt.png"/>
        </Link>
      </div>
    </div>
  )
}