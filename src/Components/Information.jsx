import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Information() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger" className='px-4 mt-3' style={{fontSize: "20px" }}  >Enviar</Button>
    </Form>
  );
}

export default Information;