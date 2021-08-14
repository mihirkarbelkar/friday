import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'components';
import { botInvestmentOverview } from 'selectors/aiHelp';
import { useRecoilValue } from 'recoil';
import { formatPrice } from 'app/utils/common';
import './style.scss';

const Overview = () => {
  const investmentOverview = useRecoilValue(botInvestmentOverview);

  const chartData = {
    labels: ['Stocks', 'Mutual Funds', 'Cryptocurrencies'],
    datasets: [
      {
        data: investmentOverview.map((item) => item.invested),
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
              <th>Current Value</th>
              <th>P &amp; L</th>
            </tr>
          </thead>
          <tbody>
            {investmentOverview.map((item) => (
              <tr>
                <td><FontAwesomeIcon icon={faChevronCircleDown} /> <span className="mx-1">{item.type}</span></td>
                <td>&#8377; {formatPrice(item.invested)}</td>
                <td>&#8377; {formatPrice(item.returns)}</td>
                <td className={item.profitPercentage > 0 ? 'positive' : 'negative'}>{formatPrice(item.profitPercentage)} %</td>
              </tr>
            ))}
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
                  font: {
                    family: 'Montserrat'
                  },
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
