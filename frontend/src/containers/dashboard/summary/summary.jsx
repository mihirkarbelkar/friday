import React from 'react'
import { formatPrice } from 'app/utils/common';
import './style.scss';

const Summary = (props) => {
  const { summary, list } = props;
  return (
    <div className="d-flex dashboard-summary justify-content-around my-3">
      <div className="d-flex flex-column summary-item justify-content-center align-items-center">
        <div class="title">INVESTED</div>
        <div class="investment-value">&#8377; {formatPrice(summary.invested)}</div>
      </div>
      <div className="d-flex flex-column summary-item justify-content-center align-items-center">
        <div class="title">CURRENT</div>
        <div class="investment-value">&#8377; {formatPrice(summary.returns)}</div>
      </div>
      <div className="d-flex flex-column summary-item justify-content-center align-items-center">
        <div class="title">P &amp; L</div>
        <div class={`investment-value ${(summary.returns - summary.invested) > 0 ? 'gain' : 'loss'}`}>&#8377; {formatPrice(summary.returns - summary.invested)}</div>
      </div>
    </div>    
  );
}

export default Summary
