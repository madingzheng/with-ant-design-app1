import React from 'react'
import { Menu } from 'antd';
import Link from 'next/link';

export default class Navigation extends React.Component {

    render() {
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="index">
                    <Link href={`/`}><a>Index</a></Link>
                </Menu.Item>
                <Menu.Item key="public">
                    <Link href={`/public`}><a>public</a></Link>
                </Menu.Item>
                <Menu.Item key="private">
                    <Link href={`/private`}><a>private</a></Link>
                </Menu.Item>
            </Menu>
        );
    }
}
