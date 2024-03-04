// InvestorsPage.test.jsx

import React from 'react';
import { render,screen } from '@testing-library/react';
import { MemoryRouter, Route,Routes } from 'react-router-dom';
import InvestorsPage from '../InvestorsPage';

test('renders InvestorsPage with existing investor', () => {
  const investors = [
    { firmId: 1, firmName: 'test Company A', commitments: { PE: 1000000 } },
    { firmId: 2, firmName: 'test Company B', commitments: { PE: 500000 } },
    // ... add more sample data
  ];
  render(
    <MemoryRouter initialEntries={['/investors/1']}>
      <Routes>
        <Route path="/investors/:investorId" element={<InvestorsPage investors={investors} />} />
      </Routes>
    </MemoryRouter>
  );

  const companyALabel = screen.getByText(/Investor Page - test Company A/i);
  const assetClassLabel = screen.getByText(/Asset Class:/i);
  const commitmentLabel = screen.getByText(/Commitment:/i);

  expect(companyALabel).toBeInTheDocument();
  expect(assetClassLabel).toBeInTheDocument();
  expect(commitmentLabel).toBeInTheDocument();
});

test('renders InvestorsPage with non-existing investor', () => {
 render(
    <MemoryRouter initialEntries={['/investors/999']}>
      <Routes>
        <Route path="/investors/:investorId" element={<InvestorsPage investors={[]} />} />
      </Routes>
    </MemoryRouter>
  );

  const noInvestorLabel = screen.getByText(/No investor found for firmId: 999/i);
  expect(noInvestorLabel).toBeInTheDocument();
});
