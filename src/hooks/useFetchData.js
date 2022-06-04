import axios from 'axios';
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(fetchData, []);

  return [loading, data];
}

export default useFetchData;
