import React from 'react';
import './style.scss';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="section-header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
