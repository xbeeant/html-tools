import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RandomPassword = () => {
  const [selected, setSelected] = useState([
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
  ]);
  const [_num, setNum] = useState(1);
  const [form] = Form.useForm();

  const onFinish = values => {
    randomStr(values._length);
  };

  const randomStr = _length => {
    let chars = selected.join('');
    let result = '';
    for (let _n = _num; _n > 0; --_n) {
      for (let i = _length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      result += '\n';
    }

    form.setFieldsValue({
      _result: result,
    });
  };

  const options = [
    { label: 'A-Z', value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
    { label: 'a-z', value: 'abcdefghijklmnopqrstuvwxyz' },
    { label: '0-9', value: '0123456789' },
    { label: '!@#$%^&*', value: '!@#$%^&*' },
  ];

  const onChange = checkedValues => {
    setSelected(checkedValues);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="randomPasswordForm"
      initialValues={{ _charater: selected, _length: '16', _num: 1 }}
      onFinish={onFinish}
    >
      <Form.Item label="字符" name="_charater">
        <Checkbox.Group
          options={options}
          defaultValue={['Apple']}
          onChange={onChange}
        />
      </Form.Item>

      <Form.Item label="长度" name="_length">
        <InputNumber
          style={{ width: '100%' }}
          formatter={value => `${value}  位`}
        />
      </Form.Item>

      <Form.Item label="数量" name="_num">
        <InputNumber
          onChange={val => setNum(val)}
          style={{ width: '100%' }}
          formatter={value => `${value}`}
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          生成
        </Button>
      </Form.Item>

      <Form.Item label="结果" name="_result">
        <Input.TextArea rows={_num} style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  );
};

export default RandomPassword;
