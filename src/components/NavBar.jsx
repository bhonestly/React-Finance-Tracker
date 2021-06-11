import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
      <ul>
        <div className="inner-navs">
          <Link to="/incomes">
            <li>Incomes</li>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/expenses">
            <li>Expenses</li>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/budget">
            <li>Budget</li>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/savings">
            <li>Savings</li>
          </Link>
        </div>
      </ul>
      <ul>
        <div className="home-nav">
          <div className="inner-home-nav">
            <Link to="/">
              <li>Home</li>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  )
}