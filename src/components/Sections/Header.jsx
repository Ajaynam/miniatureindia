import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
// import HeaderImage from "../../";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import WhatsAppIcon from "../whatsapp/WhatsApp";
import Popup from "../popup/Popup";






export default function Header() {

  const [whatsAppVisible, setWhatsAppVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const CloseButton = ({ onClose }) => {
    return (
      <div className="fixed md:bottom-32 bottom-28 left-32  md:left-36 z-50">
        {/* Close button */}
        <button onClick={onClose} className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    );
  }
  const CloseButton2 = ({ onClose }) => {
    return (
      <div className="fixed md:top-[20%] top-[25%] md:right-[30%] right-[20%] justifu-center z-50">
        {/* Close button */}
        <button onClick={onClose} className="bg-red-900 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    );
  }
  useEffect(() => {


    const whatsAppTimer = setTimeout(() => {
      setWhatsAppVisible(true);
    }, 5000);

    return () => {
      clearTimeout(whatsAppTimer);
    };
  }, []);

  const handleCloseWhatsApp = () => {
    setWhatsAppVisible(false);
  };
  const handleClosePopup = () => {
    setShowImage(false);
  };


  return (
    <Wrapper id="home" className="container flexSpaceCenter">

      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Discover Your Next Adventure</h1>
          <HeaderP className="font13 semiBold">
            Embark on unforgettable journeys to exotic locales with our meticulously curated travel packages. Discover hidden gems, immerse yourself in vibrant cultures, and create lifelong memories with every adventure. Our expert team ensures every detail is tailored to perfection, promising you the ultimate travel experience. Let us guide you to the most enchanting destinations the world has to offer
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src="travels/hero/historical.png" alt="office" style={{ zIndex: 9 }} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>We Delivering Unique Customised Travel And Events Solutions To Worldwide Client</em>
              </p>
              <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}></p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        {/* <GreyDiv className="lightBg "></GreyDiv> */}
      </RightSide>
      {whatsAppVisible && <WhatsAppIcon />}
      {whatsAppVisible && <CloseButton onClose={handleCloseWhatsApp} />}
      {showImage && <Popup />}
      {showImage && <CloseButton2 onClose={handleClosePopup} />}

    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


