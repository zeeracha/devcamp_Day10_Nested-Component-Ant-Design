import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Radio } from 'antd';

const RadioComp = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('Gender:', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
    </Radio.Group>
  );
};

export default RadioComp;