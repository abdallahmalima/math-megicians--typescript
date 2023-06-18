import React from 'react';
import Quote from '../components/Quote';
import useFetch, { FetchResult } from '../components/useFetch';

interface QuotePageData {
  quote: string;
  author: string;
}

const QuotePage = () => {
  const url = `${process.env.REACT_APP_BASE_URL}/quotes?category=computers`;
  const headers: Record<string, string> = {
    'X-Api-Key': `${process.env.REACT_APP_API_KEY}`,
  };

  const fetchResult: FetchResult<QuotePageData[]> = useFetch(url, headers);

  return (
    <>
      <Quote data={fetchResult.data} loading={fetchResult.loading} error={fetchResult.error} />
    </>
  );
};

export default QuotePage;
