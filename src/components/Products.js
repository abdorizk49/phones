import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import { Link } from "react-router-dom";

function Products(props){
    const { showButton, homePage } = props;
    return(
        <>
            <section className="products pt-5 pb-5">
                <Container>
                    <Row>
                        {homePage && <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="head-section">
                                <h2>Features Products</h2>
                            </div>
                        </div>}
                        {showButton && <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="head-section text-center">
                                <h2>Phones</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>}
                        <Product />
                        {showButton && <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4">
                            <Link to="/products" className="btn-showMore btn"> <span> Show More </span> </Link>
                        </div>}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Products;