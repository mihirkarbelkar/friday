import React from 'react';
import { Table } from "react-bootstrap";
import './style.scss';

const NewsList = (props) => {
  const { list } = props;

  return (
    <Table responsive className="latest-news">
      <tbody>
        {list.map((news) => (
          <tr>
            <td className="news-image"><img src={news.image} alt="" /></td>
            <td>{news.excerpt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default NewsList
