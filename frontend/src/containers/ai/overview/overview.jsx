import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'components';
import './style.scss';

const Overview = () => {
  return (
    <div className="ai-overview-container d-flex">
      <Card title="All Investments" className="all-investments">
        <Table responsive>
          <thead>
            <tr>
              <th>Overview</th>
              <th>Invested</th>
              <th>Returns</th>
              <th>Return Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FontAwesomeIcon icon={faChevronCircleDown} /> <span className="mx-1">Stocks</span></td>
              <td>$ 100,000</td>
              <td>$ 200,000</td>
              <td className="positive">100%</td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faChevronCircleDown} /> <span className="mx-1">Crypto</span></td>
              <td>$ 100,000</td>
              <td>$ 200,000</td>
              <td className="negative">-0.33%</td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faChevronCircleDown} /> <span className="mx-1">Mutual Funds</span></td>
              <td>$ 100,000</td>
              <td>$ 200,000</td>
              <td className="positive">100%</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <Card title="AI Investment Breakup" className="ai-breakup"></Card>
    </div>
  );
};

export default Overview
