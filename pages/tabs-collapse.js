
import React from 'react';
import { Layout, Button, Modal, Tabs, Collapse, message } from 'antd';

const { Content } = Layout;
const { Panel } = Collapse;

export function QuizAdvancedInner() {
  const [open, setOpen] = React.useState(false);

  const showModal = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    message.success('Modal closed');
  };

  return (
    <Layout style={{ minHeight: '100vh', padding: 24 }}>
      <Content>
        <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
          Show Info
        </Button>

        <Modal title="Information" open={open} onOk={handleClose} onCancel={handleClose} okText="Close">
          <Tabs
            defaultActiveKey="details"
            items={[
              { key: 'details', label: 'Details', children: <div><p>Some details text inside the modal.</p></div> },
              { key: 'more', label: 'More Info', children: <div><p>More info text inside the modal.</p></div> },
            ]}
          />
        </Modal>

        <div style={{ marginTop: 24 }}>
          <h3>Collapse Below</h3>
          <Collapse>
            <Panel header="Stimming" key="1">
              <img src="https://media.tenor.com/WDMQjHjv-ioAAAAM/r-tachyon.gif" alt="stimming" style={{ maxWidth: '100%' }} />
            </Panel>
            <Panel header="Stimming 1" key="2">
              <img src="https://media.tenor.com/flJiO2ZsLwAAAAAM/agnes-tachyon-agnes.gif" alt="stimming1" style={{ maxWidth: '100%' }} />
            </Panel>
          </Collapse>
        </div>
      </Content>
    </Layout>
  );
}

export default function QuizAdvancedPage() {
  return <QuizAdvancedInner />;
}
