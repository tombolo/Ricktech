import styled from "styled-components";
import ChooseImage from '../components/images/good1.jpg';
import ChooseImage1 from '../components/images/good6.jpg';
import Image from 'next/image';

const StyledSection = styled.div`
  display: flex;
  box-shadow: 0 3px 4px black;
  margin-top: 30px;
  position: relative;
  z-index: 0;
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
        <ChooseImageContainer>

        </ChooseImageContainer>
      </ChooseWrapper>
      <ChooseWrapper>
        <ChooseImageContainer2>
          
        </ChooseImageContainer2>
      </ChooseWrapper>
    </StyledSection>
  );
}
