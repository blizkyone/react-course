// Higher Order Component - A component that renders another component
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, do not share</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>I don't know you, authenticate!</p>}
        </div>
    )
}

// require authentication

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="details"/>, document.getElementById('app'))