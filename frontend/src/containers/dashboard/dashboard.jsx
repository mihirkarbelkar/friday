import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { sampleState } from 'atoms/sample';
import { Tabs, Tab } from 'react-bootstrap';

const Dashboard = () => {
  const sample = useRecoilValue(sampleState);
  const setSampleVal = useSetRecoilState(sampleState);

  useEffect(() => {
    setSampleVal('testing recoil');
  }, []);

  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="stocks" title="Stocks">
        Test
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        asf
      </Tab>
      <Tab eventKey="crypto" title="Crypto" disabled>
        sdafd
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
