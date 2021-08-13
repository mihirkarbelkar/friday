import React, { useState } from 'react';
import { Tabs, Tab, Nav, Form, FloatingLabel, Button, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { formatPrice } from 'app/utils/common';
import './style.scss';

const BuySell = () => {
  const [exchange, setExchange] = useState('nse');
  const [priceType, setPriceType] = useState('market');

  const handlePriceChange = (value) => {
    console.log(value);
    setPriceType(value);
  };

  return (
    <div className="buy-sell-wrapper">
      <Tabs defaultActiveKey="buy" className="mb-3">
        <Tab eventKey="buy" title="Buy">
          <div className="d-flex justify-content-between align-items-center">
            <FloatingLabel
              controlId="floatingInput"
              label="Quantity"
              className="quantity-input"
            >
              <Form.Control type="number" placeholder="Eg: 1234" />
            </FloatingLabel>
            <Nav variant="pills" defaultActiveKey={exchange} className="exchange-input">
              <Nav.Item>
                <Nav.Link eventKey="nse" onClick={() => setExchange('nse')}>NSE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bse" onClick={() => setExchange('bse')}>BSE</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <FloatingLabel
              controlId="priceInput"
              label="Price"
              className="quantity-input"
            >
              <Form.Control type="number" placeholder="Eg: 1234" disabled />
            </FloatingLabel>
            <Form.Select aria-label="price" className="price-limit-select">
              <option value="limit">Price Limit</option>
              <option value="market">Market Value</option>
            </Form.Select>
          </div>
          <div className="d-flex my-3 justify-content-end">
           <OverlayTrigger
              placement="bottom"
              overlay={(overlayProps) => (
                <Tooltip id="button-tooltip" {...overlayProps}>
                  Click to add money
                </Tooltip>
              )}
            >
              <Badge bg="success" className="d-flex flex-column justify-content-center">
                <div>Balance</div>
                <div className="wallet-balance">&#8377; {formatPrice(100000)}</div>
              </Badge>
            </OverlayTrigger>
          </div>
          <p className="text-muted text-center">By clicking on buy, you accept to our terms and conditions</p>
          <Button variant="primary" className="w-100">Buy</Button>
        </Tab>
        <Tab eventKey="sell" title="Sell">
        <div className="d-flex justify-content-between align-items-center">
            <FloatingLabel
              controlId="floatingInput"
              label="Quantity"
              className="quantity-input"
            >
              <Form.Control type="number" placeholder="Eg: 1234" />
            </FloatingLabel>
            <Nav variant="pills" defaultActiveKey={exchange} className="exchange-input">
              <Nav.Item>
                <Nav.Link eventKey="nse" onClick={() => setExchange('nse')}>NSE</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bse" onClick={() => setExchange('bse')}>BSE</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <FloatingLabel
              controlId="priceInput"
              label="Price"
              className="quantity-input"
            >
              <Form.Control type="number" placeholder="Eg: 1234" disabled />
            </FloatingLabel>
            <Form.Select aria-label="price" className="price-limit-select" onChange={handlePriceChange}>
              <option value="limit" selected={priceType === 'limit'}>Price Limit</option>
              <option value="market" selected={priceType === 'market'}>Market Value</option>
            </Form.Select>
          </div>
          <div className="d-flex my-3 justify-content-end">
            <Badge bg="success" className="d-flex flex-column justify-content-center">
              <div>Available Shares</div>
              <div className="wallet-balance">{formatPrice(2324)}</div>
            </Badge>
          </div>
          <p className="text-muted text-center">By clicking on sell, you accept to our terms and conditions</p>
          <Button variant="primary" className="w-100">Sell</Button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BuySell
