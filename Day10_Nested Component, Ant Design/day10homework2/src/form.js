import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Upload,
} from 'antd';
import RadioComp from './radio.js';
import { Checkbox } from 'antd';
import Avatar from './picture';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';





function onChange(value) {
  console.log('changed', value);
}

const { Option } = Select;

function onChange1(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}


const FormComp = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange3(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  // const normFile = (e) => {
  //   console.log('Upload event:', e);

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      {/* <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
      {/* <Form.Item label="Username">
        <Input />
      </Form.Item>

      <Form.Item label="Email">
        <Input />
      </Form.Item>

      <Form.Item label="Password">
        <Input />
      </Form.Item> */}

      <Form.Item label="First Name">
        <Input max={50}/>
      </Form.Item>

      <Form.Item label="Last Name">
        <Input max={50}/>
      </Form.Item>
      
      
      <Form.Item label="Age">
        <InputNumber min={1} max={99} defaultValue={3} onChange={onChange} />
      </Form.Item>

      <Form.Item label="Gender">
        <RadioComp/>
      </Form.Item>
      <Form.Item label="Province">
      <Select
    showSearch
    placeholder="Bangkok"
    optionFilterProp="children"
    onChange={onChange1}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="bangkok">Bangkok</Option>
    <Option value="nakhonPathom">Nakhon Pathom</Option>
    <Option value="nonthaburi">Nonthaburi</Option>
    <Option value="pathumThani">Pathum Thani</Option>
    <Option value="samutPrakan">Samut Prakan</Option>
    <Option value="samutSakhon">Samut Sakhon</Option>
  </Select>
      </Form.Item>
      
      <Form.Item label="Member Period">
        <DatePicker />
      </Form.Item>

      {/* <Form.Item>
        <Avatar />
      </Form.Item> */}

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        //getValueFromEvent={normFile}
        extra=""
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload your CV</Button>
        </Upload>
      </Form.Item>
      
      <Form.Item label="Employed">
      <Checkbox onChange3={onChange3}></Checkbox>
      </Form.Item>

      <Form.Item label="Accept Term">
      <Checkbox onChange3={onChange3}>I accept the term and condition</Checkbox>
      </Form.Item>

      <Form.Item label="Additional Information">
        <textarea></textarea>
      </Form.Item>

     
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => <FormComp />;