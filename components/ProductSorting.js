import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  width: 100%;
  background-color: #eee;
  
`;

const SortingDiv = styled.div`
  display: flex;
  background-color: #fff;
  padding: 7px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-right: 10px;
  }
`;

const SortDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SortOption = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  span {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const PriceRangeDropdown = styled.select`
  font-size: 14px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: 5px;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

const ApplySortingButton = styled.button`
  background-color: #000080;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0000a0;
  }
`;

const ProductSorting = ({
  sortBy,
  setSortBy,
  selectedPriceRange,
  setSelectedPriceRange,
  handlePriceRangeSelection,
  applySorting,
}) => {
  return (
    <StyledSection>
    <SortingDiv>
      <SortDiv>
        <SortOption>
          <span>Select Price Range</span>
          <PriceRangeDropdown onChange={handlePriceRangeSelection}>
            <option value="1000000">All Products</option>
            <option value="20000">Below 20,000</option>
            <option value="50000">Below 50,000</option>
            <option value="75000">Below 75,000</option>
            <option value="1000000">Below 100,000</option>
          </PriceRangeDropdown>
        </SortOption>
        <SortOption>
          <span>Select Favourite color</span>
          <PriceRangeDropdown onChange={handlePriceRangeSelection}>
            <option value="1000000">All Products</option>
            <option value="20000">Blue</option>
            <option value="50000">Black</option>
            <option value="75000">White</option>
            <option value="1000000">Gray</option>
          </PriceRangeDropdown>
        </SortOption>
        <SortOption>
          <span>Select Phone type</span>
          <PriceRangeDropdown onChange={handlePriceRangeSelection}>
            <option value="1000000">All Products</option>
            <option value="20000">Techno</option>
            <option value="50000">Oppo</option>
            <option value="75000">Samsung</option>
            <option value="1000000">Itel</option>
          </PriceRangeDropdown>
        </SortOption>
      </SortDiv>
      <ApplySortingButton onClick={applySorting}>Apply Sorting</ApplySortingButton>
    </SortingDiv>
    </StyledSection>
  );
};

export default ProductSorting;
