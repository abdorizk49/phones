import { Container, Row } from "react-bootstrap";
import '../style.scss'

function Features(){
    return(
        <>
            <section className="features pt-5 pb-4">
                <Container>
                    <Row>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="head-section text-center">
                                <h2>Features</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="feature mb-4">
                                <h5>Title</h5>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="feature mb-4">
                                <h5>Title</h5>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="feature mb-4">
                                <h5>Title</h5>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div className="feature mb-4">
                                <h5>Title</h5>
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features;