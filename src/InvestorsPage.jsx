import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InvestorsPage = ({  investors }) => {
    const { investorId } = useParams();
  useEffect(() => {
    console.log('Investors:', investors);
  }, [investors]);

  const [selectedAssetClass, setSelectedAssetClass] = useState('PE');
  // Find the investor with the matching firmId
  const investor = investors.find((inv) => inv.firmId === parseInt(investorId, 10));

  // Check if the investor is found
  if (!investor) {
    return <div>No investor found for firmId: {investorId}</div>;
  }


  const handleAssetClassChange = (assetClass) => {
    setSelectedAssetClass(assetClass);
  };

  return (
    <div>
      <h2 className="mt-4">Investor Page - {investor.firmName}</h2>
      <Form>
        <Form.Group controlId="assetClassSelect">
          <Form.Label>Asset Class:</Form.Label>
          <Form.Control as="select" value={selectedAssetClass} onChange={(e) => handleAssetClassChange(e.target.value)}>
            {Object.keys(investor.commitments).map((assetClass) => (
              <option key={assetClass} value={assetClass}>
                {assetClass}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <p>Commitment: {investor.commitments[selectedAssetClass]}</p>
    </div>
  );
};

export default InvestorsPage;
