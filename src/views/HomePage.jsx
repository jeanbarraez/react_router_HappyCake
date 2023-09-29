import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold"><strong>Happy Cake</strong></span> 
        
      </h1>
      <h6 style = {{fontSize: 25}}> El Lugar de los Pasteles Felices</h6>
      <h2 className="cake">🎂</h2>
    </Container>
  );
};
export default HomePage;