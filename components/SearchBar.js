import React, { useState } from "react";
import styled from "styled-components";
import { SearchIcon } from '@heroicons/react/solid';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 7px;
  margin-left: 50px;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  width: 100%;
`;

const SearchBar = ({ searchResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Redirect to the search results page
      window.location.href = `/search?q=${searchQuery}`;
    }
  };

  return (
    <SearchBarWrapper>
      <SearchIconStyled width={20} style={{ color: '#000080' }} />
      <SearchInput
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {searchResults && searchResults.length > 0 && (
        <div>
          {searchResults.map((product) => (
            <div key={product._id}>
              {/* Render the filtered results as needed */}
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
