import React from "react";
import Navigation from '../components/Menu'
import Layout from '../index.js'

export default class extends React.Component{
    render() {
        return(
            <Layout>
                <Navigation/>
                <span>Public</span>
            </Layout>
        )
    }
}