import React, { useState, useEffect } from "react";
import { supabase } from "../db/supabase";

export default function useRequest(apiCall) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    request(apiCall);
  }, []);

  async function request(apiCall) {
    try {
      setLoading(true);
      const { data, error } = await apiCall();
      setData(data);
      if (error) setError(error);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }
  return { loading, error, data };
}
