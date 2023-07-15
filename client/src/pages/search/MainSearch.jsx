import { useState } from "react";

import "./MainSearch.css";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function MainSearch() {
  const [results, setResults] = useState([]);
  console.log(results)
  return (
    <div className="MainSearch">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default MainSearch;