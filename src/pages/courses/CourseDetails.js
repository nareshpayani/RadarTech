import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import ReviewForm from './components/ReviewForm';
import PopularCourse from './components/PopularCourse';
import CourseTag from './components/CourseTag';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { Link } from 'react-router-dom';
import Datas from '../../data/course/filter.json';
import { useParams } from "react-router-dom";
import { isFloat } from '../../helper';
import moment from 'moment'

function CourseDetails() {
    let { id } = useParams();
    const [course, setCourse] = useState({});
    
    useEffect(() => {
        const result = Datas.dataList.filter(course => course.id === id)
        result.length && setCourse(result[0])
    }, []);

    useEffect(() => {
        setStyle()
    }, [course]);

    const setStyle = () => {
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
    }

    const totalTime = (lectures) => {
        return lectures.reduce((a,b) => a + b.time, 0)
    }

    const totalLectures = (parts) => {
        return parts.reduce((a,b) => a + b.lectures.length, 0)
    }
    return (
        <div className="main-wrapper course-details-page" >

            {/* Header 2 */}
            < HeaderTwo />

            {/* Breadcroumb */}
            < BreadcrumbBox title="Course Details" />
            {
                course.id ?
                <Styles>
                    {/* Course Details */}
                    <section className="course-details-area">
                        <Container>
                            <Row>
                                <Col lg="9" md="8" sm="12">
                                    <div className="course-details-top">
                                        <div className="heading">
                                            <h4>{course.courseTitle}</h4>
                                        </div>
                                        <div className="course-top-overview">
                                            <div className="d-flex overviews">
                                                <div className="author">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/man.png`} alt="" />
                                                    <div className="author-name">
                                                        <h6>Author</h6>
                                                        <p>{course.authorName}</p>
                                                    </div>
                                                </div>
                                                <div className="category">
                                                    <h6>Category</h6>
                                                    <p>{course.category}</p>
                                                </div>
                                                <div className="rating">
                                                    <h6>Rating</h6>
                                                    <ul className="list-unstyled list-inline">
                                                        {
                                                            [...Array(parseInt(course.rating || 0 ))].map((data, i) => (<li key={i} className="list-inline-item"><i className="las la-star"></i></li>))
                                                        }
                                                        {
                                                            isFloat(course.rating) ? <li className="list-inline-item"><i className="las la-star-half-alt"></i></li> : ''
                                                        }
                                                        <li className="list-inline-item">({course.rating})</li>
                                                    </ul>
                                                </div>
                                                <div className="price">
                                                    <h6>Price</h6>
                                                    <p>{course.price || 'NA'}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="course-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/${course.imgUrl}`} alt="" className="img-fluid" />
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
                                                            <p>{course.courseDesc}</p>
                                                        </div>
                                                        <div className="course-feature">
                                                            <h5>Course Feature</h5>
                                                            <p>{course.courseFeature.description}</p>
                                                            <ul className="list-unstyled">
                                                                {
                                                                    course.courseFeature.points.map((data,i)=> (<li key={i}>{data}</li>))
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="course-learn">
                                                            <h5>What you'll learn</h5>
                                                            <p>{course.courseObjective.description}</p>
                                                            <ul className="list-unstyled">
                                                                {
                                                                    course.courseObjective.points.map((data,i)=> (<li key={i}>{data}</li>))
                                                                }
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
                                                            <p>{course.content.description}</p>
                                                        </div>
                                                        <div className="course-element">
                                                            <h5>Course Content</h5>
                                                            {
                                                                course.content.parts.map((part, i) => {
                                                                    return <div key={i} className="course-item">
                                                                        <button className="course-button active">{ 'Part' + (i + 1) + ': ' + part.label } <span>{part.length} Lectures - {totalTime(part.lectures)} Min</span></button>
                                                                        <div className="course-content show">
                                                                            <ul className="list-unstyled">
                                                                                {
                                                                                    part.lectures.map((lecture, i) => {
                                                                                        return <li key={i}>
                                                                                            <span className="play-icon"><i className="las la-book"></i> Lecture: {i+1}</span>
                                                                                            <span className="lecture-title">{lecture.heading}</span>
                                                                                            <span className="lecture-duration">{lecture.time}</span>
                                                                                        </li>
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="instructor" className="instructor-tab">
                                                        <h5>Course Instructors</h5>
                                                        <div className="instructor-item">
                                                            <Row>
                                                                <Col md="4">
                                                                    <div className="instructor-img">
                                                                        <img src={process.env.PUBLIC_URL + `/assets/images/${course.author.imgUrl}`} alt="" className="img-fluid" />
                                                                    </div>
                                                                </Col>
                                                                <Col md="8">
                                                                    <div className="instructor-content">   
                                                                        <div className="instructor-box">
                                                                            <div className="top-content d-flex justify-content-between">
                                                                                <div className="instructor-name">
                                                                                    <h6>{course.author.name}</h6>
                                                                                    <p>{course.author.designation}</p>
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
                                                        <li><i className="las la-calendar"></i> Start Date: <span>{moment(course.startDate).format('MMM DD, YYYY')}</span></li>
                                                        <li><i className="las la-clock"></i> Duration: <span>{Math.floor(course.courseDuration / 30)} Months</span></li>
                                                        <li><i className="las la-globe"></i> Language: <span>{course.language}</span></li>
                                                        <li><i className="las la-sort-amount-up"></i> Skill Level: <span>{course.skillLevel}</span></li>
                                                        <li><i className="las la-graduation-cap"></i> Subject: <span>{course.subject}</span></li>
                                                        <li><i className="las la-book"></i> Lectures: <span>{totalLectures(course.content.parts)}</span></li>
                                                        <li><i className="las la-bookmark"></i> Enrolled: <span>{course.enrolled}</span></li>
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
                </Styles> : '...Loadings'
            }

            {/* Footer 2 */}
            <FooterTwo />

        </div >
    )
}

export default CourseDetails