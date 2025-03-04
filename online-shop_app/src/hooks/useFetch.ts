import { useEffect, useState } from "react";

import { FetchError } from "../models/types";

function useFetch<T>(fetchFn: () => Promise<T>, initialValue: T) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchError | null>(null);
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error: any) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    loading,
    error,
    data,
    setData,
  };
}

export default useFetch;
