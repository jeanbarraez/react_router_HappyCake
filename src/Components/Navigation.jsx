import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";/* El componente Link funciona similar a la etiqueta de hipervínculo(a) de HTML.Evita recargar en el navegador */
const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start">
        
        <Link to="/" className="text-white ms-3 py-3 text-decoration-none">
          🏠Home
        </Link>
        <Link to="/Contacto" className="text-white ms-3 text-decoration-none">
          📒Contacto
        </Link>
      </Container>
      <Navbar.Brand>Happy Cake🍰</Navbar.Brand>
    </Navbar>
  )
}

export default Navigation