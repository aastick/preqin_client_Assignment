import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import InvestorsTable from './InvestorsTable';
import InvestorsPage from './InvestorsPage';
import data from './data.json';

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/investors/:investorId" element={<InvestorsPage investors={data.investors} />} />
          <Route path="/" element={<InvestorsTable investors={data.investors} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
