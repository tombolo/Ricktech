import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaExchangeAlt, FaBars, FaUser } from "react-icons/fa";

const DownWrapper = styled.div`
  background-color: #eee;
  color: #fff;
  padding: 5px;
  position: fixed;
  height: 50px;
  bottom: 0;
  left: 0px;
  right: 10px;
  z-index: 1000;
  margin-top: 200px;
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
  transform: ${props => (props.show ? "translateY(0)" : "translateY(100%)")};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
`;

const IconTitle = styled.span`
  color: grey;
  font-size: 12px;
  margin-top: 4px;
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

const ProfileIcon = styled(FaUser)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

export default function DownMenu() {
  const [showMenu, setShowMenu] = useState(true);

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
    <DownWrapper show={showMenu}>
      <IconWrapper>
        <BarsIcon href="#" className="bars-icon" />
        <IconTitle>Menu</IconTitle>
      </IconWrapper>
      <IconWrapper>
        <WishlistIcon href="#" className="wishlist-icon" />
        <IconTitle>Wishlist</IconTitle>
      </IconWrapper>
      <IconWrapper>
        <ExchangeIcon href="#" className="exchange-icon" />
        <IconTitle>Compare</IconTitle>
      </IconWrapper>
      <IconWrapper>
        <ProfileIcon href="#" className="profile-icon" />
        <IconTitle>Profile</IconTitle>
      </IconWrapper>
    </DownWrapper>
  );
}
