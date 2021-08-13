import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'components';
import './style.scss';

const Overview = () => {

  const chartData = {
    labels: ['Stocks', 'Mutual Funds', 'Crypto'],
    datasets: [
      {
        fillColor : '#b766df', // Put the gradient here as a fill color
                strokeColor : "#ff6c23",
                pointColor : "#fff",
                pointStrokeColor : "#ff6c23",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#ff6c23",
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          '#b766df',
          '#d73284',
          '#195ee5',
        ],
        borderColor: [
          '#2f2b50',
          '#2f2b50',
          '#2f2b50',
        ],
        borderWidth: 3,
      },
    ],
  };
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
      <Card title="AI Investment Breakup" className="ai-breakup">
        <Doughnut
          data={chartData}
          className="my-3"
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'right',
                labels: {
                  color: '#dbdadf',
                  boxWidth: 20,
                  boxHeight: 20,
                  padding: 10,
                  pointStyle: 'circle'
                }
              }
            }
          }}  
        />
      </Card>
    </div>
  );
};

export default Overview
