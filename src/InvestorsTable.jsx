import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InvestorsTable = ({ investors }) => {
  return (
    <>
    <div>
    <h1>Investor Dashboard</h1>
  </div>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>FirmId</th>
          <th>FirmName</th>
          <th>Type</th>
          <th>DateAdded</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {investors.map((investor) => (
          <tr key={investor.firmId}>
            <td>
              <Link to={`/investors/${investor.firmId}`}>{investor.firmId}</Link>
            </td>
            <td>{investor.firmName}</td>
            <td>{investor.type}</td>
            <td>{investor.dateAdded}</td>
            <td>{investor.address}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
};

export default InvestorsTable;
