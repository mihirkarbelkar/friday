import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="stocks" title="Stocks">
        Test
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        asf
      </Tab>
      <Tab eventKey="crypto" title="Crypto">
        sdafd
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
