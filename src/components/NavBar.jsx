import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
        <div className="inner-navs">
          <Link to="/incomes">
            <p>Incomes</p>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/expenses">
            <p>Expenses</p>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/budget">
            <p>Budget</p>
          </Link>
        </div>
        <div className="inner-navs">
          <Link to="/savings">
            <p>Savings</p>
          </Link>
        </div>
    </div>
  )
}