import React from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import RoboHi from 'app/images/robo-hi.png';
import './style.scss';

const AI = () => {
  const history = useHistory();

  const renderTabContent = (item, urlSlug) => (
    <div className="jumbotron d-flex align-items-center justify-content-center h-100 flex-column">
      <img src={RoboHi} alt="" height="200" className="mb-3" />
      <h2>Let us help you buy and sell {item}</h2>
      <p className="text-muted">Our AI bots helps you to buy and sell {item} automatically</p>
      <Button variant="primary" onClick={() => history.push(`/ai/${urlSlug}`)}>Start Now!</Button>
    </div>
  );

  return (
    <div className="ai-tabs h-100">
      <Tabs defaultActiveKey="stocks" className="mb-3">
        <Tab eventKey="overview" title="Overview">
          {renderTabContent('stocks', 'stocks')}
        </Tab>
        <Tab eventKey="stocks" title="Stocks">
          {renderTabContent('stocks', 'stocks')}
        </Tab>
        <Tab eventKey="crypto" title="Crypto">
          {renderTabContent('cryptocurrencies', 'crypto')}
        </Tab>
        <Tab eventKey="mutual-funds" title="Mutual Funds">
          {renderTabContent('mutual funds', 'mutual-funds')}
        </Tab>
      </Tabs>
    </div>
  );
};

export default AI;
