import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Card } from "components";
import {
  dashboardStocks,
  newsList,
  stockSummary,
  gainersList,
  losersList,
} from "atoms/dashboard";
import { useRecoilValue } from "recoil";
import StockList from "./stockList";
import NewsList from "./newsList";
import Summary from "./summary";

import "./style.scss";

const AddedTag = () => {
  return <div className="added-tag secondary-text-color">Added</div>;
};

const InvestmentBlock = (props) => {
  const {
    dashboardOverview,
    latestNews,
    investmentSummary,
    type,
    gainersData,
    loserData,
  } = props;
  return (
    <div className="d-flex explore-investment-wrapper flex-column">
      <div className="d-flex first-row">
        <Card title="Top 5 in Market" className="top-market">
          <StockList
            list={dashboardOverview}
            cols={["label", "image", "price", "chart"]}
            onAddWatchlist={() => null}
            type={`${type}`}
          />
        </Card>
        <Card className="all-investments">
          <Tabs defaultActiveKey="self" className="mb-3">
            <Tab eventKey="self" title="Your Investments">
              <div className="d-flex flex-column">
                <Summary summary={investmentSummary} />
                <StockList
                  list={investmentSummary?.companies}
                  cols={["label", "price"]}
                  type={`${type}`}
                />
              </div>
            </Tab>
            <Tab eventKey="ai" title="AI Investments">
              <div className="d-flex flex-column">
                <Summary summary={investmentSummary} />
                <StockList
                  list={investmentSummary?.companies}
                  cols={["label", "price"]}
                  type={`${type}`}
                />
              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>
      <div className="d-flex second-row">
        <Card title="Top Gainers" className="top-gainers">
          <StockList
            list={gainersData}
            cols={["label", "price"]}
            type={`${type}`}
          />
        </Card>
        <Card title="Top Losers" className="top-losers">
          <StockList
            list={loserData}
            cols={["label", "price"]}
            type={`${type}`}
          />
        </Card>
        <Card title={`Latest News on ${props.tab}`} className="latest-news">
          <NewsList list={latestNews} />
        </Card>
      </div>
    </div>
  );
};
const Dashboard = () => {
  const dashboardOverview = useRecoilValue(dashboardStocks);
  const latestNews = useRecoilValue(newsList);
  const investmentSummary = useRecoilValue(stockSummary);
  const gainersData = useRecoilValue(gainersList);
  const loserData = useRecoilValue(losersList);
  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="stocks" title="Stocks">
        <InvestmentBlock
          type="stocks"
          dashboardOverview={dashboardOverview["stocks"]}
          latestNews={latestNews["stocks"]}
          investmentSummary={investmentSummary["stocks"]}
          tab={"Stocks"}
          gainersData={gainersData["stocks"]}
          loserData={loserData["stocks"]}
        />
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        <InvestmentBlock
          type="mf"
          dashboardOverview={dashboardOverview["mf"]}
          latestNews={latestNews["mf"]}
          investmentSummary={investmentSummary["mf"]}
          tab={"Mutual Funds"}
          gainersData={gainersData["stocks"]}
          loserData={loserData["stocks"]}
        />
      </Tab>
      <Tab eventKey="crypto" title="Crypto">
        <InvestmentBlock
          type="crypto"
          dashboardOverview={dashboardOverview["crypto"]}
          latestNews={latestNews["crypto"]}
          investmentSummary={investmentSummary["crypto"]}
          tab={"Crypto"}
          gainersData={gainersData["stocks"]}
          loserData={loserData["stocks"]}
        />
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
