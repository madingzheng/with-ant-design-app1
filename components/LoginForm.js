import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import Router from 'next/router'
import { observer } from 'mobx-react'
import authService from './auth'
import axios from 'axios'

const FormItem = Form.Item;



@observer
class NormalLoginForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const url = 'http://www.neoscholars.com:10020/dauth/accountLogin';
                axios.post(url,{
                    "account": values.userName,
                    "password":values.password
                }).then(function (response) {
                        if (response.data) {
                            localStorage.setItem('token',response.data);
                            Router.push('/private')
                            authService.loggedIn = true;
                        }
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            }else {
                authService.loggedIn = false;
                localStorage.setItem('loggedIn',false);
            }
        });
    };

    handleButtonClick = () => {
        const url = 'http://www.neoscholars.com:10020/dauth/verify';
        axios({
            method:"POST",
            url: url,
            headers:{
                "Authorization": localStorage.getItem('token')
            }
        }).then(function (response) {
            console.log(response);
            Router.push('/private')
            authService.loggedIn = true;
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 300}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
                        Log in
                    </Button>
                    <Button type="primary" onClick={this.handleButtonClick}>请求第二个API</Button>
                </FormItem>
            </Form>




        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm