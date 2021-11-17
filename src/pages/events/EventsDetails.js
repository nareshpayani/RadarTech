import React, { Component } from 'react';
import Datas from '../../data/event/details.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Timer from 'react-compound-timer';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import PopularCourse from './../courses/components/PopularCourse';
import CourseTag from './../courses/components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/eventDetails.js';
import CourseTab from './CourseTab.js';
import CourseModules from './CourseModules';

class EventDetails extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper event-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Course Details" />

                    {/* Event Details Area */}
                    <section className="event-details-area">
                        <Container>
                            <Row>
                                <Col lg="9" md="8" sm="12">
                                    <div className="event-details-content">
                                        <div className="heading">
                                            <h4>C and C++ TRAINING COURSE WITH JOB SUPPORT</h4>
                                        </div>
                                        <div className="event-icon">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="las la-calendar"></i> 19 September, 2021</li>
                                                <li className="list-inline-item"><i className="las la-clock"></i> 10:30am</li>
                                                <li className="list-inline-item"><i className="las la-map-marker"></i> Bangalore</li>
                                                {/* <li className="list-inline-item"><i className="las la-copy"></i> Social Science</li> */}
                                            </ul>
                                        </div>
                                        <div className="event-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/cprogramming.jpeg`} alt="" className="img-fluid" />
                                        </div>
                                        {/* <div className="event-details-overview">
                                            <h5>GOAL</h5>
                                            <p> Here we provide for the best C & C++ training institutes in Bangalore within more than C & C++ course key features like certification guidance, 100% job oriented training with expert trainers. C & C++ Training Classes schedule is providing in our service provider institutes in Bangalore. If this C & C++ course schedule doesn’t match please let us know. They will arrange appropriate timings based on your wish with affordable C & C++ Training fees in Bangalore.</p><br /><br />
                                            <br /><br /> <span><i className="las la-quote-right"></i>Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus.</span>
                                            <h5>After completion of this course, you will learn:</h5>
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-check"></i> Principles of Object-Oriented Programming.</li>
                                                <li><i className="fa fa-check"></i> Tokens, Expressions and Control Structures.</li>
                                                <li><i className="fa fa-check"></i> Functions in C++.</li>
                                                <li><i className="fa fa-check"></i> Classes and Objects.</li>
                                                <li><i className="fa fa-check"></i> Constructors and Destructors.</li>
                                                <li><i className="fa fa-check"></i> Operator overloading and type Conversions.</li>
                                                <li><i className="fa fa-check"></i> Inheritance: Extending Classes.</li>
                                                <li><i className="fa fa-check"></i> Pointers, Virtual Functions and Polymorphism.</li>
                                                <li><i className="fa fa-check"></i> Managing Console 1/0 Operations.</li>
                                                <li><i className="fa fa-check"></i> Working with Files.</li>
                                                <li><i className="fa fa-check"></i> New Features of ANSI C and C++ Standard.</li>
                                                <li><i className="fa fa-check"></i> Object-Oriented Systems Development.</li>
                                            </ul>
                                        </div> */}
                                        {/* <div className="event-details-speaker">
                                            <h5>Event Speakers</h5>
                                            <Row>
                                                {
                                                    Datas.map((data, i) => (
                                                        <Col lg="3" md="6" sm="6" key={i}>
                                                            <div className="event-speaker-item">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="img-fluid" />
                                                                <div className="img-content text-center">
                                                                    <h6>{data.personName}</h6>
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
                                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.youtube}><i className="fab fa-youtube"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </div> */}
                                        <CourseTab/>   
                                        <CourseModules/>
                                        <div className="pre-nxt-event">
                                            <Row>
                                                <Col md="6">
                                                    <div className="next-prev-item prev-event d-flex">
                                                        <div className="prev-img">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/gallery-03.jpg`} alt="" />
                                                        </div>
                                                        <div className="prev-text">
                                                            <p><Link to={process.env.PUBLIC_URL + "/event-details"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis.</Link></p>
                                                            <span> March 27, 2020</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md="6">
                                                    <div className="next-prev-item next-event d-flex flex-row-reverse text-right">
                                                        <div className="next-img">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/gallery-06.jpg`} alt="" />
                                                        </div>
                                                        <div className="next-text">
                                                            <p><Link to={process.env.PUBLIC_URL + "/event-details"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit Perferendis.</Link></p>
                                                            <span> March 27, 2020</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="3" md="4" sm="12">
                                    <div className="event-details-sidebar">
                                        <Row>
                                            <Col md="12">
                                                <div className="event-sidebar-info">
                                                    <div className="event-sidebar-timer text-center">
                                                        <Timer initialTime={1040 * 970 * 980} direction="backward">
                                                            <p><Timer.Days /><span>Days</span></p>
                                                            <p><Timer.Hours /><span>Hours</span></p>
                                                            <p><Timer.Minutes /><span>Minutes</span></p>
                                                        </Timer>
                                                    </div>
                                                    <ul className="list-unstyled event-info-list">
                                                        <li>Start Date: <span>Sep 21, 2021</span></li>
                                                        <li>Time: <span>10:30am</span></li>
                                                        <li>Seat: <span>50</span></li>
                                                        <li>Place: <span>Bengalore, KA</span></li>
                                                        <li>Organizer: <span>Naresh Payani</span></li>
                                                        <li>Phone: <span>+91 9481110011</span></li>
                                                        <li>Email: <span>info@radar-tech.in</span></li>
                                                        <li>Website: <span>www.radar-tech.in</span></li>
                                                    </ul>
                                                    <Link to={process.env.PUBLIC_URL + "/registration"}> <button type="button" className="buy-btn">Register</button></Link>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <PopularCourse />
                                            </Col>
                                            {/* <Col md="12">
                                                <CourseTag />
                                            </Col> */}
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                                
                    {/* Footer 2 */}
                    <FooterTwo />

                </div>
            </Styles>
        )
    }
}

export default EventDetails