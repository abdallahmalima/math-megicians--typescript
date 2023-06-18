import React from 'react';
import { CalculatorState } from '../logic/calculate';

type DisplayProps = {
  calculateObject: CalculatorState;
};

const Display: React.FC<DisplayProps> = ({ calculateObject }): JSX.Element => {
  const { total, operation, next } = calculateObject;

  return (
    <div data-testid="screen" className="screen">
      <p>
        {total}
        {operation}
        {next}
      </p>
    </div>
  );
};

export default Display;
