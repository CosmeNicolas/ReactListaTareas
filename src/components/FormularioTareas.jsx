import { Button, Form } from 'react-bootstrap';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useState } from 'react';
import ListaTareas from './ListaTareas';

//src
const FormularioTareas = () => {
  //inicializar el State
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="info" className="mx-2" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </section>
  );
};

export default FormularioTareas

