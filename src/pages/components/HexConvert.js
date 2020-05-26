import React, { useState } from 'react';
import { Form, Input, Radio } from 'antd';
import { layout } from '@/styles';


const RandomPassword = () => {
  const [from, setFrom] = useState(10);
  const [value, setValue] = useState(0);

  const [form] = Form.useForm();

  const zhengze = (x) => {
    let str;
    x = parseInt(x);
    if (x <= 10) {
      str = new RegExp('^[+\\-]?[0-' + (x - 1) + ']*[.]?[0-' + (x - 1) + ']*$', 'gi');
    } else {
      let letter = '';
      switch (x) {
        case 11:
          letter = 'a';
          break;
        case 12:
          letter = 'b';
          break;
        case 13:
          letter = 'c';
          break;
        case 14:
          letter = 'd';
          break;
        case 15:
          letter = 'e';
          break;
        case 16:
          letter = 'f';
          break;
        case 17:
          letter = 'g';
          break;
        case 18:
          letter = 'h';
          break;
        case 19:
          letter = 'i';
          break;
        case 20:
          letter = 'j';
          break;
        case 21:
          letter = 'k';
          break;
        case 22:
          letter = 'l';
          break;
        case 23:
          letter = 'm';
          break;
        case 24:
          letter = 'n';
          break;
        case 25:
          letter = 'o';
          break;
        case 26:
          letter = 'p';
          break;
        case 27:
          letter = 'q';
          break;
        case 28:
          letter = 'r';
          break;
        case 29:
          letter = 's';
          break;
        case 30:
          letter = 't';
          break;
        case 31:
          letter = 'u';
          break;
        case 32:
          letter = 'v';
          break;
        case 33:
          letter = 'w';
          break;
        case 34:
          letter = 'x';
          break;
        case 35:
          letter = 'y';
          break;
        case 36:
          letter = 'z';
          break;
      }
      str = new RegExp('^[+\\-]?[0-9a-' + letter + ']*[.]?[0-9a-' + letter + ']*$', 'gi');
    }
    return str;
  };

  const parseFloat = (x, y) => {
    x = x.toString();
    const num = x;
    const data = num.split('.');
    //将右边转换为数组 得到类似 [1,0,1]
    const you = data[1].split('');
    //小数部分的和
    let sum = 0;
    for (let i = 0; i < data[1].length; i++) {
      sum += you[i] * Math.pow(y, -1 * (i + 1));
    }
    return parseInt(data[0], y) + sum;
  };

  const convert = (val) => {
    let _v = value;
    if(val) {
      _v = val;
    }
    setValue(_v);
    let px0 = `${_v}`.match(zhengze(from));
    let px1;
    if (px0) {
      if (px0[0].indexOf('.') === -1) {
        px1 = parseInt(px0, `${from}`);
      } else {
        px1 = parseFloat(px0, `${from}`);
      }
      form.setFieldsValue({
        "_result2": px1.toString('2'),
        "_result4": px1.toString('4'),
        "_result8": px1.toString('8'),
        "_result10": px1.toString('10'),
        "_result16": px1.toString('16'),
        "_result32": px1.toString('32'),
      })
    }
  };

  const onFinish = () => {
  };

  return (
    <Form
      {...layout}
      form={form}
      initialValues={{ _from: from, "_value": value }}
      onFinish={onFinish}
    >
      <Form.Item label="原" name="_from">
        <Radio.Group onChange={e => {
          setFrom(e.target.value);
          form.setFieldsValue({
            "_value": "",
          })
        }}>
          <Radio value={2}>2进制</Radio>
          <Radio value={4}>4进制</Radio>
          <Radio value={8}>8进制</Radio>
          <Radio value={10}>10进制</Radio>
          <Radio value={16}>16进制</Radio>
          <Radio value={32}>32进制</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="值" name="_value">
        <Input style={{ width: '100%' }} onChange={e => {
          convert(e.target.value);
        }}/>
      </Form.Item>
      <Form.Item label="2进制" name="_result2">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
      <Form.Item label="4进制" name="_result4">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
      <Form.Item label="8进制" name="_result8">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
      <Form.Item label="10进制" name="_result10">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
      <Form.Item label="16进制" name="_result16">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
      <Form.Item label="32进制" name="_result32">
        <Input style={{ width: '100%' }} disabled/>
      </Form.Item>
    </Form>
  );
};

export default RandomPassword;
