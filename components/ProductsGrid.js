import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ products, handleProductChange }) {
  console.log("Handle product change:", handleProductChange);
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox
            key={product._id}
            handleProductChange={handleProductChange}
            {...product}
          />
        ))}
    </StyledProductsGrid>
  );
}
