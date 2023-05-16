import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../style.scss'
// import { categories} from "../../api/API"

function AddCategory() {
  const categoriesUrl = "https://fakestoreapi.com/categories";
  const [name, setName] = useState("");
  let navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: categoriesUrl,
      data: {
        name,
      },
    }).then((data) => {
      console.log(data);
      navigate("/admin/categories");
    });
  };
  return (
    <>
      <section className="addCategory forms pt-5 pb-5 w-100">
        <Container>
          <h3>Add New Category</h3>
          <Form className="row" onSubmit={formSubmit}>
            <Col className="col-md-12">
                <Form.Group className="mb-3" controlId="formBasicCategoty">
                    <InputGroup>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Category Name"
                            className="ps-3 pe-5"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Col>
            <Col className="col-md-12 justify-content-center d-flex">
                <Button variant="" type="submit">
                    <span>Add Category</span>
                </Button>
            </Col>
          </Form>
        </Container>
      </section>
    </>
  );
}
export default AddCategory;
