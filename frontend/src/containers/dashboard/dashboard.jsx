import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sampleState } from "atoms/sample";
import { Tabs, Tab, ListGroup } from "react-bootstrap";
import CustomCard from "../../components/card";
import "./dashboard.scss";
const invData = [
  {
    id: "",
    img: "https://picsum.photos/200",
    name: "Reliance Industries",
    price: "212312",
    inc: "10%",
    status: true,
  },
];

const AddedTag = () => {
  return <div className="added-tag secondary-text-color">Added</div>;
};
const Dashboard = () => {
  const sample = useRecoilValue(sampleState);
  const setSampleVal = useSetRecoilState(sampleState);

  useEffect(() => {
    setSampleVal("testing recoil");
  }, []);

  return (
    <Tabs defaultActiveKey="stocks" className="mb-3">
      <Tab eventKey="overview" title="Overview">
        asf
      </Tab>
      <Tab eventKey="stocks" title="Stocks">
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
                {invData.map((data) => (
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
      </Tab>
      <Tab eventKey="mf" title="Mutual Funds">
        asf
      </Tab>
      <Tab eventKey="crypto" title="Crypto" disabled>
        sdafd
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
