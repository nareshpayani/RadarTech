import React, { useEffect } from 'react';
import Datas from '../data/course/filter.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/courseFilter.js";
import { isFloat } from '../helper'

function CourseFilter() {
    useEffect(() => {
        const buttons = document.querySelector(".filter-btn-list").children;
        const items = document.querySelector(".filter-items").children;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {

                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove("active");
                }

                this.classList.add("active");
                const target = this.getAttribute("data-target");

                for (let k = 0; k < items.length; k++) {
                    items[k].style.display = "none";

                    if (items[k].getAttribute("data-id") === target) {
                        items[k].style.display = "block";
                    }

                    if (target === "*") {
                        items[k].style.display = "block";
                    }
                }
            })
        }
    });

    return (
        <Styles>
            {/* Course Area */}
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{Datas.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="filter-btns text-center">
                                <ul className="filter-btn-list list-unstyled list inline">
                                    <li data-target="*" className="active list-inline-item">All Courses</li>
                                    <li data-target="emb" className="list-inline-item">Embedded Course</li>
                                    <li data-target="hardware" className="list-inline-item">Hardware</li>
                                    <li data-target="cprogramming" className="list-inline-item">C Programming</li>
                                    <li data-target="python" className="list-inline-item">Python Programming</li>
                                    <li data-target="micro" className="list-inline-item">Micro Controllers</li>
                                </ul>
                            </div>
                            <Row className="filter-items">
                                {
                                    Datas.dataList.map((data, i) => (
                                        <Col lg="4" md="6" key={i} data-id={data.targetId}>
                                            <div className="course-item">
                                                
                                                    <div className="course-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`}}>
                                                        {/* <div className="author-img d-flex">
                                                            <div className="img">
                                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                                            </div>
                                                            <div className="title">
                                                                <p>{data.authorName}</p>
                                                                <span>{data.authorCourses}</span>
                                                            </div>
                                                        </div>
                                                        <div className="course-price">
                                                            <p>{data.price}</p>
                                                        </div> */}
                                                    </div>
                                           
                                                <div className="course-content">
                                                    {/* <Link to={process.env.PUBLIC_URL + data.courseLink}></Link> */}
                                                    <Link to={process.env.PUBLIC_URL + "/course-details/" + data.id}><h6 className="heading">{data.courseTitle}</h6></Link>
                                                    <p className="desc">{data.shortDesc}</p>
                                                    <div className="course-face d-flex justify-content-between">
                                                        <div className="duration">
                                                            <p><i className="las la-clock"></i>{data.courseDuration}</p>
                                                        </div>
                                                        <div className="rating">
                                                            <ul className="list-unstyled list-inline">
                                                                {
                                                                    [...Array(parseInt(data.rating || 0 ))].map((data, i) => (<li key={i} className="list-inline-item"><i className="las la-star"></i></li>))
                                                                }
                                                                {
                                                                    isFloat(data.rating) ? <li className="list-inline-item"><i className="las la-star-half-alt"></i></li> : ''
                                                                }
                                                                <li className="list-inline-item">({data.rating})</li>
                                                            </ul>
                                                        </div>
                                                        <div className="student">
                                                            <p><i className="las la-chair"></i>{data.enrolled}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link to={process.env.PUBLIC_URL + "/course-grid"}>View All Courses</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter
