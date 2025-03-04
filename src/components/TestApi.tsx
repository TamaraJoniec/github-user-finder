import { useState } from "react";
import Search from "./Search";
import useFetch, { GitHubUser } from "../hooks/useFetch";
import UserCard from "./userCard";

const TestApi = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Only fetch when we have a search query
  const { data, loading, error } = useFetch<{ items: GitHubUser[] }>(searchQuery ? `https://api.github.com/search/users?q=${searchQuery}` : "");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query); // Debug log
    setSearchQuery(query);
  };

  return (
    <div className="user-results">
      <Search onSearch={handleSearch} />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {data?.items && (
        <>
          <h3>Found {data.items.length} users</h3>
          <div className="user-grid">
            {data.items.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestApi;
