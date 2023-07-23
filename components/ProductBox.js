import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaHeart, FaExchangeAlt } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";
import { CartContext } from "@/components/CartContext";

const ProductWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  &:hover {
    padding: 0px;
    box-shadow: 0 3px 6px black;
    .wishlist-icon {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    border: 1px solid grey;
    box-shadow: 0 1px 1px #ccc;
    .wishlist-icon {
      display: block;
    }
    .exchange-icon {
      display: block;
    }

    &:hover {
      padding: 0px;
      box-shadow: 0 3px 6px black;
    }
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 15px;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 120px;
    @media screen and (max-width: 768px) {
      max-height: 80px;
    }
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.8rem;
  color: inherit;
  text-decoration: none;
  margin: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    font-weight: small;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  padding: 3px;
  font-size: 0.7rem;
  font-weight: 600;
  text-align: left;
  color: #000080;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

const AddToCartButton = styled(Button)`
  background-color: ${(props) => (props.added ? "white" : "#000080")};
  color: ${(props) => (props.added ? "#000080" : "white")};
  padding: 4px 0px;
  transition: background-color 0.3s ease;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.added ? "white" : "#000080")};
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const WishlistIcon = styled(FaHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8rem;
  color: red;
  display: none;
  background-color: #eee;
  padding: 7px;
  border-radius: 50%;
  border: .6px solid grey;
`;

const ExchangeIcon = styled(FaExchangeAlt)`
  position: absolute;
  top: 47px;
  right: 10px;
  font-size: 0.8rem;
  color: red;
  display: none;
  background-color: #eee;
  padding: 7px;
  border-radius: 50%;
  border: .6px solid grey;
`;

const ProductWrapperHover = styled(ProductWrapper)`
  &:hover {
    .wishlist-icon {
      display: block;
    }
    ${ExchangeIcon} {
      display: block;
    }
  }
`;

export default function ProductBox({ _id, title, description, price, images, handleProductChange }) {
  const { addProduct } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const url = "/product/" + _id;

  const handleAddToCart = () => {
    addProduct(_id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reset the state after 2 seconds (adjust as needed)
  };

  return (
    <ProductWrapperHover>
      <WishlistIcon href="#" className="wishlist-icon" /> {/* Heart icon */}
      <ExchangeIcon href="#" className="exchange-icon" />
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>KSH{price}</Price>
          <AddToCartButton block added={isAdded} onClick={handleAddToCart} primary={!isAdded} outline>
            {isAdded ? "Added" : "Cart"}
          </AddToCartButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapperHover>
  );
}
