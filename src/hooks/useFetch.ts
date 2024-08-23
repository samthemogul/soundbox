// custom usefetch hool that uses axios , return a data, err and is loading values

import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(type: string, url: string) => {
  const [data, setData] = useState< T | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetch data using axios and handle loading and error
    const fetchData = async () => {
      try {
        if( type == "deezer") {
            const response = await axios.get(`https://api.deezer.com/${url}`
            );
            setData(response.data);
        }
      } catch (error: unknown) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, type]);

  return { data, error, isLoading };
};
