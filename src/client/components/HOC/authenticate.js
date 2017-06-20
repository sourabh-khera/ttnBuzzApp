import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login'

export default function (Component) {
    const token = localStorage.getItem('token');
    if (token) {
        return React.createElement(Component)
    } else {
        return (<Route path="/" component={Login}/>)
    }
}











