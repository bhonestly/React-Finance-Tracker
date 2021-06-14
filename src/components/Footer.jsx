import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className="footer-nav">
        <Link to="/">
          <img alt="icon" src="https://i.imgur.com/cKylCLt.png" />
        </Link>
        <h3>
          <em>Courtesy of <strong>Ernest Bizzell</strong></em>
        </h3>
      </div>
    </div>
  )
}