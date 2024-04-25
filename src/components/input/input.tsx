import Arrow from "@assets/icon-arrow.svg?react";
import "./input.scss";
import { useState } from "react";
import { useSearchQueryContext } from "src/store/context/use-search-context";

export function Input() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setSearchedAddress } = useSearchQueryContext();
  const buttonHandler = () => {
    if (searchValue) setSearchedAddress(searchValue);
  };

  return (
    <div className="input-container">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button onClick={buttonHandler}>{<Arrow />}</button>
    </div>
  );
}
