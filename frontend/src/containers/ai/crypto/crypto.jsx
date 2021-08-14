import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Header, StepIndicator } from 'components';
import AIWizard from '../ai-wizard';

import { aiCrypto } from 'atoms/aiHelp';
import '../stocks/style.scss';

const Crypto = () => {
  const [step, setStep] = useState(1);
  const history = useHistory();

  return (
    <div className="aihelp-stocks h-100">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/ai' }}>AI Help</Breadcrumb.Item>
        <Breadcrumb.Item active>Stocks</Breadcrumb.Item>
      </Breadcrumb>
      <Header title="AI Help" />
      <StepIndicator total={3} current={step} onClick={setStep} />
      <AIWizard step={step} atom={aiCrypto} onContinue={setStep} onFinish={() => history.push('/ai')} onCancel={() => history.push('/ai')} />
    </div>
  );
};

export default Crypto
