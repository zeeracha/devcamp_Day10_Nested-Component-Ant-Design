import 'antd/dist/antd.css'
import React from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import EditableTable from './EditableRow'
import FormComp from './form';
import ContentComp from './content';

const { Header, Content, Footer } = Layout;

function App() {
  let menu = ["Home","Portfolio", "Contact", "About US" ]
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
        />
        
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        
        
        <EditableTable/>
        <FormComp/>
        <ContentComp/>
        
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}
    >Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
