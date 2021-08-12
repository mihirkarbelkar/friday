import React, { useState, forwardRef } from 'react';
import { Badge, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import Moment from 'react-moment';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { addDaysToDate } from 'app/utils/date';
import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';

const AiWizard = (props) => {
  const { step, onContinue, onFinish, atom } = props;
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isOtherAmount, setIsOtherAmount] = useState(false);
  const [botParams, setBotParams] = useRecoilState(atom);

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
        <div className={`step-quiz-1 ${step !== 1 ? 'd-none' : ''}`}>
          <h3 className="wizard-question">
            01. How much would you like to invest?
            <Badge bg="success" className="mx-3">Wallet Balance: &#8377; 1,00,000</Badge>
          </h3>
          <div className="d-flex amount-selector-container my-3">
            <div className="amount-selection-button" role="presentation" onClick={() => handleAmount(10000)}>&#8377; 10,0000</div>
            <div className="amount-selection-button" role="presentation" onClick={() => handleAmount(20000)}>&#8377; 20,0000</div>
            <div className="amount-selection-button" role="presentation" onClick={() => setIsOtherAmount(true)}>Other</div>
            {isOtherAmount && (
              <Col xs="auto" className="other-amount-box">
                <Form onSubmit={handleOtherAmount}>
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Amount
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>&#8377;</InputGroup.Text>
                    <FormControl id="otherAmount" name="amount" placeholder="Amount" type="number" />
                  </InputGroup>
                </Form>
              </Col>
            )}
          </div>
        </div>
        <div className={`step-quiz-1 ${step !== 2 ? 'd-none' : ''}`}>
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
        <div className="step-quiz-3">

        </div>
      </div>
  );
};

export default AiWizard;
