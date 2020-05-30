import { useState, useEffect } from 'react';
import RESTService from '../services/RESTservice';
import { TEST_ENDPOINT } from '../constants';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchData() {

    const RESTClient = new RESTService();
    try {
      const response = await RESTClient.get(TEST_ENDPOINT);
      const items = response.data.items;
      setData(items);
    } catch(err) {
      setIsError(true);
      console.log(err);
    }
    setLoading(false);
  }

  useEffect( () => {
      fetchData();
  },[]);

  return { data, isLoading, isError };
};

export default useFetch;
