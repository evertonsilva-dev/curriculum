import styled from 'styled-components';
import theme from 'styled-theming';

export const TextColor = theme('mode', {
  light: '#333',
  dark: '#DEE4E7',
});
export const TextColorSecond = theme('mode', {
  light: '#b2b2b2',
  dark: '#DEE4E7',
});
export const FuhthestBackground = theme('mode', {
  light: '#DEE4E7',
  dark: '#111418',
});
export const MiddleBackground = theme('mode', {
  light: '#eff0f2',
  dark: '#191f24',
});
export const MiddleSecondBackground = theme('mode', {
  light: '#f9f9fa',
  dark: '#232a31',
});
export const ClosestBackground = theme('mode', {
  light: '#fff',
  dark: '#38434f',
});
export const Shadow = theme('mode', {
  light: '#0002',
  dark: '#fff2',
});
export const Primaria = theme('mode', {
  light: '#00cec9',
  dark: '#81ecec',
});
export const Secundaria = theme('mode', {
  light: '#868a8b',
  dark: '#868a8b',
});
export const Terciaria = theme('mode', {
  light: '#e3e4e6',
  dark: '#e3e4e6',
});

export const Button = styled.button`
  background-color: ${MiddleSecondBackground};
  color: ${TextColor};
  padding: 15px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0px 2px 30px ${Shadow};
    outline: none;
  }
`;
export const ButtonOutline = styled(Button)`
  background-color: transparent;
  border: 1px solid ${TextColor};
`;
export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  display: inline-block;
  position: relative;
  margin: 0;
  &::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 110%;
    left: 0;
    top: 50%;
    background-color: ${Primaria};
    z-index: -1;
  }
`;
export const H3 = styled.h3`
  font-family: 'Julius Sans One', sans-serif;
  color: ${Secundaria};
  font-size: 1rem;
  margin-bottom: 30px;
`;
