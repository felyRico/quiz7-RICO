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
          <h2>Tabs + Collapse Example</h2>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Profile" key="1">
              <p>This is the Profile section.</p>
            </TabPane>

            <TabPane tab="Settings" key="2">
              <p>This is the Settings section.</p>
            </TabPane>

            <TabPane tab="Help" key="3">
              <Collapse accordion>
                <Panel header="FAQ 1" key="faq1">
                  <p>Answer text for FAQ 1. Explain the common question here.</p>
                </Panel>
                <Panel header="FAQ 2" key="faq2">
                  <p>Answer text for FAQ 2. Provide helpful clarification or steps.</p>
                </Panel>
              </Collapse>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
