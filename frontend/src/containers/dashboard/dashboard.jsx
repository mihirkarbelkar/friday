import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Card } from 'components';
import { dashboardStocks, newsList, stockSummary } from 'atoms/dashboard';
import { useRecoilValue } from 'recoil';
import StockList from './stockList';
import NewsList from './newsList';
import Summary from './summary';

import "./style.scss";

const AddedTag = () => {
  return <div className="added-tag secondary-text-color">Added</div>;
};

const Dashboard = () => {
  const dashboardOverview = useRecoilValue(dashboardStocks);
  const latestNews = useRecoilValue(newsList);
  const investmentSummary = useRecoilValue(stockSummary);

  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="stocks" title="Stocks">
        <div className="d-flex explore-investment-wrapper flex-column">
          <div className="d-flex first-row">
            <Card title="Top 5 in Market" className="top-market">
              <StockList list={dashboardOverview} cols={['label', 'image', 'price', 'chart']} onAddWatchlist={() => null} />
            </Card>
            <Card className="all-investments">
              <Tabs defaultActiveKey="self" className="mb-3">
                <Tab eventKey="self" title="Your Investments">
                  <div className="d-flex flex-column">
                    <Summary summary={investmentSummary} />
                    <StockList list={investmentSummary?.companies} cols={['label', 'price']} />
                  </div>
                </Tab>
                <Tab eventKey="ai" title="AI Investments">
                  <div className="d-flex flex-column">
                    <Summary summary={investmentSummary} />
                    <StockList list={investmentSummary?.companies} cols={['label', 'price']} />
                  </div>
                </Tab>
              </Tabs>
            </Card>
          </div>
          <div className="d-flex second-row">
            <Card title="Top Gainers" className="top-gainers">
              <StockList list={dashboardOverview} cols={['label', 'price']} />
            </Card>
            <Card title="Top Losers" className="top-losers">
              <StockList list={dashboardOverview} cols={['label', 'price']} />
            </Card>
            <Card title="Latest New on Stocks" className="latest-news">
              <NewsList list={latestNews} />
            </Card>
          </div>
        </div>
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        
      </Tab>
      <Tab eventKey="crypto" title="Crypto">
        
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
