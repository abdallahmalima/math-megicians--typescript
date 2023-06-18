import React, { CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#f8943c',
};

interface Props {
  data: any;
  loading: boolean;
  error: string | null;
}

const withLoadingAndError = <P extends Props>(
  MyComponent: React.ComponentType<P>,
) => function WithLoadingAndError(props: P) {
    const { data, loading, error } = props;

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
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {!loading && !error && data && <MyComponent {...data} />}
      </>
    );
  };

export default withLoadingAndError;
