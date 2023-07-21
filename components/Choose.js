import styled from "styled-components";
import Image from 'next/image';
import Center from "@/components/Center";
import Image1 from '../components/images/good1.jpg';
import Image2 from '../components/images/good5.jpg';
import Image3 from '../components/images/good6.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const StyledSection = styled.section`
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: 0px;
  box-shadow: 0 3px 4px black;
  margin-top: 30px;
  position: relative;
  z-index: 0;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    margin-left: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
`;

const ChooseWrapper = styled.div`
  position: relative;
  flex: 1;
  z-index: 0;
`;

const ChooseImageContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 768px) {
    
  }
`;

const StyledImage = styled(Image)`
  @media screen and (max-width: 768px) {

  }
`;

const ChooseImageContainer2 = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  z-index: 0;
  
`;

export default function Choose() {
  return (
    
    <StyledSection>
      
      <ChooseWrapper>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <ChooseImageContainer>
        <StyledImage src={Image1} alt="Image 1" layout="fill" objectFit="cover" />
        </ChooseImageContainer>

        <ChooseImageContainer>
        <StyledImage src={Image2} alt="Image 1" layout="fill" objectFit="cover" />
        </ChooseImageContainer>

        <ChooseImageContainer>
        <StyledImage src={Image3} alt="Image 1" layout="fill" objectFit="cover" />
        </ChooseImageContainer>
 
        </Carousel>

      </ChooseWrapper>
    </StyledSection>

  );
}
