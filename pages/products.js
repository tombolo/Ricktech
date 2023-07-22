import styled from "styled-components";
import Header from "@/components/Header";
import Center from "@/components/Center";
import { useState } from "react";
import { useRouter } from "next/router";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import ProductSorting from "@/components/ProductSorting"; // Import the ProductSorting component

const StyledSection = styled.section`

`;

const GridContainer = styled.div`
  padding-top: 150px;
  padding-bottom: 30px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    padding-top: 120px;
  }
`;

export default function ProductsPage({ products: initialProducts }) {
  const router = useRouter();
  const [sortBy, setSortBy] = useState(""); // Add state for sorting option
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  // Function to handle sorting option selection
  const handleSortOption = (option) => {
    setSortBy(option);
    setSelectedPriceRange(null); // Reset the selected price range when a new sorting option is selected
  };

  // Function to set the selected price range
  const handlePriceRangeSelection = (event) => {
    const priceRange = parseInt(event.target.value);
    setSelectedPriceRange(priceRange);
  };

  // Function to apply the sorting logic
  const applySorting = () => {
    setLoading(true); // Set loading state to true

    // Simulate loading for 2 seconds before displaying the products
    setTimeout(() => {
      let sortedProducts = [...initialProducts];

      // Apply sorting based on the selected option
      if (sortBy === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "color") {
        sortedProducts.sort((a, b) => a.color.localeCompare(b.color));
      } else if (sortBy === "battery") {
        sortedProducts.sort((a, b) => a.battery - b.battery);
      } else if (sortBy === "storage") {
        sortedProducts.sort((a, b) => a.storage - b.storage);
      }

      // Filter products based on the selected price range
      if (selectedPriceRange !== null) {
        sortedProducts = sortedProducts.filter((product) => product.price < selectedPriceRange);
      }

      // Update the state with the sorted and filtered products
      setProducts(sortedProducts);
      setLoading(false); // Set loading state to false
    }, 2000);
  };

  return (
    <>
      <StyledSection>
        <Header />
      </StyledSection>
    
        <GridContainer>
          <ProductSorting
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            handlePriceRangeSelection={handlePriceRangeSelection}
            applySorting={applySorting}
          />
          {loading ? <Spinner /> : <ProductsGrid products={products} />}
        </GridContainer>
      
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { '_id': -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
