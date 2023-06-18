import { useState, useEffect } from 'react';

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string, headersObj?: any): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (url: string, headersObj?: any) => {
      try {
        const res = await fetch(url, {
          headers: headersObj,
        });

        if (!res.ok) {
          throw new Error('Server Error');
        }

        const responseData: T = await res.json();
        setData(responseData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData(url, headersObj);
  }, []);

  return { data, loading, error };
};

export default useFetch;
