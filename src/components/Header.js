import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Go to Homepage</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Go to Add Expense page</NavLink></li>
        </ul>
    </header>
)

export default Header