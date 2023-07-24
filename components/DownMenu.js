import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const StyledSection = styled.section`
  @media screen and (min-width: 768px) {
    display: none;
  }
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

const TwitterIcon = styled(FaTwitter)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

const FacebookIcon = styled(FaFacebook)`
  position: flex;
  font-size: 20px;
  color: #000080;
`;

const WhatsappIcon = styled(FaWhatsapp)`
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
      <DownWrapper show={showMenu}>
        <IconWrapper>
          {/* Use anchor tag with "href" to direct users to WhatsApp */}
          <a href="https://wa.me/254757351475" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon className="bars-icon" />
          </a>
          <IconTitle>WhatsApp</IconTitle>
        </IconWrapper>

        <IconWrapper>
          {/* Use anchor tag with "href" to direct users to Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100087969914159" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="wishlist-icon" />
          </a>
          <IconTitle>Facebook</IconTitle>
        </IconWrapper>

        <IconWrapper>
          {/* Use anchor tag with "href" to direct users to Twitter */}
          <a href="https://twitter.com/tombolo_ke" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="exchange-icon" />
          </a>
          <IconTitle>Twitter</IconTitle>
        </IconWrapper>

        <IconWrapper>
          <EnvelopeIcon className="profile-icon" />
          <IconTitle>Contact Us</IconTitle>
        </IconWrapper>
      </DownWrapper>
    </StyledSection>
  );
}
