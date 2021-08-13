import React from 'react';
import './style.scss';

const StepIndicator = (props) => {
  const { total, current, onClick } = props;
  return (
    <div className="d-flex step-indicator my-4">
      {new Array(total).fill(null).map((indicator, index) => (
        <div
          className={`indicator ${current > index ? 'active' : ''}`}
          role="presentation"
          onClick={() => (current > index) ? onClick(index + 1) : null} />
      ))}
    </div>
  );
};

export default StepIndicator
