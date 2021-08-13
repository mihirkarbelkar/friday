import React from 'react';
import { Card } from 'components';
import MetaData from './meta-data';
import BuySell from './buy-sell';
import SummaryGraph from './summary-graph';
import './style.scss';

const Details = () => {
  return (
    <div className="details-wrapper d-flex flex-column">
      <div className="d-flex first-row">
        <Card className="detail-graph-card">
          <SummaryGraph />
        </Card>
        <Card className="buy-sell-card">
          <BuySell />
        </Card>
      </div>
      <MetaData />
    </div>
  );
};

export default Details
