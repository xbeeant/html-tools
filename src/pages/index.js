import React from 'react';
import { Tabs, Card } from 'antd';
import RandomPassword from '@/pages/components/RandomPassword';
import HexConvert from '@/pages/components/HexConvert';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default () => {
  return (
    <Card>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="随机密码" key="random-password">
          <RandomPassword />
        </TabPane>
        <TabPane tab="进制转换" key="hex-convert">
          <HexConvert />
        </TabPane>
      </Tabs>
    </Card>
  );
};
