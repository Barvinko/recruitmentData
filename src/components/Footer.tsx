import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <p className="footer__text">
          © {currentYear} Bannerlord Clan Recruiting Tutorial. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
