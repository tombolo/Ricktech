import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StyledSection = styled.section`

`;


const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96%;
  margin: 0 auto; 
  padding-top: 140px;
`;

const SearchResultItem = styled.div`
  padding: 3px;
  border: 1px solid gray;
  border-radius: 4px;
  margin: 5px;
`;

const Title = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: blue;
  margin-bottom: -7px; 
`;

const Description = styled.p`
  font-size: 10px;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Show only one line of description */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default function Search({ searchResults }) {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
    <StyledSection>
        <Header />
      </StyledSection>
      
    <SearchResultsWrapper>
    <h2>Search Results for {q}</h2>
      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        searchResults.map((product) => (
          <SearchResultItem key={product._id}>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
          </SearchResultItem>
        ))
      )}
    </SearchResultsWrapper>
    <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { q } = context.query;

  // Fetch products based on the search query (searching in both title and description fields)
  const searchResults = await Product.find({
    $or: [
      { title: { $regex: new RegExp(q, "i") } },
      { description: { $regex: new RegExp(q, "i") } },
    ],
  });

  return {
    props: {
      searchResults: JSON.parse(JSON.stringify(searchResults)),
    },
  };
}
