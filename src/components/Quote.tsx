import React, { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#f8943c',
};

type DataType={
  quote:string;
  author:string;
}

interface Props {
  data: DataType[] | null;
  loading: boolean;
  error: string | null;
}

const Quote = (props:Props) => {
  const { data, loading, error } = props;
  const [{ quote, author }] = data || [{ quote: '', author: '' }];

  return (
    <>
      {loading && (

        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={77}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

      )}
      {error && <h3 className="textError">{error}</h3>}
      {!loading && !error && (
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
      )}

    </>
  );
};

export default Quote;
