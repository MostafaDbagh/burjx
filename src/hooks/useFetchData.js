import { useState, useEffect } from 'react';
import { get } from '../axios/axiosConfig';  

const useFetchData = (url) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await get(url);
        setApiData(data);
      } catch (error) {
        setError('Something went wrong! Please try again later.');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);  

  return { apiData, loading, error };
};

export default useFetchData;
