import 'bootstrap/dist/css/bootstrap.min.css'; // So it doesnt override component styles
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './errorBoundary';
import { RecoilRoot } from 'recoil';
import 'typeface-montserrat';
import 'app/scss/rootStyles.scss';

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
