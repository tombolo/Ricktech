import Center from "@/components/Center";
import styled from "styled-components";
import { FaTruck, FaThumbsUp, FaClock, FaMoneyBill, FaShieldAlt } from "react-icons/fa";

const StyledSection = styled.section`
  padding: 10px 0px;
  background-color: white;
  margin-top: 20px;
  border-radius: 0px;
  max-width: 1200px;
  display: flex;
  margin-left: 0px;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0px;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  margin-right: 10px;
  margin-top: 10px;
  border-right: 1px solid grey;

  @media screen and (max-width: 768px) {
    margin: 10px;
    border-right: none;
  }
`;

const IconTitle = styled.h3`
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
  margin-right: 40px;
  color: #000080;

  @media screen and (max-width: 768px) {
    margin: 0;
    text-align: center;
  }
`;

const BlueIcon = styled.div`
  color: ;
  margin: 10px;

  @media screen and (max-width: 768px) {
    margin-right: 5px;
  }
`;

export default function Service() {
  return (
    <StyledSection>
      <Center>
        <IconsContainer>
          <IconContainer>
            <BlueIcon>
              <FaTruck size={20} />
            </BlueIcon>
            <IconTitle>Delivery</IconTitle>
          </IconContainer>
          <IconContainer>
            <BlueIcon>
              <FaThumbsUp size={20} />
            </BlueIcon>
            <IconTitle>99% Positive</IconTitle>
          </IconContainer>
          <IconContainer>
            <BlueIcon>
              <FaClock size={20} />
            </BlueIcon>
            <IconTitle>24 Hours Operation</IconTitle>
          </IconContainer>
          <IconContainer>
            <BlueIcon>
              <FaMoneyBill size={20} />
            </BlueIcon>
            <IconTitle>Payment</IconTitle>
          </IconContainer>
          <IconContainer>
            <BlueIcon>
              <FaShieldAlt size={20} />
            </BlueIcon>
            <IconTitle>Warranty</IconTitle>
          </IconContainer>
        </IconsContainer>
      </Center>
    </StyledSection>
  );
}




