import { useSearchQueryContext } from "src/store/context/use-search-context";
import "./error.scss";

export function Error() {
  const { searchedAddress } = useSearchQueryContext();

  return <p className="error">No results found for: {searchedAddress}</p>;
}
