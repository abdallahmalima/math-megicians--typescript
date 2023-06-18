import React from 'react';

type DisplayProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Display: React.FC<DisplayProps> = ({ handleClick }): JSX.Element => (
  <div className="btn-container">
    <div className="btn-row">

      <button type="button" data-testid="AC" className="btn" onClick={handleClick}>AC</button>

      <button type="button" data-testid="+/-" className="btn" onClick={handleClick}>+/-</button>

      <button type="button" data-testid="%" className="btn" onClick={handleClick}>%</button>

      <button type="button" data-testid="÷" className="btn btn-last" onClick={handleClick}>&divide;</button>

    </div>
    <div className="btn-row">

      <button type="button" data-testid="7" className="btn" onClick={handleClick}>7</button>

      <button type="button" data-testid="8" className="btn" onClick={handleClick}>8</button>

      <button type="button" data-testid="9" className="btn" onClick={handleClick}>9</button>

      <button type="button" data-testid="x" className="btn btn-last" onClick={handleClick}>x</button>

    </div>
    <div className="btn-row">

      <button type="button" data-testid="4" className="btn" onClick={handleClick}>4</button>

      <button type="button" data-testid="5" className="btn" onClick={handleClick}>5</button>

      <button type="button" data-testid="6" className="btn" onClick={handleClick}>6</button>

      <button type="button" data-testid="-" className="btn btn-last" onClick={handleClick}>-</button>

    </div>
    <div className="btn-row">

      <button type="button" data-testid="1" className="btn" onClick={handleClick}>1</button>

      <button type="button" data-testid="2" className="btn" onClick={handleClick}>2</button>

      <button type="button" data-testid="3" className="btn" onClick={handleClick}>3</button>

      <button type="button" data-testid="+" className="btn btn-last" onClick={handleClick}>+</button>

    </div>
    <div className="btn-row">

      <button type="button" data-testid="0" className="btn btn-zero" onClick={handleClick}>0</button>

      <button type="button" data-testid="." className="btn" onClick={handleClick}>.</button>

      <button type="button" data-testid="=" className="btn btn-last" onClick={handleClick}>=</button>

    </div>

  </div>
);

export default Display;
