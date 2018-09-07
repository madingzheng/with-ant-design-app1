import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import Router from 'next/router'
import { observer } from 'mobx-react'
import { observable , action} from 'mobx';
import Service from './service';
import authService from './auth'


const FormItem = Form.Item;

class LoginSubmit {
    @observable userName = '';
    @observable password = '';

    @action set(username,password) {
        this.userName = username;
        this.password = password;
    }
}

const login = new LoginSubmit();


@observer
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                authService.loggedIn = true;
                Router.push('/private')
            }else {
                authService.loggedIn = false;
            }
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
                </FormItem>
            </Form>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm