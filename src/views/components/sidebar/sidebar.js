import React from 'react';
import PropTypes from 'prop-types';
import GitHubLogo from '../github-logo';
import { Menu, Icon, Button, Card, Select, Tooltip } from 'antd';
import './sidebar.css';


const SubMenu = Menu.SubMenu;



const Sidebar = ({collapsedSate}) => (
  <div className='antSideBar' style={{ width: 240 }}>
    {console.log('sidebars collapsed state', collapsedSate)}
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsedSate}
    >
      <Menu.Item key="1">
        <Icon type="line-chart" />
        <span>Market</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Option 2</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="inbox" />
        <span>Option 3</span>
      </Menu.Item>
      <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>

        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="13">Option 13</Menu.Item>
          <Menu.Item key="14">Option 14</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
);


export default Sidebar;
