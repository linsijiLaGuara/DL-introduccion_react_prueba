/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Buscar from "../buscador/Buscador"; 
import "./navbars.css";

function Navbars({ handleInput }) {
  return (
    <Navbar expand="lg">
      <Container className="body-navegador">
        <Navbar.Brand className="bg-navbar">
          <img
            alt="pokebola"
            src="src\assent\img\pokebolla.png"
            className="d-inline-block align-top imagen"
          />
          <h2 className="pokemon-text">Pokemon</h2>
        </Navbar.Brand>
        <Nav className="bd-nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Buscar
            placeholder="Busca tu Pokemon"
            handlerInput={handleInput}
            handlerButton={() => {}}
          />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;
