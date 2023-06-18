import React from 'react';
import Calculator from '../components/Calculator';

const CalculatorPage = (): JSX.Element => (
  <main className="CalMain">
    <h3 className="subTitle">Let&apos;s do some math!</h3>
    <div className="CalContainer">
      <Calculator />
    </div>
  </main>
);

export default CalculatorPage;
