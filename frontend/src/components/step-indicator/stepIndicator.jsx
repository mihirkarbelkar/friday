import React from 'react';
import './style.scss';

const StepIndicator = (props) => {
  const { total, current } = props;
  return (
    <div className="d-flex step-indicator my-4">
      {new Array(total).fill(null).map((indicator, index) => (
        <div className={`indicator ${current > index ? 'active' : ''}`} />
      ))}
    </div>
  );
};

export default StepIndicator
