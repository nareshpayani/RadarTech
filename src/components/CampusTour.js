import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/campusTour.js";
import { Link } from 'react-router-dom';

class CampusTour extends Component {
    state = {
        secTitle: "We Have Best Campus In The Region. Let's Explore The Campus.",
    }

    render() {
        return (
            <Styles>
                {/* Campus Tour */}
                <section className="campus-tour">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{this.state.secTitle}</h4>
                                </div>
                            </Col>
                            {/* <Col lg="2" md="3">
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-1.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-1.jpg"} alt="" />
                                </div>
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-2.jpg"} alt="" />
                                </div>
                            </Col> */}
                            <Col lg="12" md="12">
                                <Row>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/ibm.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/ibm.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/bosh.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/bosh.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/htc.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/htc.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/brig.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/brig.png"} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="12" md="12">
                                <Row>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/hcl.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/hcl.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/lekha.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/lekha.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/valeo.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/valeo.png"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/mnc/cyi.png"} large={process.env.PUBLIC_URL + "/assets/images/mnc/cyi.png"} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            {/* <Col lg="2" md="3">
                                <div className="tour-box">
                                    <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-ht.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-ht.jpg"} alt="" />
                                </div>
                            </Col> */}
                            {/* <Col lg="4" md="12">
                                <Row>
                                    <Col lg="12" md="6">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-wt2.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-wt2.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="6" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-5.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-5.jpg"} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg="6" md="3">
                                        <div className="tour-box">
                                            <ModalImage small={process.env.PUBLIC_URL + "/assets/images/tour-6.jpg"} large={process.env.PUBLIC_URL + "/assets/images/tour-6.jpg"} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col> */}
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                            <Link className="readmore-btn" to={process.env.PUBLIC_URL + "/gallery"}>More</Link>
                            </div>
                        </Col>

                        </Row>
                        
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default CampusTour
