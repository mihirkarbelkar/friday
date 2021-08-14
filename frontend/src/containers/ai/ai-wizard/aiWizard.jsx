import React, { useState, forwardRef, useRef } from 'react';
import { Badge, Form, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faLevelDownAlt } from '@fortawesome/free-solid-svg-icons';
import { addDaysToDate } from 'app/utils/date';
import dummy from 'app/constants/dummy';
import { formatPrice } from 'app/utils/common';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const AiWizard = (props) => {
  const { step, onContinue, onFinish, onCancel, atom } = props;
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isOtherAmount, setIsOtherAmount] = useState(false);
  const [botParams, setBotParams] = useRecoilState(atom);
  const otherAmountFormRef = useRef(null);

  const handleAmount = (amount) => {
    setBotParams({ ...botParams, amount });
    onContinue(step + 1);
  };

  const handleOtherAmount = (e) => {
    e.preventDefault();
    e.stopPropagation();

    handleAmount(e.target.amount.value);
  };

  const handleExpiry = (date) => {
    const expiryTime = date.getTime() / 1000;
    setBotParams({ ...botParams, expiryTime });
    onContinue(step + 1);
  };

  const otherDate = forwardRef(({ value, onClick }, ref) => (
    <div className="other-date-button" role="presentation" onClick={onClick} ref={ref}>
      {props.children}
    </div>
  ));

  return (
    <div className="step-quiz-container">
      <div className={`step-quiz-1 h-100 ${step !== 1 ? 'd-none' : ''}`}>
        <h3 className="wizard-question">
          01. How much would you like to invest?
          <Badge bg="success" className="mx-3">Wallet Balance: &#8377; {formatPrice(100000)}</Badge>
        </h3>
        <div className="d-flex amount-selector-container my-3">
          <div className="amount-selection-button" role="presentation" onClick={() => handleAmount(10000)}>&#8377; {formatPrice(10000)}</div>
          <div className="amount-selection-button" role="presentation" onClick={() => handleAmount(20000)}>&#8377; {formatPrice(20000)}</div>
          <div className="amount-selection-button" role="presentation" onClick={() => setIsOtherAmount(true)}>Other</div>
          {isOtherAmount && (
            <Col xs="auto" className="other-amount-box">
              <Form onSubmit={handleOtherAmount} className="d-flex other-amount-form" ref={otherAmountFormRef}>
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Amount
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>&#8377;</InputGroup.Text>
                  <FormControl id="otherAmount" name="amount" placeholder="Amount" type="number" />
                </InputGroup>
                <Button type="submit">
                  <FontAwesomeIcon icon={faLevelDownAlt} />
                </Button>
              </Form>
            </Col>
          )}
        </div>
      </div>
      <div className={`step-quiz-2 h-100 ${step !== 2 ? 'd-none' : ''}`}>
        <h3 className="wizard-question">
          02. When do you expect your returns?
        </h3>
        <div className="d-flex amount-selector-container my-3">
          <div className="amount-selection-button" role="presentation" onClick={() => handleExpiry(addDaysToDate(7))}>7 days</div>
          <div className="amount-selection-button" role="presentation" onClick={() => handleExpiry(addDaysToDate(30))}>30 days</div>
          <DatePicker
            selected={new Date()}
            onChange={handleExpiry}
            minDate={moment().toDate()}
            customInput={
              <otherDate>
                <FontAwesomeIcon icon={faCalendarAlt} />
                Choose Date
              </otherDate>}
          />
        </div>
      </div>
      <div className={`step-quiz-3 h-100 ${step !== 3 ? 'd-none' : ''}`}>
        <h3 className="wizard-question">
          03. Accept our Terms &amp; Conditions
        </h3>
        <div className="terms-wrapper">{dummy.lorem()}</div>
        <Form className="my-4">
          <Form.Check 
            type="checkbox"
            id="accept-terms"
            className="fs-5"
            label="I accept the terms and conditions"
            onChange={(e) => setIsTermsAccepted(e.target.checked)}
          />
          <div className="d-flex my-4 mb-5">
            <Button bg="primary" className="negative mb-5" onClick={onCancel}>Cancel</Button>
            <Button bg="primary" className="mb-5" disabled={!isTermsAccepted} onClick={onFinish}>Submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AiWizard;
