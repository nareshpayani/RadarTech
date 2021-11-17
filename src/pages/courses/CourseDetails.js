import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { Link } from 'react-router-dom';

function CourseDetails() {
    useEffect(() => {
        const courseButton = document.querySelectorAll(".course-button");
        courseButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "course-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "course-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < HeaderTwo />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Course Details" />

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>
                            <Col lg="9" md="8" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                        <h4>C Programming For Beginners - Master the C Language</h4>
                                    </div>
                                    <div className="course-top-overview">
                                        <div className="d-flex overviews">
                                            <div className="author">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/man.png`} alt="" />
                                                <div className="author-name">
                                                    <h6>Author</h6>
                                                    <p>Naresh Payani</p>
                                                </div>
                                            </div>
                                            <div className="category">
                                                <h6>Category</h6>
                                                <p>Programming</p>
                                            </div>
                                            <div className="rating">
                                                <h6>Rating</h6>
                                                <ul className="list-unstyled list-inline">
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                    </li>
                                                    <li className="list-inline-item">(4.5)</li>
                                                </ul>
                                            </div>
                                            <div className="price">
                                                <h6>Price</h6>
                                                <p>NA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details-banner">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/cprogramming.jpeg`} alt="" className="img-fluid" />
                                    </div>
                                    <div className="course-tab-list">
                                        <Tab.Container defaultActiveKey="overview">
                                            <Nav className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="overview">Overview</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="curriculum">Curriculum</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor">Instructors</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="review">Reviews</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="overview" className="overview-tab">
                                                    <div className="course-desc">
                                                        <h5>Course Description</h5>
                                                        <p>C  programming language developed by AT & T’s Bell Laboratories of USA in 1972.C is simple ,reliable and no other programming language beats C in performance and speed of execution.C is used in programming desktop applications, compilers, and  even hardware devices.Operating system like windows and UNIX is still written in C.C is one of the most important of all programming languages.Without learning C programming,it becomes difficult to learn other language like C++,Java,PHP etc.This course will teach you fundamentals of C programming from ground up.By the end of  this course you will have a deep understanding of the C Programming language.</p>
                                                    </div>
                                                    <div className="course-feature">
                                                        <h5>Course Feature</h5>
                                                        <p>The core features of a programming language describe its ability and uniqueness and how beneficial it can be in developing a website or software. Listed below are some of the significant features of C language.</p>
                                                        <ul className="list-unstyled">
                                                            <li>Simple and Efficient.</li>
                                                            <li> Easy to learn.</li>
                                                            <li> Structured language.</li>
                                                            <li> It produces efficient programs.</li>
                                                            <li>It can handle low-level activities.</li>
                                                            <li> It can be compiled on a variety of computer platforms.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="course-learn">
                                                        <h5>What you'll learn</h5>
                                                        <p>You will learn how to write high quality code and become an excellent problem solver.  This course does not just present how to code in the C programming language, but, also includes all the details on "why" you are doing the things you are doing.  At the end of this course, you will fully understand the concepts of the C Programming language.</p>
                                                        <ul className="list-unstyled">
                                                            <li>Understand the fundamentals of the C Programming Language.</li>
                                                            <li>Create your first C Application.</li>
                                                            <li>Understand variables and the different data types.</li>
                                                            <li>Make yourself more marketable for entry level programming positions.</li>

                                                            <li>Apply for real-time programming positions.</li>
                                                            <li>Learn how to write high-quality code.</li>
                                                           
                                                        </ul>
                                                    </div>
                                                    <div className="course-share">
                                                        <h5>Share This Course</h5>
                                                        <ul className="social list-unstyled list-inline">
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="curriculum" className="curriculum-tab">
                                                    <div className="course-curriculum">
                                                        <h5>Course Curriculum</h5>
                                                        <p>This is perfect course for beginners who is new to programming and have never coded before. With this course you can learn fundamentals of C programming.</p>
                                                    </div>
                                                    <div className="course-element">
                                                        <h5>Course Content</h5>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 1: Introduction of C Programming <span>05 Lectures - 30 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">The C Language and its Advantages</span>
                                                                        {/* <span className="lecture-duration">02:36</span> */}
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Writing C Programs</span>
                                                                      
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">Building an Executable Version of a C Program</span>
                                                                      
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 04</span>
                                                                        <span className="lecture-title">Debugging a C Program</span>
                                                                        
                                                                    </li>

                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 05</span>
                                                                        <span className="lecture-title">Examining and Running a C Application Program</span>
                                                                        
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 2: Data Types and Variables <span>04 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">Data Types</span>
                                                                        
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Operands, Operators, and Arithmetic Expressions</span>
                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">Input/Output Management</span>
                                                                      
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 04</span>
                                                                        <span className="lecture-title">Formatted Input Function</span>
                                                                      
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="course-item">
                                                            <button className="course-button active">Part 3: Control-Flow Statements <span>03 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">The Control-Flow Program Statements</span>
                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Looping Structures and Conditional Statement</span>
                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">The Data-checking process</span>
                                                                        
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="course-item">
                                                            <button className="course-button active">Part 4: Modular Programming with Functions <span>05 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">The C Function</span>                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Passing Data to Functions</span>                                                          
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">Passing an Address to Modify a Value in Memory</span>                                                                       
                                                                    </li>

                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 04</span>
                                                                        <span className="lecture-title">Using Functions in the Checkbook Program</span>
                                                                    </li>

                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 05</span>
                                                                        <span className="lecture-title">C Standard Library Functions</span>                                                                       
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="course-item">
                                                            <button className="course-button active">Part 5: Arrays, Pointers, and Strings <span>02 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">Arrays , Pointers , Strings</span>                                  
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Using Arrays, Strings, and Pointers in the Checkbook Program</span>                                                                     
                                                                    </li>                           
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="course-item">
                                                            <button className="course-button active">Part 6: Structures <span>04 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">Structures</span>
                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Arrays of Structures</span>
                                                                       
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 03</span>
                                                                        <span className="lecture-title">Passing Structures to Functions</span>                                                                 
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 04</span>
                                                                        <span className="lecture-title">Nesting Structures</span>                                                                 
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="course-item">
                                                            <button className="course-button active">Part 7: File Input/Output <span>03 Lectures - 60 Min</span></button>
                                                            <div className="course-content show">
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 01</span>
                                                                        <span className="lecture-title">Command-line Arguments</span>                                                                     
                                                                    </li>
                                                                    <li>
                                                                        <span className="play-icon"><i className="las la-book"></i> Lecture: 02</span>
                                                                        <span className="lecture-title">Combining Command-line</span>                                                                     
                                                                    </li>
                                                        
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                    <h5>Course Instructors</h5>
                                                    <div className="instructor-item">
                                                        <Row>
                                                            <Col md="4">
                                                                <div className="instructor-img">
                                                                    <img src={process.env.PUBLIC_URL + `/assets/images/man.png`} alt="" className="img-fluid" />
                                                                </div>
                                                            </Col>
                                                            <Col md="8">
                                                                <div className="instructor-content">   
                                                                    <div className="instructor-box">
                                                                        <div className="top-content d-flex justify-content-between">
                                                                            <div className="instructor-name">
                                                                                <h6>Naresh Payani</h6>
                                                                                <p>Senior Lecturer</p>
                                                                            </div>
                                                                            <div className="instructor-social">
                                                                                <ul className="social list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="instructor-desk">
                                                                            <p>C Programming Trainer.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review" className="review-tab">
                                                    <Row>
                                                        <Col md="12">
                                                            <div className="review-comments">
                                                                <h5>Course Reviews</h5>
                                                                <div className="comment-box d-flex">
                                                                    <div className="comment-image">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/user2.png`} alt="" />
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        <div className="content-title d-flex justify-content-between">
                                                                            <div className="comment-writer">
                                                                                <h6>Naveen Kumar</h6>
                                                                                <p>Mar 26, 2020 | 06:30pm</p>
                                                                                <ul className="list-unstyled list-inline">
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                                    <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                                                    <li className="list-inline-item">(4.5)</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="reply-btn">
                                                                                <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="comment-desc">
                                                                            <p>Thanks for the great training and support. I don’t know anything about coding and syntax while joining here for the C C++ course. My trainer really supported and helped me slowly as per my understanding level. I’m pretty good at coding nowadays. Thank you sir.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                              
                                                            </div>
                                                            <div className="review-form">
                                                                <h5>Submit Review</h5>
                                                                <ReviewForm />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="4" sm="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="12">
                                            <div className="course-details-feature">
                                                <h5 className="title">Course Details</h5>
                                                <ul className="list-unstyled feature-list">
                                                    <li><i className="las la-calendar"></i> Start Date: <span>Nov 21, 2020</span></li>
                                                    <li><i className="las la-clock"></i> Duration: <span>3 Months</span></li>
                                                    <li><i className="las la-globe"></i> Language: <span>English</span></li>
                                                    <li><i className="las la-sort-amount-up"></i> Skill Level: <span>Beginner</span></li>
                                                    <li><i className="las la-graduation-cap"></i> Subject: <span>Web</span></li>
                                                    <li><i className="las la-book"></i> Lectures: <span>51</span></li>
                                                    <li><i className="las la-bookmark"></i> Enrolled: <span>36</span></li>
                                                    {/* <li><i className="las la-certificate"></i> Certification: <span>Yes</span></li> */}
                                                </ul>
                                                <Link to={process.env.PUBLIC_URL + "/registration"}><button type="button" className="enroll-btn">Enroll Course</button></Link>
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
            </Styles>

            {/* Footer 2 */}
            <FooterTwo />

        </div >
    )
}

export default CourseDetails