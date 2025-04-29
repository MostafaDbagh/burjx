import { useState, useEffect } from 'react';
import { get } from '../axios';  

const useFetchData = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get(url);
        setApiData(data);
      } catch (error) {
        setError('Something went wrong! Please try again later.');
        console.error('Error fetching Data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);  

  return { apiData, loading, error };
};

export default useFetchData;
