import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <ul>
      <Link to="/incomes">
      <li>Incomes</li>
      </Link>
      <Link to="/expenses">
      <li>Expenses</li>
      </Link>
      <Link to="/budget">
      <li>Budget</li>
      </Link>
      <Link to="/savings">
      <li>Savings</li>
      </Link>
      <Link to="/">
      <li>Home</li>
      </Link>
    </ul>
  )
}
