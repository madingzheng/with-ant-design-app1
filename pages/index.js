import React from 'react'
import Layout from '../index.js'
import LoginForm from '../components/LoginForm';
import Navigation from '../components/Menu'

export default class extends React.Component{

    render() {
        return(
            <Layout>
                <Navigation/>
                <LoginForm/>
            </Layout>
        )
    }
}