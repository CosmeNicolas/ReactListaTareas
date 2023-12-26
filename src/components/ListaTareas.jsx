import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

//traigo las propiedades con desestructuracion q en este caso es un []
const Listatareas = ({tareas,borrarTarea}) => {
    return (
        <ListGroup>
            {
                tareas.map((elementoTarea, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} borrarTarea={borrarTarea} />)
            }
            
        </ListGroup>
    );
};

export default Listatareas;