import React, {Component} from 'react';
import Router from 'next/router';
import authService from './auth'


const withAuth = InnerComponent => class extends React.Component{

    componentDidMount(){
        if (authService.loggedIn === false) {
            setTimeout(function () {
                Router.push('/');
                alert('请登入');
            },1000)

        }
    }
    render(){
        return <InnerComponent/>
    }

};

export default withAuth;