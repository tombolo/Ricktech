import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import SearchBar from "@/components/SearchBar"
import { useContext, useState, useRef } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { SearchIcon } from '@heroicons/react/solid';
import DiscountImage from '../components/images/discount.jpg';
import LogoImage from '../components/images/Ricktech.jpg';
import Image from 'next/image';
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";


const StyledHeader4 = styled.header`
 position: fixed;
 width: 100%;
 z-index: 50;
  
`;


const StyledHeader = styled.header`
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 20;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    padding-top: -15px;
    height: 40px;
    width: 100%;
  }
`;

const StyledHeader2 = styled.header`
  background-color: #000080;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: -20px;
  }
`;





const StyledHeader3 = styled.header`
  display: none;
  border-bottom: 1px solid #000080;
  height: 5px;
  margin-top: 0px;
  background-color: #eee;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center; 
    border-bottom: 1px solid #000080;
    height: 10px;
    margin-top: 0px;
    width: 100%;
    background-color: #eee;
  }

  .email,
  .phone-number {
    font-size: 11px;
    color: #000080;
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
  padding: 20px 0px;
`;





const SearchContainerMain = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SearchContainer1 = styled.div`
@media screen and (max-width: 768px) {
  display: flex;
  margin-left: -60px;
}
@media screen and (min-width: 768px) {
  display: none;
}
`;






const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
    width: 100%;
    margin-top: 40px;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const StyledNav2 = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 15px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0px;
  z-index: 30;

  @media screen and (max-width: 768px) {
    top: 22px;
    padding-right: 20px;
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
  margin-right: 140px;

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
  border-bottom: 3px solid red;
  padding-bottom: 0px;
  display: none;

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
    margin-top: -10px;
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
  padding: 25px 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    color: #000080;
    font-size: 17px;
    padding: 0px;
    
  }
`;

const NavButton = styled.button`
  background-color: #000080;
  width: 42px;
  height: 42px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  margin-top: 0px;
  margin-right: 20px;
  margin-left: 5px;
  

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DiscountImageWrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 100px;
  width: 300px;
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
    margin-left: 190px;
    display: none;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 768px) {
    display: none;
    position: fixed;
    top: 60px;
    left: 25%;
    transform: translateX(-50%);
    width: 150px;
    height: 30px;
    .arrow-icon {
      left: -13%;
    }
  }
`;

const DiscountImageElement = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const LogoImageElement = styled(Image)`
  display: flex;
  align-items: center;
  margin-left: 3px;
  width: 120px;
  height: 35px;
  @media screen and (max-width: 768px) {
    margin-top: -15px;
    margin-left: -5px;
  }
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
  height: 22px;
  padding: 10px;
  margin-top: -10px;

`;

const CartIconStyled = styled(ShoppingCartIcon)`
  width: 40px;
  height: 40px;
  color: #000080;
  margin-right: -10px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const ProductLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000080;
  border-radius: 50%;
  padding: 0px;
  height: 15px;
  width: 15px;
  margin-top: -22px;
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

  const [searchQuery, setSearchQuery] = useState("");

  return (

    <StyledHeader4>


    <StyledHeader3>
        <Center>
          <div className="email"></div>
        </Center>
      </StyledHeader3>
    <StyledHeader>

      <Center>
        <Wrapper>
        
          <Logo href={"/"}>
          <LogoImageElement src={LogoImage} alt="Discount" width={200} height={80} />
  
          </Logo>
          
          <SearchContainerMain>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </SearchContainerMain>
          


          <StyledNav4 mobileNavActive={mobileNavActive}>
            <NavLink4 href="#">0757351475 / 0707543535</NavLink4>
            <NavLink4 href="#">ndanumumo93@gmail.com</NavLink4>
          </StyledNav4>

          <StyledNav2 mobileNavActive={mobileNavActive}>
            <NavLink2 href={"/cart"}>

              <CartIconWrapper>
                <CartIconStyled />
                <ProductLength>
                <span style={{ fontSize: '11px', color: 'white' }}>{cartProducts.length}</span>
              </ProductLength>
              </CartIconWrapper>

            </NavLink2>
          </StyledNav2>
          
        </Wrapper>
      </Center>

      <StyledHeader2>
        
          <Wrapper>
            
            <StyledNav mobileNavActive={mobileNavActive}>
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/products"}>All products</NavLink>
              <NavLink href="#">Categories</NavLink>
              <NavLink href={"/laptops"}>Laptops</NavLink>
              <NavLink href={"/macbook"}>MacBook</NavLink>
              <NavLink href={"/iphones"}>Iphones</NavLink>
              <NavLink href={"/android"}>Android</NavLink>
              <NavLink href={"#"}>Account</NavLink>
              <NavLink href={"/contact"}>About Us</NavLink>
            </StyledNav>
            
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
            </NavButton>

            <SearchContainer1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </SearchContainer1>
            
        

          <DiscountImageWrapper>
            <DiscountImageElement src={DiscountImage} alt="Discount" />
            <DiscountInfo>
              <DiscountText>Only for this weekend</DiscountText>
              <DiscountTextBold>Super discount</DiscountTextBold>
            </DiscountInfo>
            <ChevronDownIcon className="arrow-icon" />
          </DiscountImageWrapper>

          </Wrapper>
          </StyledHeader2>
      



    </StyledHeader>
    </StyledHeader4>
  );
}
