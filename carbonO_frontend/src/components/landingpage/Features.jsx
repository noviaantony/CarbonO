import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
// import ServiceBox from "./ServiceBox.js";


const Features = ({ icon, title, subtitle }) => {
  const ThreeColumnContainer = styled.div`
    ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
  `;

  let getImgUrl;

  switch (icon) {
    case "roller":
      getImgUrl = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ratione sit accusamus corporis cumque distinctio aperiam ut vitae in.";
      break;
    case "monitor":
      getImgUrl =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ratione sit accusamus corporis cumque distinctio aperiam ut vitae in.";
      break;
    case "browser":
      getImgUrl =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ratione sit accusamus corporis cumque distinctio aperiam ut vitae in.";
      break;
    case "printer":
      getImgUrl =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ratione sit accusamus corporis cumque distinctio aperiam ut vitae in.";
      break;
    default:
      getImgUrl =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ratione sit accusamus corporis cumque distinctio aperiam ut vitae in.";
      break;
  }

  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 bg-white margin:">
      <div className="space-y-4 flex-1 sm:text-center lg:text-center">
        <h1 class="font-bold text-[#5E9387] text-darken my-3 text-4xl text-center">
          All-In-One <span class="text-gray-700">Carbon Tracker</span>
        </h1>
      </div>
      {/* <ServiceBoxRow className="flex">
        <ServiceBoxWrapper>
          <ServiceBox
            icon="roller"
            title="Graphic Design"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="monitor"
            title="Web Design"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="browser"
            title="Development"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          />
        </ServiceBoxWrapper>
        <ServiceBoxWrapper>
          <ServiceBox
            icon="printer"
            title="Print"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
          />
        </ServiceBoxWrapper>
      </ServiceBoxRow> */}
    </section>
  );
};

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default Features
