import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 1.2rem;
  margin:15px 0 20px;
  font-weight: normal;
  color:  #000080;
  border-bottom: 1px solid #000080;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}