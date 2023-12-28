import { Button, Form } from 'react-bootstrap';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import ListaTareas from './ListaTareas';

//src
const FormularioTareas = () => {
  //inicializar el State
  const [tarea, setTarea] = useState('');
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //useEffect monstaje y desmontaje
  /* useEffect(() => {
   console.log('guardar en el local storage')
  }) */

  //solo se ejecuta en el momento del montaje
 /*  useEffect(() => {
   console.log('guardar en el local storage')
  },[]) */

  //se ejecuta cuando se produce el evento del estado q quiero trabajar 
   useEffect(() => {
   console.log('guardar en el local storage')
   localStorage.setItem('listaTareas',JSON.stringify(tareas))
  },[tareas])

  //borrar tarea
  const borrarTarea = (nombreTarea)=>{
    const copiaTareas = tareas.filter((tarea)=> tarea !== nombreTarea);
    setTareas(copiaTareas)
  }

  const handleSubmit =  (e) =>{
    e.preventDefault();
    console.log('desde el evento submit')
    //tareas.push(asd) buscar una alternativa al push 
    //creo un arreglo uevo, lo copio y le agrego el elemento q esta en el input
    setTareas([...tareas, tarea])
    //limpiar formulario
    setTarea('')
  }



  return (
    <section>
      <Form onSubmit={handleSubmit}>
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
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}/>
    </section>
  );
};

export default FormularioTareas

