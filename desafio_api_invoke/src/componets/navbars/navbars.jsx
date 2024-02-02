import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navbars.css";

function Navbars() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand className="bg-navbar">
          <img
            alt="pokebola"
            src="src\assent\img\pokebolla.png"
          
            className="d-inline-block align-top imagen"
          />
          <h2 className="pokemon-text">Pokemon</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbars;
