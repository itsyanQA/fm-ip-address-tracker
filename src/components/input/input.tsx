import Arrow from "@assets/icon-arrow.svg?react";
import "./input.scss";
import { useEffect, useRef, useState } from "react";
import { useSearchQueryContext } from "src/store/context/use-search-context";

export function Input() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const { setSearchedAddress } = useSearchQueryContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const buttonHandler = () => {
    if (searchValue) {
      setIsError(false);
      setSearchedAddress(searchValue);
      inputRef?.current?.blur();
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (searchValue) setIsError(false);
  }, [searchValue]);

  return (
    <div className={`input-container ${isError && !searchValue ? "input-container--is-error" : ""}`}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? buttonHandler() : null)}
        type="text"
        placeholder="Search for any IP address or domain"
        maxLength={100}
        ref={inputRef}
      />
      <button onClick={buttonHandler}>{<Arrow />}</button>
    </div>
  );
}
