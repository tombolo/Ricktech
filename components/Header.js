import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState, useRef } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { SearchIcon } from '@heroicons/react/solid';
import DiscountImage from '../components/images/discount.jpg';
import LogoImage from '../components/images/Ricktech.jpg';
import Image from 'next/image';
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";



const StyledHeader = styled.header`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 20;
`;

const StyledHeader2 = styled.header`
  background-color: #000080;
  position: fixed;
  width: 100%;
  box-shadow: 0 3px 6px white;
  z-index: 20;

  @media screen and (max-width: 768px) {
    height: 50px;
  }
`;

const Title = styled.h2`
  font-size: .7rem;
  color: white;
`;

const Logo = styled(Link)`
  color: #000080;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid blue;
  border-radius: 20px;
  margin-left: 2px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchBar = styled.input`
  display: flex;
  width: 500px;
  height: 20px;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 20px;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
    width: 100%;
    margin-left: -20px;
    margin-top: 40px;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const StyledNav2 = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
    width: 100%;
    margin-left: -20px;
  `
      : `
    display: flex;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
  
`;

const StyledNav4 = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    width: 100%;
    margin-left: -20px;
  `
      : `
    display: none;
  `}

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: static;
    padding: 0;
  }
`;

const NavLink4 = styled(Link)`
  font-size: 11px;
  display: block;
  color: #000080;
  text-decoration: underline;
  padding: 0px 0;

  &:hover {
    position: relative;
    &:after {
      width: 100%;
      background-color: red;
    }
    color: #3b82f6;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNav3 = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    width: 100%;
    margin-left: 0px;
    color: #000080;
  `
      : `
    display: none;
  `}

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: static;
    padding: 0;
  }
`;

const NavLink3 = styled(Link)`
  font-size: 13px;
  display: block;
  color: #000080;
  text-decoration: none;
  padding: 0px 0;

  &:hover {
    position: relative;
    &:after {
      width: 100%;
      background-color: red;
    }
    color: #3b82f6;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const StyledNav5 = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    width: 100%;
    margin-left: 0px;
    color: #000080;
  `
      : `
    display: none;
  `}

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    position: static;
    padding: 0;
  }
