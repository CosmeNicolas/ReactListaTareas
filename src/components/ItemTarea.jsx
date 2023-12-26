import { ListGroup, Button } from "react-bootstrap";


const ItemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item>
        {nombreTarea}
        <Button variant="danger">
            Borrar
        </Button>
        </ListGroup.Item>

    );
};

export default ItemTarea;