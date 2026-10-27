import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function getData() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("API Failed");
        }

        const result = await response.json();

        setData(result);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    getData();

  }, [url]);

  return { data, loading, error };
}

export default useFetch;