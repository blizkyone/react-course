import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PublicRoute = ({
    isAuthenticated,
    // rename component as Component
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/dashboard" />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)

// Create PublicRoute
// Redirect to /dashboard if logged in
// Render component if not logged in
// use it for the LoginPage