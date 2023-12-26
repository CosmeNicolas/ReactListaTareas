import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

//traigo las propiedades con desestructuracion q en este caso es un []
const Listatareas = ({tareas}) => {
    return (
        <ListGroup>
            {
                tareas.map((elementoTarea, posicionTarea)=> <ItemTarea key={posicionTarea} nombreTarea={elementoTarea} />)
            }
            
        </ListGroup>
    );
};

export default Listatareas;