import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #ACACAC;
`;

export const FooterText = styled.p`
  color: #000000;
  background-color: #ACACAC;

  font-size: 18px;
`;

export const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;