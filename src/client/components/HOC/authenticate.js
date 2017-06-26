import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function (Component) {
    return class HOC extends React.Component {
        render () {
            const token = localStorage.getItem('token');
            if (token) {
                return <Component {...this.props} />
            } else {
                return (<Redirect to="/" />)
            }
        }
    }
}











