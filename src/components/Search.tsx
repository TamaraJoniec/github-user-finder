import { useCallback, useState } from "react";
import { debounce } from "../utils/debounce";

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  // Need state for input value
  const [value, setValue] = useState("");

  // Need to debounce the search
  const debouncedSearch = useCallback(
    debounce<[string]>((query) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedSearch(newValue);
  };

  return (
    <div className="search-container">
      <input type="text" value={value} onChange={handleChange} placeholder="Search GitHub users..." className="search-input" />
    </div>
  );
};

export default Search;
