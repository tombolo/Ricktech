import styled from "styled-components";
import Image from 'next/image';
import Center from "@/components/Center";

const StyledSection = styled.div`
  display: flex;
  box-shadow: 0 3px 4px black;
  margin-top: 30px;
  position: relative;
  z-index: 0;
  width: 100%;
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
    <Center>
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
    </Center>
  );
}
