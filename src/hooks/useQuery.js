import { useHistory } from "react-router-dom";

function useQuery() {
  const history = useHistory();
  const getParams = () => new URLSearchParams(history.location.search);

  return {
    get(key) {
      return getParams().get(key);
    },
    set(newParams) {
      const params = getParams();
      for (const [key, value] of Object.entries(newParams))
        params.set(key, value);
      return { search: `?${params}` };
    },
    push(newParams) {
      history.push(this.set(newParams));
    },
  };
}

export default useQuery;
