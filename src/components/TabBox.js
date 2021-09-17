import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i> Why Radar</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> Our Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Our Vision</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"></i> Our Ranking</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="research"><i className="las la-arrow-right"></i> Our Research</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Why Radar</h4>
                                            <p className="tab-desc">We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Globally make life easier by innovation, technology and education in multidisciplinary fields by maintaining high standards of quality.</li>
                                                <li><i className="fa fa-check"></i>Drive Technology by creating a platform to constantly drive technology education to make life easier, leading to a technology aware country.</li>
                                                <li><i className="fa fa-check"></i>Make fresh engineers employable by contributing to ‘industry-academia’ gap. Emertxe strives to bring highest level of engagement with students by making it practical oriented. </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Our Mission</h4>
                                            <p className="tab-desc">Drive Technology by creating a platform to constantly drive technology education to make life easier, leading to a technology aware country.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Our Vision</h4>
                                            <p className="tab-desc">Globally make life easier by innovation, technology and education in multidisciplinary fields by maintaining high standards of quality.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>

                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">Our Ranking</h4>
                                            <p className="tab-desc">Build skill and confidence in individuals by acting as a coach.Constantly challenge and inspire by setting right example.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="research">
                                            <h4 className="tab-title">Our Research</h4>
                                            <p className="tab-desc">Begin with end in mind – Placement programs or technology ramp-up or advancing individual’s career, ensure trainings are outcome oriented.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
