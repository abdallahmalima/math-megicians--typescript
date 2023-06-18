import React from 'react';
import withLoadingAndError from './withLoadingAndError';

interface QuoteProps {
  data: {
    quote: string;
    author: string;
  }[];
}

const Quote: React.FC<QuoteProps> = ({ data }) => {
  const { quote, author } = data && data[0] ? data[0] : { quote: '', author: '' };

  return (
    <>
      <div className="quoteContainer">
        <h4 className="quoteText">
          “
          {quote}
          {' '}
          <i className="quotor">
            --
            {author}
          </i>
        </h4>
      </div>
    </>
  );
};

export default withLoadingAndError(Quote);
