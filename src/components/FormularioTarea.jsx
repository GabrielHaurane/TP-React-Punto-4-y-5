// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";
const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            className="mx-2"
            type="text"
            placeholder="Agrega una tarea"
          />
          <Button variant="danger" type="submit">
            enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
