import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log('search:', val);
}

export default () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option defaultvalue="bangkok">Bangkok</Option>
    <Option value="nakhonPathom">Nakhon Pathom</Option>
    <Option value="nonthaburi">Nonthaburi</Option>
    <Option value="pathumThani">Pathum Thani</Option>
    <Option value="samutPrakan">Samut Prakan</Option>
    <Option value="samutSakhon">Samut Sakhon</Option>
  </Select>
);
