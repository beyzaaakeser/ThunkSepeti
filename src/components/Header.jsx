import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow">
      <Container >
        <Link to={"/"} className="text-red-500 font-[900] text-2xl font-mono">
          thunksepeti 
        </Link>
      </Container>
    </header>
  );
};

export default Header;
