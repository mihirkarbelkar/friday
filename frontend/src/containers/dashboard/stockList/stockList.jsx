import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from 'app/utils/common';
import '../style.scss';

const StockList = (props) => {
  const { list, cols, onAddWatchlist, type } = props;
  const history = useHistory();

  return (
    <Table responsive>
      <thead>
        <tr>
          {cols.includes('label') && (<th>Company</th>)}
          {cols.includes('chart') && (<th></th>)}
          {cols.includes('price') && (<th className="text-right">Market Price</th>)}
          {!!onAddWatchlist && (<th className="text-right">Watchlist</th>)}
        </tr>
      </thead>
      <tbody>
        {list.map((stock) => (
          <tr>
            {cols.includes('label') && (
            <td onClick={() => history.push(`/explore/${type}/${stock.symbol}`)} style={{ cursor: 'pointer' }}>
              <div className="d-flex align-items-center">
                <img src={stock.image} alt="" className="stock-icon" />
                {stock.label}
              </div>
            </td>)}
            {cols.includes('chart') && (<td></td>)}
            {cols.includes('price') && (
            <td>
              <div className="d-flex flex-column align-items-end">
                <div>&#8377; {formatPrice(stock.currentPrice)}</div>
                <div className={(stock.currentPrice - stock.previousPrice) > 0 ? 'gain' : 'loss'}>
                  {formatPrice(stock.currentPrice - stock.previousPrice)} ({((stock.currentPrice - stock.previousPrice) / stock.previousPrice) * 100} %)&nbsp;&nbsp;
                  {(stock.currentPrice - stock.previousPrice) > 0 ? (<FontAwesomeIcon icon={faArrowUp} />) : (<FontAwesomeIcon icon={faArrowDown} />)}
                </div>
              </div>
            </td>
            )}
            {!!onAddWatchlist && (
            <td className="text-right">
              <FontAwesomeIcon icon={faPlusCircle} />
            </td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StockList;
