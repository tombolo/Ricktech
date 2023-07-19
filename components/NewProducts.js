import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";


const StyledSection = styled.section`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: 20px;
  
  @media screen and (max-width: 768px) {
    margin-left: 10px;;
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin:15px 0 20px;
  font-weight: normal;
  color:  #000080;
  border-bottom: 1px solid #000080;
`;

export default function NewProducts({products}) {
  return (
    <StyledSection>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </StyledSection>
  );
}