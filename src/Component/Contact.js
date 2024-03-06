
import { Button, Form, Container } from "react-bootstrap";
import Footer from "./Footer";

function BasicExample() {
  return (
    <div>
      <Container
        fluid
        className=" bg-dark text-white dashboard-body overflow-hidden d-flex justify-content-center align-items-center"
      >
        <Form>
          <h3 className="text-center text-white py-3">Contact US</h3>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className=" text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3 text-white"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms & Condition" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

export default BasicExample;