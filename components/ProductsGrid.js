import React, { useState } from "react";
import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import Spinner from "@/components/Spinner";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 30px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? "#000080" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000080")};
  border: 1px solid #000080;
  cursor: pointer;
`;

const ProductsGrid = ({ products, handleProductChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 12;

  // Calculate the indexes for the products to be displayed on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Function to simulate loading
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <StyledProductsGrid>
        {loading ? (
          <Spinner /> // Show spinner when loading
        ) : (
          currentProducts.map((product) => (
            <ProductBox
              key={product._id}
              handleProductChange={handleProductChange}
              {...product}
            />
          ))
        )}
      </StyledProductsGrid>
      <PaginationContainer>
        {Array.from(Array(totalPages), (e, i) => i + 1).map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => {
              simulateLoading(); // Simulate loading when changing pages
              handlePageChange(pageNumber);
            }}
          >
            {pageNumber}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </>
  );
};

export default ProductsGrid;
