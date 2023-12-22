import { useState } from "react";

// ** redux
import { LoaderActions } from "../store/slices/loaderSlice";
import { useDispatch } from "react-redux";

const useFetch = () => {
  const { start, stop } = LoaderActions;
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [error,setError] = useState(null);
 
  const fetchData = async (url, method = "GET", headers = {}, body = null) => {
    dispatch(start());
    const options = {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    };
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      setData(responseData);
      dispatch(stop());
    } catch (err) {
      setError(err.message);
    }
  };
  return { data, fetchData , error };
};

export default useFetch;
