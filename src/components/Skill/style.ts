import { Secundaria } from 'src/styles/components';
import styled from 'styled-components';

export const SkillContent = styled.div`
  position: relative;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${Secundaria};
  display: block;
  position: relative;
  &::before {
    content: '';
    height: 30px;
    width: 10px;
    background-color: ${Secundaria};
    position: absolute;
    top: 0;
    left: ${(props) => (props.title ? props.title : 0)};
    transform: translateY(calc(-50% + 2.5px));
  }
`;
