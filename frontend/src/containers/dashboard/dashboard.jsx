import React from "react";
import { Tabs, Tab, ListGroup } from "react-bootstrap";
import CustomCard from "../../components/card";
import "./dashboard.scss";
const MFdata = [
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "Reliance Industries",
    price: "212312",
    inc: "10%",
    status: true,
  },
];

const cryptoData = [
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "Bitcoin",
    price: "212312",
    inc: "10%",
    status: true,
  },
];
const stockData = [
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "Reliance Industries",
    price: "212312",
    inc: "10%",
    status: true,
  },
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "HPCL",
    price: "212",
    inc: "20%",
    status: true,
  },
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "Company 2",
    price: "2112",
    inc: "50%",
    status: true,
  },
];
const AddedTag = () => {
  return <div className="added-tag secondary-text-color">Added</div>;
};
const GainerLoserComponent = ({ gainerLoserData }) => {
  return (
    <ListGroup bsPrefix={"inv-list-group"}>
      <ListGroup.Item>
        <div className="row secondary-text-color py-2 text-uppercase">
          <div className="col">Company</div>
          <div className="col text-end">Market Price</div>
        </div>
      </ListGroup.Item>
      {gainerLoserData.map((data) => (
        <ListGroup.Item bsPrefix="inv-list-item">
          <div className="row">
            <div className="col">
              <div className="row d-flex align-items-center">
                <div className="col-4">
                  <img src={data.img} alt="" className="inv-list-item-img" />
                </div>
                <div className="col-8 p-0">{data.name}</div>
              </div>
            </div>
            <div className="col">
              <div className="price-indicator text-end">
                <div>{data.price}</div>
                <div>{data.inc}</div>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
const InvestmentBlock = (props) => {
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-8">
          <CustomCard title="Top 5 in Market">
            <ListGroup bsPrefix={"inv-list-group"}>
              <ListGroup.Item>
                <div className="row secondary-text-color py-2 text-uppercase">
                  <div className="col-8">Company</div>
                  <div className="col text-end">Market Price</div>
                  <div className="col text-end">Watchlist</div>
                </div>
              </ListGroup.Item>
              {props.investmentData.map((data) => (
                <ListGroup.Item bsPrefix="inv-list-item">
                  <div className="row">
                    <div className="col-8">
                      <div className="row d-flex align-items-center">
                        <div className="col-2">
                          <img
                            src={data.img}
                            alt=""
                            className="inv-list-item-img"
                          />
                        </div>
                        <div className="col-4 p-0">{data.name}</div>
                        <div className="col-7 chart"></div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="price-indicator text-end">
                        <div>{data.price}</div>
                        <div>{data.inc}</div>
                      </div>
                    </div>
                    <div className="col-2 watchlist text-end">
                      {data.status && <AddedTag />}
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </CustomCard>
        </div>
        <div className="col-4">
          <CustomCard title="Your Investments"></CustomCard>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <CustomCard title="Top Gainers">
            <GainerLoserComponent gainerLoserData={props.investmentData} />
          </CustomCard>
        </div>
        <div className="col-4">
          <CustomCard title="Top Losers">
            <GainerLoserComponent gainerLoserData={props.investmentData} />
          </CustomCard>
        </div>
        <div className="col-4">
          <CustomCard title={`Latest News on ${props.typeOfInvestment}`}>
            <ListGroup bsPrefix={"inv-list-group"}>
              <ListGroup.Item>
                <div className="row secondary-text-color py-2 text-uppercase">
                  <div className="col">Company</div>
                  <div className="col text-end">Market Price</div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </CustomCard>
        </div>
      </div>
    </>
  );
};
const Dashboard = () => {
  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="overview" title="Overview">
        asf
      </Tab>
      <Tab eventKey="stocks" title="Stocks">
        <InvestmentBlock typeOfInvestment="Stocks" investmentData={stockData} />
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        <InvestmentBlock
          typeOfInvestment="Mutual Funds"
          investmentData={MFdata}
        />
      </Tab>
      <Tab eventKey="crypto" title="Crypto">
        <InvestmentBlock
          typeOfInvestment="Crypto"
          investmentData={cryptoData}
        />
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
