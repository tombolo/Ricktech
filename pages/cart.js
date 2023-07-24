import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import Footer from "@/components/Footer";
import { createGlobalStyle } from 'styled-components';

// Rest of the code ...


const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-evenly;
  align-items: center;
  width: 97%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
    justify-content: center; 
    align-items: center;
    padding-top: 150px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  gap: 10px;
  
  padding-bottom: 50px;
  
`;

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`;

const Box = styled.div`
  background-color: #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  width: 92%;
  @media screen and (max-width: 768px) {
    border-radius: 5px;
    padding: 20px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CartHeading = styled.h2`
  font-size: 22px;
  color: #000080;
  margin-bottom: 10px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 2px;
  border: 1px solid #000080;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100px;
    max-height: 100px;
  }
  @media screen and (min-width: 768px) {
    padding: 5px;
    width: 100px;
    height: 100px;
    img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 10px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 8px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;


const MinusButton = styled(Button)`
  background-color: #9c0000;
  padding: 5px;
  &:hover {
    background-color: #ff0000;
  }
`;

const PlusButton = styled(Button)`
  background-color: #007f00;
  padding: 5px;
  &:hover {
    background-color: #00ff00;
  }
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
      </>
    );
  }

  return (
    <>
    <GlobalStyles />
      <Header />


        <ColumnsWrapper>
          <Box>
          <CartHeading>Cart</CartHeading>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.images[0]} alt="" />
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                      <MinusButton onClick={() => lessOfThisProduct(product._id)}>
                          -
                        </MinusButton>
                        <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                        </QuantityLabel>
                        <PlusButton onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </PlusButton>
                      </td>
                      <td>
                        KSH
                        {cartProducts.filter((id) => id === product._id).length *
                          product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>KSH {total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <CartHeading>Order information</CartHeading>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(ev) => setName(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <CityHolder>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(ev) => setCity(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(ev) => setPostalCode(ev.target.value)}
                />
              </CityHolder>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(ev) => setStreetAddress(ev.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(ev) => setCountry(ev.target.value)}
              />
              <Button black block onClick={goToPayment}>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      <Footer />
    </>
  );
}
