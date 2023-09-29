import { Container } from "react-bootstrap";
import Information from "../Components/Information";



const PlansPage = () => {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-5 mt-5">Cuentanos, ¿en que te podemos ayudar? </h1>
      <Information />
    </Container>
  );
};
export default PlansPage;