import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/CourseModules.js";

class CourseModules extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                
                <section className="tab-section">
                <h5>Course Modules</h5>
                    <Container>
                        <Tab.Container defaultActiveKey="1">
                            <Row>
                                <Col lg="5" md="5">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="1"><i className="las la-arrow-right"></i> Introduction to C Programming</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="2"><i className="las la-arrow-right"></i> Compilation Stages</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="3"><i className="las la-arrow-right"></i> Operation Precedence</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="4"><i className="las la-arrow-right"></i> Types of Operators.</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="5"><i className="las la-arrow-right"></i> Data Types</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="6"><i className="las la-arrow-right"></i> Conditional Statements.</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="7"><i className="las la-arrow-right"></i> Structures and Unions</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="8"><i className="las la-arrow-right"></i> Floating Points & its Storage</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="9"><i className="las la-arrow-right"></i> String, Arrays, Functions</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="10"><i className="las la-arrow-right"></i> Storage Classes</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="11"><i className="las la-arrow-right"></i> Qualifiers</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="12"><i className="las la-arrow-right"></i> Pointers</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="13"><i className="las la-arrow-right"></i> Bitwise Operators</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="14"><i className="las la-arrow-right"></i> Recursion,Inline Functions, Macros</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="15"><i className="las la-arrow-right"></i> Files,Sorting</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="7" md="7">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                            <h4 className="tab-title">Introduction to C Programming</h4>
                                            
                                            <ul className="list-unstyled check-list">
                                                <li><i className="las la-arrow-right"></i>The C Languag and its Advantages.</li>
                                                <li><i className="las la-arrow-right"></i>The Structures of C Programming .</li>
                                                <li><i className="las la-arrow-right"></i>Make fresh engineers employable by contributing to. </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="2">
                                            {/* <h4 className="tab-title">Our Mission</h4> */}
                                            <p className="tab-desc">Drive Technology by creating a platform to constantly drive technology education to make life easier, leading to a technology aware country.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="las la-arrow-right"></i>Globally make life easier by innovation, .</li>
                                                <li><i className="las la-arrow-right"></i>Drive Technology by creating a .</li>
                                                <li><i className="las la-arrow-right"></i>Make fresh engineers employable by contributing to. </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3">
                                           
                                            <p className="tab-desc">Globally make life easier by innovation, technology and education in multidisciplinary fields by maintaining high standards of quality.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="las la-arrow-right"></i>Globally make life easier by innovation, .</li>
                                                <li><i className="las la-arrow-right"></i>Drive Technology by creating a .</li>
                                                <li><i className="las la-arrow-right"></i>Make fresh engineers employable by contributing to. </li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="4">
                                            
                                            <p className="tab-desc">Build skill and confidence in individuals by acting as a coach.Constantly challenge and inspire by setting right example.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="las la-arrow-right"></i>Globally make life easier by innovation, .</li>
                                                <li><i className="las la-arrow-right"></i>Drive Technology by creating a .</li>
                                                <li><i className="las la-arrow-right"></i>Make fresh engineers employable by contributing to. </li>
                                            </ul>

                                            <ul className="list-unstyled check-list">
                                                            <li><i className="las la-arrow-right"></i> Simple and Efficient.</li>
                                                            <li><i className="las la-arrow-right"></i> Easy to learn.</li>
                                                            <li><i className="las la-arrow-right"></i> Structured language.</li>
                                                            <li><i className="las la-arrow-right"></i> It produces efficient programs.</li>
                                                            <li><i className="las la-arrow-right"></i> It can handle low-level activities.</li>
                                                            <li><i className="las la-arrow-right"></i> It can be compiled on a variety of computer platforms.</li></ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="5">
                                            
                                            <p className="tab-desc">Begin with end in mind – Placement programs or technology ramp-up or advancing individual’s career, ensure trainings are outcome oriented.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="las la-arrow-right"></i>Globally make life easier by innovation, .</li>
                                                <li><i className="las la-arrow-right"></i>Drive Technology by creating a .</li>
                                                <li><i className="las la-arrow-right"></i>Make fresh engineers employable by contributing to. </li>
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

export default CourseModules
