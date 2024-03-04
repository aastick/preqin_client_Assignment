

import React from 'react';
import { render,screen } from '@testing-library/react';
import InvestorsTable from '../InvestorsTable';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

test('renders InvestorsTable with investors', () => {
  const investors = [
    { firmId: 1, firmName: 'test Company A' },
    { firmId: 2, firmName: 'test Company B' },
    // ... add more sample data
  ];
  render(
    <Router>
      <InvestorsTable investors={investors} />
    </Router>
  );

  const companyALink = screen.getByText(/test Company A/i);
  const companyBLink = screen.getByText(/test Company B/i);

  expect(companyALink).toBeInTheDocument();
  expect(companyBLink).toBeInTheDocument();
});
