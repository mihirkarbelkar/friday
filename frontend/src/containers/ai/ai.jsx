import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.scss';

const AI = () => {
  const history = useHistory();

  return (
    <div className="ai-tabs h-100">
      <Tabs defaultActiveKey="stocks" className="mb-3">
        <Tab eventKey="stocks" title="Stocks">
          <div className="jumbotron d-flex align-items-center justify-content-center h-100 flex-column">
            <img src="/images/robo-hi.png" alt="" height="200" className="mb-3" />
            <h2>Let us help you buy and sell stocks</h2>
            <p className="text-muted">Our AI bots helps you to buy and sell stocks automatically</p>
            <Button variant="primary" onClick={() => history.push('/ai/stocks')}>Start Now!</Button>
          </div>
        </Tab>
        <Tab eventKey="crypto" title="Crypto">
          sdafd
        </Tab>
      </Tabs>
    </div>
  );
};

export default AI;
