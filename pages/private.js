import React from "react";
import Navigation from '../components/Menu'
import Layout from '../index.js'
import Service from '../components/service'
import withAuth from '../components/withAuth'
import Router from "next/dist/lib/router";

export default withAuth(class Private extends React.Component{

    render() {
        return(
            <Layout>
                <Navigation/>
                <span>Private</span>
            </Layout>
        )
    }
})


