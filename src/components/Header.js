import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Go to Homepage</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Go to Add Expense page</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Go to Help page</NavLink><br></br></li>
        </ul>
    </header>
)

export default Header