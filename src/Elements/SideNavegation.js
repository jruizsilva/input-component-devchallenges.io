import styled from 'styled-components';

const color = {
  background: '#fafbfd',
  orange: '#F7542E',
  text: '#9E9E9E',
  textActive: '#090F31',
};

const SideNavegation = styled.div`
  background-color: ${color.background};
  min-height: 100vh;
  padding: 36px;
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 80px;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 13px;
`;

const Span = styled.span`
  color: ${color.orange};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active && color.textActive) || color.text};
  font-size: 14px;
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export { SideNavegation, Logo, Span, Nav, Link };
