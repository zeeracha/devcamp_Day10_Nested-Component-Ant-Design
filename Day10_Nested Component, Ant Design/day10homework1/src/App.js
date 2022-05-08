import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import TableComp from './table'
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={[
          {
            key: '1',
            //icon: <HomeOutlined />,
            label: 'Home',
          },
          {
            key: '2',
            //icon: <UserOutlined />,
            label: 'Portfolio',
          },
          {
            key: '3',
            //icon: <ContactsOutlined />,
            label: 'Contact',
          },
          {
            key: '4',
            //icon: <InfoOutlined />,
            label: 'About Us',
          },
        ]}
        // items={new Array(3).fill(null).map((_, index) => ({
        //   key: String(index + 1),
        //   label: `nav ${index + 1}`,
        // }))}
        />
        
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        
        <TableComp/>
        
        
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}
    >Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
