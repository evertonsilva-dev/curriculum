import { Container, Primaria } from 'src/styles/components';
import styled from 'styled-components';

export const CurriculoContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  overflow: hidden;
  gap: 50px;
  min-height: 100vh;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 50px solid ${Primaria};
  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    gap:0px;
  }
`;

export const Content = styled.div`
  padding: 100px 50px 50px 0;
  @media only screen and (max-width: 991px) {
    padding: 25px;
  }
  .circle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${Primaria};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
`;

export const Profile = styled.section`
  padding-top: 50px;
  p {
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 0;
    line-height: 30px;
  }
`;
export const Educations = styled.section`
  padding-top: 50px;
`;
export const Education = styled.article`
  margin-bottom: 30px;
  h3 {
    font-size: 24px;
    font-weight: normal;
  }
  h4 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 0;
  }
  p {
    font-size: 18px;
    line-height: 30px;
  }
`;
export const Experiences = styled(Educations)``;
export const Experience = styled(Education)``;
