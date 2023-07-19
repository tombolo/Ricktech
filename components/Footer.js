import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #000080;
  color: #fff;
  padding: 5px;
  position: relative;
  z-index: 100;
  width: 100%;
`;

const FooterTitle = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 2px;
  font-weight: 600;
  z-index: 100;
`;

const FooterSubTitle = styled.h4`
  font-size: 0.8rem;
  color: grey;
  margin-bottom: 0; /* Remove default margin */
  margin-top: 0; /* Remove default margin */
  padding: 4px;
  font-weight: 400;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
`;

const FooterSubSection = styled.div`
  margin: 0px;

  @media screen and (max-width: 768px) {
    margin: 2px;
    text-align: center;
    border-bottom: 1px solid black;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterSubSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterSubTitle>About Us</FooterSubTitle>
          <FooterSubTitle>Contact Us</FooterSubTitle>
          <FooterSubTitle>Shipping & Returns</FooterSubTitle>
        </FooterSubSection>
        <FooterSubSection>
          <FooterTitle>Categories</FooterTitle>
          <FooterSubTitle>Laptops</FooterSubTitle>
          <FooterSubTitle>MacBook</FooterSubTitle>
          <FooterSubTitle>Iphones</FooterSubTitle>
          <FooterSubTitle>Android</FooterSubTitle>
        </FooterSubSection>
        <FooterSubSection>
          <FooterTitle>My Account</FooterTitle>
          <FooterSubTitle>Login</FooterSubTitle>
          <FooterSubTitle>Register</FooterSubTitle>
          <FooterSubTitle>My Orders</FooterSubTitle>
          <FooterSubTitle>Wishlist</FooterSubTitle>
        </FooterSubSection>
        <FooterSubSection>
          <FooterTitle>Talk to Us Today</FooterTitle>
          <FooterSubTitle>Phone: 123-456-7890</FooterSubTitle>
          <FooterSubTitle>Email: info@example.com</FooterSubTitle>
          <FooterSubTitle>Address: 123 Main St, City</FooterSubTitle>
        </FooterSubSection>
      </FooterSection>
    </FooterWrapper>
  );
}
