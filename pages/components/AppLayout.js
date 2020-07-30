import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;


const AppLayout =({children})=>{
    return(
        <div>
            <Menu>
                <Menu.Item key="home">HOME</Menu.Item>
                <Menu.Item key="about">ABOUT</Menu.Item>
                <Menu.Item key="pension">PENSION</Menu.Item>
                <Menu.Item key="garden">GARDEN</Menu.Item>
                <Menu.Item key="reservation">RESERVATION</Menu.Item>
                <Menu.Item key="tour">TOUR</Menu.Item>
                <Menu.Item key="notice">NOTICE</Menu.Item>
            </Menu>
            {children}

        </div>
    )
};

export default AppLayout;