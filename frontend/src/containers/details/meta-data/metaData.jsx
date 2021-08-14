import React from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';

const MetaData = () => {
  const renderDummyData = (
    <Table responsive>
      <tbody>
        <tr>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, eros nec dictum dapibus, arcu augue consectetur sem, ut sodales sapien ligula vitae enim. Nunc euismod eros nisi, sit amet finibus dolor sagittis id. Donec eget nunc sapien. Nulla pellentesque quis justo vitae elementum.</td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, eros nec dictum dapibus, arcu augue consectetur sem, ut sodales sapien ligula vitae enim. Nunc euismod eros nisi, sit amet finibus dolor sagittis id. Donec eget nunc sapien. Nulla pellentesque quis justo vitae elementum.</td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, eros nec dictum dapibus, arcu augue consectetur sem, ut sodales sapien ligula vitae enim. Nunc euismod eros nisi, sit amet finibus dolor sagittis id. Donec eget nunc sapien. Nulla pellentesque quis justo vitae elementum.</td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, eros nec dictum dapibus, arcu augue consectetur sem, ut sodales sapien ligula vitae enim. Nunc euismod eros nisi, sit amet finibus dolor sagittis id. Donec eget nunc sapien. Nulla pellentesque quis justo vitae elementum.</td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices, eros nec dictum dapibus, arcu augue consectetur sem, ut sodales sapien ligula vitae enim. Nunc euismod eros nisi, sit amet finibus dolor sagittis id. Donec eget nunc sapien. Nulla pellentesque quis justo vitae elementum.</td>
        </tr>
      </tbody>
    </Table>
  );

  return (
    <Tabs defaultActiveKey="strengths" className="my-4">
      <Tab eventKey="strengths" title="Strengths">
        {renderDummyData}
      </Tab>
      <Tab eventKey="risks" title="Risks">
        {renderDummyData}
      </Tab>
      <Tab eventKey="opportunity" title="Opportunities">
        {renderDummyData}
      </Tab>
      <Tab eventKey="threats" title="Threats">
        {renderDummyData}
      </Tab>
    </Tabs>
  );
};

export default MetaData;
