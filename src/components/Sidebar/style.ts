import { Primaria } from 'src/styles/components';
import styled from 'styled-components';
export const SidebarWrapper = styled.aside`
  padding: 100px 50px;
  padding-bottom: 0;
  overflow: hidden;
  @media only screen and (max-width: 991px) {
    text-align: center;
  }
  @media only screen and (max-width: 425px) {
    padding: 50px 25px;
    padding-bottom: 0;
  }
`;
export const ProfilePicture = styled.picture`
  display: inline-block;
  padding: 34px;
  box-shadow: 14px 14px 10px rgba(0, 206, 201, 0.45);
  background: #fff;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 130px;
    height: 100%;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translate(-100%, -50%);
  }
  &::after {
    content: '';
    position: absolute;
    width: 130%;
    height: 130px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  img {
    width: 100%;
  }
`;
export const ProfileData = styled.div`
  position: relative;
  padding-top: 72px;
  padding-bottom: 20px;
  @media only screen and (max-width: 425px) {
    padding: 40px 0;
  }
  &:before {
    content: '';
    background-color: ${Primaria};
    position: absolute;
    right: -50px;
    bottom: 0;
    width: 130%;
    height: 650px;
    z-index: -1;
    @media only screen and (max-width: 425px) {
      width: 500px;
      height: 325px;
    }
  }
  h1 {
    font-size: clamp(4rem, 6vw, 8rem);
    margin: 0;
    font-weight: 900;
  }
  h2 {
    font-size: 44px;
    margin-bottom: 0;
    @media only screen and (max-width: 425px) {
      font-size: 22px;
    }
  }
`;
export const Contact = styled.ul`
  list-style: none;
  padding: 60px 0;
  margin: 0;
  position: relative;

  .circle {
    position: absolute;
    display: inline-block;
    width: 225px;
    height: 225px;
    border: 1px solid #000;
    border-radius: 50%;
    top: 0px;
    right: -50px;
    transform: translate(50%, -50%);
    &:before {
      content: '';
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const ContactItem = styled.li`
  display: grid;
  grid-template-columns: 20px auto;
  gap: 40px;
  padding: 10px 0;
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    svg {
      display: none;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
  span {
    font-size: 24px;
  }
`;

export const Languages = styled.article`
  padding: 40px 0;
  width: 300px;
  @media only screen and (max-width: 991px) {
    margin: 0 auto;
    .cont-languages {
      text-align: left;
    }
  }
  @media only screen and (max-width: 425px) {
    width: auto;
  }
  .cont-languages {
    padding: 40px 0;
  }
`;
export const Language = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    margin: 0;
    padding: 10px 0;
    flex: 2;
  }
  span {
    display: inline-block;
    position: relative;
    align-self: center;
    flex: 1;
    &::before {
      content: '';
      position: relative;
      display: inline-block;
      height: 6px;
      width: ${(props) => props.title};
      background-color: ${Primaria};
    }
  }
`;
export const Skills = styled.section`
  padding: 40px 0;
  width: 300px;
  @media only screen and (max-width: 991px) {
    margin: 0 auto;
    .cont-skills {
      text-align: left;
    }
  }
  @media only screen and (max-width: 425px) {
    width: auto;
    padding-bottom:0;
    .cont-skills{
      padding-bottom: 0;
    }
  }
  .cont-skills {
    padding: 40px 0;
  }
`;
export const Skill = styled(Language)``;