`;

const NavLink5 = styled(Link)`
  font-size: 14px;
  display: block;
  color: white;
  text-decoration: none;
  padding: 0px 0;

  &:hover {
    position: relative;
    &:after {
      width: 100%;
      background-color: red;
    }
    color: #3b82f6;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 14px;
  display: block;
  color: white;
  text-decoration: none;
  padding: 0px 0;

  @media screen and (min-width: 768px) {
    &:hover {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 100%;
        height: 3px;
        background-color: red;
        transform-origin: center;
        transform: scaleX(1);
        transition: width 3s;
      }
      color: #3b82f6;
    }
  }

  @media screen and (max-width: 768px) {
    color: #000080;
    padding: 15px;
    background-color: #f9f9f9;
    border: .5px solid grey;
    font-size: 14px;
    font-weight: 520;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavLink2 = styled(Link)`
  font-size: 14px;
  display: block;
  color: #000080;
  text-decoration: none;
  padding: 0px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    color: #000080;
    font-size: 17px;
  }
`;

const NavButton = styled.button`
  background-color: #000080;
  width: 35px;
  height: 35px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  margin-left: auto;
  margin-top: -10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DiscountImageWrapper = styled.div`
  position: fixed;
  top: 75px;
  right: 100px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .arrow-icon {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    color: white;
    margin-left: 170px;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    top: 70px;
    right: 180px;
    height: 30px;
  }
`;

const DiscountImageElement = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const LogoImageElement = styled(Image)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 80px;
  height: 20px;
`;

const DiscountInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;

const DiscountText = styled.p`
  font-size: 10px;
  margin: 2px;
  color: grey;
`;

const DiscountTextBold = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  color: white;
`;

const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartIconStyled = styled(ShoppingCartIcon)`
  width: 18px;
  height: 18px;
  color: #000080;
  margin-right: 5px;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 0px;
  width: 200px;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  background-color: transparent;
  padding: 0px;
  z-index: 30;
`;

const DropdownMenu1 = styled.div`
  margin-top: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
  left: 0;
  
`;

const DropdownMenuItem = styled(Link)`
  font-size: 13px;
  color: #000080;
  text-decoration: none;
  padding: 7px;

  &:hover {
    color: #3b82f6;
    background-color: #eee;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CustomerServiceLink = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    display: flex;
  }
  .arrow-icon {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    color: #000080;
    margin-left: 110px;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CategoriesLink = styled.div`
  position: relative;

  &:hover ${DropdownMenu} {
    display: flex;
  }
  .arrow-icon {
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    color: white;
    margin-left: 80px;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;





export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const categoriesDropdownTimeoutRef = useRef(null);

  const handleCustomerServiceHover = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleCustomerServiceLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 3000); // Adjust the delay as needed
  };

  const handleCategoriesHover = () => {
    clearTimeout(categoriesDropdownTimeoutRef.current);
    setShowCategoriesDropdown(true);
  };

  const handleCategoriesLeave = () => {
    categoriesDropdownTimeoutRef.current = setTimeout(() => {
      setShowCategoriesDropdown(false);
    }, 3000); // Adjust the delay as needed
  };

  

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
        
          <Logo href={"/"}>
          <LogoImageElement src={LogoImage} alt="Discount" width={120} height={40} />
  
          </Logo>
          

          <StyledNav3 mobileNavActive={mobileNavActive}>
            <CustomerServiceLink
              onMouseEnter={handleCustomerServiceHover}
              onMouseLeave={handleCustomerServiceLeave}
            >
              <NavLink3 href="#">Customer Service</NavLink3>
              {showDropdown && (
                <DropdownMenu>
                  <DropdownMenu1>
                  <DropdownMenuItem href="#">Contact Us</DropdownMenuItem>
                  <DropdownMenuItem href="#">Terms and Conditions</DropdownMenuItem>
                  <DropdownMenuItem href="#">Returns & Refund Policy</DropdownMenuItem>
                  <DropdownMenuItem href="#">Iphones TradeIn</DropdownMenuItem>
                  </DropdownMenu1>
                </DropdownMenu>
              )}
               <ChevronDownIcon className="arrow-icon" />
            </CustomerServiceLink>
          </StyledNav3>
          <SearchContainer>
            <SearchBar type="text" placeholder="Search for Laptops, Computers, Accessories and Electronic" />
            <SearchIconWrapper>
              <SearchIcon width={20} />
            </SearchIconWrapper>
          </SearchContainer>
          <StyledNav4 mobileNavActive={mobileNavActive}>
            <NavLink4 href="#">0757351475 / 0707543535</NavLink4>
            <NavLink4 href="#">ndanumumo93@gmail.com</NavLink4>
          </StyledNav4>

          <StyledNav2 mobileNavActive={mobileNavActive}>
            <NavLink2 href={"/cart"}>
              <CartIconWrapper>
                <CartIconStyled />
                Cart ({cartProducts.length})
              </CartIconWrapper>
            </NavLink2>
          </StyledNav2>
          
        </Wrapper>
      </Center>

      <StyledHeader2>
        <Center>
          <Wrapper>
            <StyledNav mobileNavActive={mobileNavActive}>
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/products"}>All products</NavLink>

              <CategoriesLink
              onMouseEnter={handleCategoriesHover}
              onMouseLeave={handleCategoriesLeave}
            >
            <NavLink5 href="#">Categories</NavLink5>
              {showCategoriesDropdown && (
                <DropdownMenu>
                  <DropdownMenu1>
                    <DropdownMenuItem href="#">Laptops</DropdownMenuItem>
                    <DropdownMenuItem href="#">MacBook</DropdownMenuItem>
                    <DropdownMenuItem href="#">Iphones</DropdownMenuItem>
                    <DropdownMenuItem href="#">Android</DropdownMenuItem>
                  </DropdownMenu1>
                </DropdownMenu>
              )}
            </CategoriesLink>

              <NavLink href={"/laptops"}>Laptops</NavLink>
              <NavLink href={"/macbook"}>MacBook</NavLink>
              <NavLink href={"/iphones"}>Iphones</NavLink>
              <NavLink href={"/android"}>Android</NavLink>
              <NavLink href={"/account"}>Account</NavLink>
              <NavLink href={"/account"}>About Us</NavLink>
            </StyledNav>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
            </NavButton>
          </Wrapper>
          <DiscountImageWrapper>
            <DiscountImageElement src={DiscountImage} alt="Discount" />
            <DiscountInfo>
              <DiscountText>Only for this weekend</DiscountText>
              <DiscountTextBold>Super discount</DiscountTextBold>
            </DiscountInfo>
            <ChevronDownIcon className="arrow-icon" />
          </DiscountImageWrapper>
          
        </Center>
      </StyledHeader2>
    </StyledHeader>
  );
}
