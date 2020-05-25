import React from 'react';
import { Tabs, Card } from 'antd';
import RandomPassword from '@/pages/components/RandomPassword';

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
      </Tabs>
    </Card>
  );
};
