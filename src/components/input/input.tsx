import Arrow from "@assets/icon-arrow.svg?react";
import "./input.scss";
import { useState } from "react";
import { useSearchQueryContext } from "src/store/context/use-search-context";

export function Input() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const { setSearchedAddress } = useSearchQueryContext();

  const buttonHandler = () => {
    if (!searchValue) setIsError(true);

    if (searchValue) {
      setIsError(false);
      setSearchedAddress(searchValue);
    }
  };

  return (
    <div className={`input-container ${isError ? "input-container--is-error" : ""}`}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? buttonHandler() : null)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button onClick={buttonHandler}>{<Arrow />}</button>
    </div>
  );
}
