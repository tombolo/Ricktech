import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";


const StyledSection = styled.section`
  padding-top: 0px;
  padding-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin:15px 0 20px;
  font-weight: bold;
  color:  #000080;
  border-bottom: 1px solid #000080;
`;

export default function NewProducts({products}) {
  return (
    <StyledSection>
    <Center>
      <Title>Laptops</Title>
      <ProductsGrid products={products} />
    </Center>
    </StyledSection>
  );
}