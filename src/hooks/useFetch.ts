import { useState, useEffect } from 'react';

export const useFetch = (url: string) => {

  const [ data, setData ] = useState<any>();
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {

        const res = await fetch(url);
        const json = await res.json();
        setData(json);

      } catch (error) {

        console.log(error);
        setError("Houve um erro ao carregar!");

      }
    };
    fetchData();

    setLoading(false);

  }, [url]);

  return { data, loading, error };

};