import { useEffect, useState } from "react"


/**
 * Utils function for fetch data
 * This hook receives a function that returns promise
 */
export const useFetch = (fetchFn) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  /**
   * @TODO let implement useFetch that call fetchFn when the component is mounted
   * 
   * There should be 3 states to describe the fetch fn:
   *  - data: store the response from fetch fn when the Promise resolve
   *  - error: store the reponse from fetch fn when the Promise reject
   *  - loading: 
   *     + true: when Promise is not resolved/rejected
   *     + false: when Promise is resolved/rejected
   * 
   *   - If loading is true, data and error have to be "null"
   *   - If loading is false, and Promise is resolved, data store response and error is null
   *   - If loading is false, and Promise is rejected, data is null and error store response
   * 
   *  + Bonus point: support one more action: refetch to support recall fetchFn again
   */


  const fetch = () => {
    setLoading(true);
    fetchFn()
      .then(resp => {
        setData(resp);
        setError(null)
      })
      .catch(e => {
        setData(null);
        setError(e)
      }).finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch()
  }, []);

  return { data, error, loading, refetch: fetch }
}