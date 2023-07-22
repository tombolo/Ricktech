import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';

const StyledPage = styled.div`
  padding-top: 140px;
  @media screen and (max-width: 768px) {
    padding-top: 110;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px auto; 
  width: 97%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: green;
  width: 90%;
  border-radius: 8px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
`;

const Location = styled(Container)`
  background-color: white;
  width: 95%;
  margin: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px; 
    margin-right: 0px;
  }
`;

const MapEmbed = styled.div`
  overflow: hidden;
  height: 220px;
  


  iframe {
    width: 100%;
    height: 100%;
  }
  
`;



const ContactInfo = styled(Container)`
  background-color: white;
  width: 95%;
  height: 300px;
  margin: 20px; 
  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px; 
    margin-right: 0px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: #000080;
    text-align: center;
    margin-bottom: 16px;
  }

  .info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .icon {
      margin-right: 8px;
      color: #f59e0b;
    }

    .text {
      font-size: 12px;
      color: black;
    }
  }
`;



const ContactForm = styled(Container)`
  width: 95%;
  margin: 20px;
  background-color: #000080;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px; 
    margin-right: 0px; 
  }
`;

const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #000080;
  text-align: center;
  margin-bottom: 16px;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 90%; 
    margin-left: 1px; 
  }
`;



const FormInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px; 
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    width: 95%; 
    margin-left: 1px; 
  }
`;

const FormTextarea = styled.textarea`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
  font-size: 14px;
  min-height: 120px;
  @media screen and (max-width: 768px) {
    width: 95%; 
    margin-left: 1px; 
  }
`;

const SubmitButton = styled.button`
  background-color: #000080;
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: blue;
  }
`;


const MapTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #000080;
  text-align: center;
  margin-top: 0px;
`;

function Contact() {
  return (
    <>
      <Header />
      <StyledPage>
        <Wrapper>
          {/* Map Location */}
          <CenteredContainer>
            <Location>
              <MapTitle>Our Location</MapTitle>
              <MapEmbed>
                {/* Replace the iframe below with your map embed code */}
                <iframe
                  title="Google Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10871.508148791654!2d36.8821386274293!3d-1.2740938691272508!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1688397449758!5m2!1sen!2ske"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </MapEmbed>
            </Location>
          </CenteredContainer>

          {/* Contact Information */}
          <CenteredContainer>
            <ContactInfo>
              <div className="title">Contact Information</div>
              <div className="info">
                <FaEnvelope className="icon" />
                <p className="text"><strong>Email:</strong> sales@rubytech.co.ke</p>
              </div>
              <div className="info">
                <FaPhoneAlt className="icon" />
                <p className="text"><strong>Phone:</strong> 0720364557 | 07201715011</p>
              </div>
              <div className="info">
                <p className="text font-bold"><strong>Business Hours:</strong></p>
                <p className="text">Mon - Fri: 9:00 AM - 5:00 PM</p>
                <p className="text">Sat: 9:AM - 2PM</p>
                <p className="text">Sunday - Closed</p>
              </div>
            </ContactInfo>
          </CenteredContainer>
        </Wrapper>

        {/* Contact Form */}
        <ContactForm>
          <FormTitle>Send us a Message</FormTitle>
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <FormInput type="text" id="name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <FormInput type="email" id="email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <FormTextarea id="message" rows="4" />
            </div>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactForm>
      </StyledPage>
      <Footer />
    </>
  );
}

export default Contact;
