import {Button , Form} from 'react-bootstrap';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import ListaTareas from './ListaTareas';

const FormularioTareas = () => {
  return (
    <>
    <section>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       {/*  <Form.Label>Ingresa tu tarea</Form.Label> */}
        <Form.Control type="text" placeholder="Ej: Tarea 1" minLength={3} maxLength={50} />
        <ListaTareas/>
       <Button variant="info" onClick={() => console.log("Primary")}>
        Primary
       </Button>
      </Form.Group>
    </Form>
    </section>
    </>
  );
};

export default FormularioTareas;

