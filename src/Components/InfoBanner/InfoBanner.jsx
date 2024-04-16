import { useLocation  } from "react-router-dom";
import {
  Banner,
  BannerImage,
  BannerInfo,
  Title,
  RegFee,
  TeamSize,
  Description,
  RegisterBtn,
  ButtonSection,
} from "./InfoBanner.styled";

const InfoBanner = ({ title, fee, teamSize, Descriptions, Image }) => {
  
 
  
  const openRules = () => {
    window.open("https://www.google.com");
  };
const location = useLocation();
console.log(location);
  return (
    <>
      <Banner>
        <BannerImage $Image={Image}></BannerImage>
        <BannerInfo>
          <Title>{title}</Title>
          <RegFee>Registration Fee: {fee}</RegFee>
          <TeamSize>Team Size: {teamSize}</TeamSize>
          <Description>{Descriptions}</Description>
          <ButtonSection>
          <RegisterBtn>
          <a href={`${location.pathname}/register`} style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}>
            <RegisterBtn>Register Now</RegisterBtn>
          </a> 
          </RegisterBtn> 
            <RegisterBtn onClick={openRules}>Rules</RegisterBtn>
          </ButtonSection>
        </BannerInfo>
      </Banner>
    </>
  );
};

export default InfoBanner;
