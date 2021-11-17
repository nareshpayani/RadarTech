import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav, Table } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import ReviewForm from './../courses/components/ReviewForm';

import { Styles } from './styles/CourseTab';

class CourseTab extends Component {
    render() {

        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper product-details-page">

                 
                    {/* Product Details */}
                    <section className="product-details-area">
                        <Container>
                            <Row>
                               
                                <Col md="12">
                                    <div className="product-tab">
                                        <Tab.Container defaultActiveKey="description">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="description">Description</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="additional">Curriculum</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">Product Review</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="resouces">Resources</Nav.Link>
                                                </Nav.Item>
                                            </Nav>

                                            <Tab.Content>
                                                <Tab.Pane eventKey="description" className="description-tab">
                                                    <p>C Programming is the most powerful and flexible object oriented programming computer language which is used for operating systems, compilers, interpreters, search engine and graphic programs. We offer this course to help students clear their C++ concepts through a combination of theory and lab practis.</p>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="resouces" className="description-tab">
                                                    <p>C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.</p>
                                                </Tab.Pane>


                                                <Tab.Pane eventKey="additional" className="additional-tab">
                                                    <Table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Product Id</td>
                                                                <td>#KC7269889</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Brand</td>
                                                                <td>Samsung Electronics</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Model</td>
                                                                <td>Regular Model</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Size</td>
                                                                <td>Small / Medium / Large</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color</td>
                                                                <td>White / Black / Blue</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Warranty</td>
                                                                <td>3 Years International Warranty</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Country Of Origin</td>
                                                                <td>United States</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Made In</td>
                                                                <td>Republic Of China</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dimensions</td>
                                                                <td>24 x 27 x 163 cm</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Weight</td>
                                                                <td>33 KG</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Tab.Pane>

                                                <Tab.Pane eventKey="review" className="review-tab">
                                                    <div className="review-comments">
                                                        <div className="comment-box d-flex">
                                                            <div className="comment-image">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-title">
                                                                    <h6>Mark Shadow</h6>
                                                                </div>
                                                                <div className="date-rating d-flex justify-content-between">
                                                                    <p>Mar 26, 2020</p>
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-desc">
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="comment-box d-flex">
                                                            <div className="comment-image">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-1.jpg`} alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-title">
                                                                    <h6>Katrin Kay</h6>
                                                                </div>
                                                                <div className="date-rating d-flex justify-content-between">
                                                                    <p>Mar 26, 2020</p>
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-desc">
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="comment-box d-flex">
                                                            <div className="comment-image">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-title">
                                                                    <h6>David Show</h6>
                                                                </div>
                                                                <div className="date-rating d-flex justify-content-between">
                                                                    <p>Mar 26, 2020</p>
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="comment-desc">
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="review-form">
                                                        <h5>Write a Review</h5>
                                                        <ReviewForm />
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </Styles>
        )
    }
}

export default CourseTab