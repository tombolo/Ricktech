import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { useState } from "react"; 
import { useRouter } from 'next/router';
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import mongoose from "mongoose";
import Spinner from "@/components/Spinner";

const StyledSection = styled.section`
  margin-top: 0px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column; // Change the flex direction to column
  margin-top: 0px;
  padding-top: 150px;
  padding-bottom: 30px;
`;


const SortOption = styled.div`
display: flex;
flex-direction: flex-row;
padding: 2px;
margin-top: 10px;

@media screen and (max-width: 768px) {
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 15px;
  
}

span {
  font-size: 14px;
}
`;





const SortingDiv = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px black;
  flex-direction: flex-row;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    height: 170px;
    display: flex;
    flex-direction: column;
  }

  
`;

const SortDiv = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;


  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;



const PriceRangeDropdown = styled.select`
  font-size: 12px;
  background-color: white;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  padding: 3px;
  margin: 2px;

  @media screen and (max-width: 768px) {
    
`;
const ApplySortingButton = styled.button`
  background-color: #000080;
  color: white;
  border: none;

  &:hover {
    background-color: blue;
  }

  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`;



export default function AndroidPage({ products: initialProducts }) {
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
    <Header />
    
      <Center>
        <GridContainer>
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
                <span>Select Favourate color</span>
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
          {loading ? (
            <Spinner />
          ) : (
            <ProductsGrid products={products} />
          )}
        </GridContainer>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const ObjectId = mongoose.Types.ObjectId;
  const categoryId = new ObjectId("64af4293225a6aa6c509226b");
  const products = await Product.find({ category: categoryId }, null, { sort: { _id: -1 } });

  // You can add sorting logic here before returning the products

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
