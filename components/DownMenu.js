import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaExchangeAlt, FaBars, FaEnvelope } from "react-icons/fa";


const StyledSection = styled.section`
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
    margin-left: px;
    margin-top: 0px;
    z-index: 9999;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px;
  margin-top: 115px;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
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



const NavLink1 = styled(Link)`
  position: flex;
  font-size: 20px;
  color: #000080;
  margin-bottom: -4px;
  
`;



const DownWrapper = styled.div`
  background-color: #eee;
  color: #fff;
  padding: 5px;
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0;
  right: 10px;
  z-index: 1000;
  margin-top: 0px;
  width: 100%;
  border-top: 1px solid black;
  box-shadow: 0 3px 6px 4px black;
  @media screen and (min-width: 768px) {
    display: none;
  }

  /* Add flexbox layout */
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  /* Add transition to create a smooth show/hide effect */
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateY(0)" : "translateY(100%)")};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const IconTitle = styled.span`
  color: grey;
  font-size: 12px;
  margin-top: 0px;
`;

const WishlistIcon = styled(FaHeart)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

const ExchangeIcon = styled(FaExchangeAlt)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

const BarsIcon = styled(FaBars)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

const EnvelopeIcon = styled(FaEnvelope)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

export default function DownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  
  useEffect(() => {
    let prevScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (prevScrollY > currentScrollY) {
        setShowMenu(false); // Scroll direction: up
      } else {
        setShowMenu(true); // Scroll direction: down
      }
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <StyledSection>

    <StyledNav mobileNavActive={mobileNavActive}>
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/products"}>
                All products
              </NavLink>
              <NavLink href={"/laptops"}>
                Laptops
              </NavLink>
              <NavLink href={"/macbook"}>
                MacBook
              </NavLink>
              <NavLink href={"/iphones"}>
                Iphones
              </NavLink>
              <NavLink href={"/android"}>
                Android
              </NavLink>
              <NavLink href={"/macbook"}>
                Account
              </NavLink>
              <NavLink href={"/contact"}>
                About Us
              </NavLink>
    </StyledNav>
    
    <DownWrapper show={showMenu}>
        <IconWrapper>
        <NavLink1 href="#">
          <BarsIcon onClick={() => setMobileNavActive(prev => !prev)} className="bars-icon" />
        </NavLink1>
          <IconTitle>Menu</IconTitle>
    </IconWrapper>



        <IconWrapper>
        <NavLink1 href={"/contact"}>
          <WishlistIcon href="#" className="wishlist-icon" />
        </NavLink1>
          <IconTitle>Wishlist</IconTitle>
        </IconWrapper>
        <IconWrapper>
        <NavLink1 href={"/contact"}>
          <ExchangeIcon href="#" className="exchange-icon" />
        </NavLink1>
          <IconTitle>Compare</IconTitle>
        </IconWrapper>
      <IconWrapper>
      <NavLink1 href={"/contact"}>
          <FaEnvelope className="profile-icon" />
      </NavLink1>
      <IconTitle>Contact Us</IconTitle>
        
      </IconWrapper>
      </DownWrapper>

      </StyledSection>
      
  );
}
