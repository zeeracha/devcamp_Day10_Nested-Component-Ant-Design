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
  Radio,
} from 'antd';
import { Checkbox } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import moment from "moment";




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

const { RangePicker } = DatePicker;
function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day").subtract(1, "days");
}

const customValidate = (rule, value) => {
  //console.log(value);
  if (value < 18) {
    return Promise.reject(new Error("อายุน้อยเกินไป"));
  } else if (value >= 60) {
    return Promise.reject(new Error("อายุมากเกินไป"));
  } else {
    return Promise.resolve();
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 4,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};




const FormComp = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish =async (values) => {
    console.log(values.firstname);
    console.log(values.lastname);
    console.log(values.age);
    console.log(values.gender);
    console.log(values.province);
    if (values.other !== undefined) {
      console.log(values.other);
    }
    console.log(`${values.memberperiod[0]._d} to ${values.memberperiod[1]._d}`);
    console.log(values.cv);

    console.log(values.employed);
    console.log(values.acceptTerm);
    console.log(values.addi);
  };

  function onChange3(e) {
    console.log(`checked = ${e.target.checked}`);
  }

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
      onFinish={onFinish}
    >
     

      <Form.Item name="firstname" label="First Name">
        <Input max={50}/>
      </Form.Item>

      <Form.Item name="lastname" label="Last Name">
        <Input max={50}/>
      </Form.Item>
      
      
      <Form.Item  name="age" label="Age" rules={[
        {
          type: "number",
          min: 0,
          max: 99,
          validator: customValidate,
        },
      ]}>
        <InputNumber onChange={onChange} />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
      <Radio.Group >
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
    </Radio.Group>
      </Form.Item>

      <Form.Item name="province" label="Province">
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
    <Option value="abroad">Abroad</Option>
  </Select>
      </Form.Item>

      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.province !== currentValues.province
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("province") === "abroad" ? (
            <Form.Item
              name="other"
              label="Other"
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      
      {/* <Form.Item label="Member Period">
        <DatePicker />
      </Form.Item> */}

      <Form.Item name="memberperiod" label="Member Period">
        <RangePicker disabledDate={disabledDate} />
      </Form.Item>

      {/* <Form.Item>
        <Avatar />
      </Form.Item> */}

      {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        //getValueFromEvent={normFile}
        extra=""
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload your CV</Button>
        </Upload>
      </Form.Item> */}

      <Form.Item name="cv" label="Put your cv link here">
        <Input/>
      </Form.Item>
      
      {/* <Form.Item name="employed" label="Employed">
      <Checkbox onChange3={onChange3}></Checkbox>
      </Form.Item> */}

      {/* <Form.Item name="acceptTerm" label="Accept Term">
      <Checkbox onChange3={onChange3}>I accept the term and condition</Checkbox>
      </Form.Item> */}

      <Form.Item name="employed" valuePropName="checked" label="employed"
        
        //{...tailFormItemLayout}
      >
        <Checkbox> </Checkbox>
      </Form.Item>

      
      <Form.Item
        name="acceptTerm"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Please accept term")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>I accept the term and condition</Checkbox>
      </Form.Item>

      <Form.Item name="addi" label="Additional Information">
        <textarea></textarea>
      </Form.Item>

     
      <Form.Item name="submit"
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