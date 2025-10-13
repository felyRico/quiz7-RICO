import React from 'react';
import { Tabs, Collapse, Layout } from 'antd';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Content } = Layout;

export default function TabsCollapsePage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ margin: 24 }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <h2>vusrgugeshf9eshf9iwajiodwajiodw</h2>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Profile" key="1">
              <p>bufihufihaufihesufieshuifhesfu</p>
            </TabPane>

            <TabPane tab="Settings" key="2">
              <p>widhaewufheu9ifhwauhfuehfesuf</p>
            </TabPane>

            <TabPane tab="Help" key="3">
              <Collapse accordion>
                <Panel header="Who made this site?" key="faq1">
                  <p>I HAVE NO IDEA!</p>
                </Panel>
                <Panel header="What is this site for?" key="faq2">
                  <p>I HAVE NO IDEA!</p>
                </Panel>
              </Collapse>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
