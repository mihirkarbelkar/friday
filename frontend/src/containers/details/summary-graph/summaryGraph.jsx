import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ReactApexChart from "react-apexcharts";
import { stockDetail } from 'atoms/detail';
import { formatPrice } from 'app/utils/common';
import { Nav } from 'react-bootstrap';
import './style.scss';

const SummaryGraph = (props) => {
  const [exchange, setExchange] = useState('nse');
  const summaryData = useRecoilValue(stockDetail);

  const getPercent = () => {
    const change = ((summaryData[exchange].currentPrice - summaryData[exchange].previousPrice) / summaryData[exchange].previousPrice) * 100;
    return Math.round(change, 2);
  }

  const chartOptions = {
    chart: {
      type: 'candlestick',
      foreColor: '#dbdadf',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    xaxis: {
      type: 'datetime',
      show: false
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      show: false
    },
    grid: {
      show: false
    },
    colors:['#86eb8a']
  };

  return (
    <div className="d-flex flex-column summary-graph-wrapper">
      <div className="summary-graph-header d-flex justify-content-between py-2">
        <div className="d-flex justify-content-center align-items-center">
          <img src={summaryData[exchange].image} alt="" className="detail-icon" />
          <div className="symbol-detail">{summaryData[exchange].symbol}</div>
        </div>
        <div className="d-flex flex-column align-items-end">
          <div>&#8377; {formatPrice(summaryData[exchange].currentPrice)}</div>
          <div
            className={`${(summaryData[exchange].currentPrice - summaryData[exchange].previousPrice) > 0 ? 'gain' : 'loss'}`}
          >
            {formatPrice(summaryData[exchange].currentPrice - summaryData[exchange].previousPrice)}&nbsp;
            ({getPercent()}%)&nbsp;
            {(summaryData[exchange].currentPrice - summaryData[exchange].previousPrice) > 0 ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)}
          </div>
        </div>
      </div>
      <div className="summary-chart-body">
        <Nav variant="pills" defaultActiveKey={exchange} className="exchange-input my-3">
          <Nav.Item>
            <Nav.Link eventKey="nse" onClick={() => setExchange('nse')}>NSE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="bse" onClick={() => setExchange('bse')}>BSE</Nav.Link>
          </Nav.Item>
        </Nav>
        <ReactApexChart
          options={chartOptions}
          series={summaryData[exchange].chartData}
        />
      </div>
    </div>
  );
}

export default SummaryGraph;
