import { observable , action} from 'mobx';
import React from 'react';
import { Spin, Alert } from 'antd';
import Layout from '../index.js'
import { observer } from 'mobx-react'


class Service {
    @observable loading = false ;
    @action on() {
        this.loading = false;
    }
    @action off() {
        this.loading = true;
    }
}


@observer
class Loading extends React.Component {

    render() {
        return (
            <Layout>
                   <Spin spinning={Service.loading}>
                       <Alert
                           message="Error"
                           description="Please log in....."
                           type="error"
                           showIcon
                       />
                   </Spin>
            </Layout>
        );
    }
}

export default Loading;