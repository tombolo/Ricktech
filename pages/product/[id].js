import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import CartIcon from "@/components/icons/CartIcon";
import LaptopsCategory from "@/components/LaptopsCategory";
import ProductsGrid from "@/components/ProductsGrid";
import Footer from "@/components/Footer";

const ColWrapper = styled.div`
  background-color: white;

  
 
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 130px;
  paddig: 20px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    padding-top: 150px;
    grid-template-columns: 0.8fr 1.2fr;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    gap: 10px;
    padding-top: 100px;

  }
  gap: 40px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

const ProductImagesContainer = styled.div`
  background-color: white;
  padding: 10px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #ccc;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: black;
  padding-right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const AdditionalInfo = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const BrandInfo = styled.div`
  margin-top: 30px;
  
  p {
    font-size: 1rem;
    line-height: 1.5;
    color:  #FFA000;
    margin-bottom: 10px;
  }
`;

const ProductsWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    margin-right: 8px;
  }
`;

const QuantityWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #000080;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityText = styled.span`
  font-size: 1rem;
`;

const AddToCartButton = styled.button`
  background-color: #000080;
  width: 160px;
  height: 30px;
  color: #fff;
  border: none;
  padding: 10px 8px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    opacity: 0.9;
  }

  ${({ success }) =>
    success &&
    `
    background-color: green;
  `}

  svg {
    width: 18px;
    height: 18px;
  }
`;



export default function ProductPage({ product, androidProducts }) {
  const { addProduct } = useContext(CartContext);
  const router = useRouter();
  const { id } = router.query;

  const [currentProduct, setCurrentProduct] = useState(product);
  const [quantity, setQuantity] = useState(1);
  const [addToCartStatus, setAddToCartStatus] = useState(null);

  const handleProductChange = (productId) => {
    const newProduct = androidProducts.find((p) => p._id.toString() === productId.toString());
    setCurrentProduct(newProduct);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addProduct(currentProduct._id);
    }
    setAddToCartStatus("added");
    setTimeout(() => {
      setAddToCartStatus(null);
    }, 2000);
  };

  useEffect(() => {
    // Update currentProduct when id changes
    setCurrentProduct(product);
  }, [id]);

  useEffect(() => {
    if (addToCartStatus === "added") {
      setTimeout(() => {
        setAddToCartStatus(null);
      }, 2000);
    }
  }, [addToCartStatus]);

  return (
    <>
      <Header />
    
        <ColWrapper>
        <ProductImagesContainer>
            <ProductImages key={currentProduct._id} images={currentProduct.images} />
        </ProductImagesContainer>
          <div>
            <Title>{currentProduct.title}</Title>
            <Description>{currentProduct.description}</Description>
            <PriceRow>
              <div>
                <Price>KSH{currentProduct.price}</Price>
              </div>
              
            </PriceRow>
            <QuantityWrapper>
              <QuantityButton
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                disabled={addToCartStatus === "added"}
              >
                -
              </QuantityButton>
              <QuantityText>{quantity}</QuantityText>
              <QuantityButton
                onClick={() => setQuantity(quantity + 1)}
                disabled={addToCartStatus === "added"}
              >
                +
              </QuantityButton>


              <div>
                <AddToCartButton
                  primary={addToCartStatus !== "added"}
                  success={addToCartStatus === "added"}
                  onClick={handleAddToCart}
                  disabled={addToCartStatus === "added"}
                >
                  {addToCartStatus === "added" ? (
                    <>
                      <CartIcon />
                      Added
                    </>
                  ) : (
                    <>
                      <CartIcon />
                      Add {quantity} to cart
                    </>
                  )}
                </AddToCartButton>
              </div>

            </QuantityWrapper>

            <BrandInfo>
             <p>BRAND:</p>
            </BrandInfo>

          </div>
        </ColWrapper>

        <AdditionalInfo>
        <p><strong>How do I get this item?</strong></p>
          <p>
            Order the <strong> {currentProduct.title} </strong> today and have it delivered to your doorstep within 1-3 working days or same-day delivery within Nairobi. Pay on delivery only in Nairobi & Immediate environs.
          </p>

          <p>Order via phone call on <strong> 0703 052 222 / 0708 600 025 / 0768 05 44 60 / 0729 417 694</strong></p>
          <p><strong>Whatsapp:</strong> 0786 420 000</p>
          <p><strong>Shop Location:</strong> Nairobi, Kimathi Street, Old Mutual Bldg, 2nd flr rm 211A</p>
          <p>Next-Day Deliveries Countrywide</p>
        </AdditionalInfo>

        <ProductsWrapper>
          <Title>Also From The Store</Title>
          <ProductsGrid products={androidProducts} handleProductChange={handleProductChange} />
        </ProductsWrapper>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;

  // Retrieve the product from the database
  const product = await Product.findById(id);

  const androidProducts = await Product.find({
    category: { $in: ["64b08e6e79f3f697eed7808d"] },
  });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      androidProducts: JSON.parse(JSON.stringify(androidProducts)),
    },
  };
}
