import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBView, MDBMask, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as exp from '../exports';
import './main.css';
import './articles.css';

export default class Articles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: exp.articlesItems,
            filters: exp.articlesFilters,
            filteredArticles: exp.articlesItems,
            deviceBrand: 'Все',
            deviceType: 'Все'
        }
    }

    setFilters = (e) => {
        const value = e.target.value
        const type = e.target.dataset.type

        this.setState({ [type]: value }, () => { this.filterArticles() })
    }

    filterArticles = () => {
        const { articles, deviceBrand, deviceType } = this.state

        let filteredArticles = []

        for (let article of articles) {
            if (deviceBrand === 'Все' || deviceBrand === article.deviceBrand) {
                if (deviceType === 'Все' || deviceType === article.deviceType) {
                    filteredArticles.push(article)
                }
            }
        }

        this.setState({ filteredArticles })
    }


    render() {
        const { filters, filteredArticles } = this.state

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | Статьи</title>
                </Helmet>
                <MDBContainer>
                    <MDBContainer className="navbar-container position-relative">
                        <Navbar />
                    </MDBContainer>
                    <MDBContainer fluid className="section">
                        <MDBContainer fluid>
                            <MDBRow>
                                <MDBCol>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem active>Статьи</MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                {filters.map((filter, filterIndex) => {
                                    return (
                                        <MDBCol md='6' lg='4' xl='3' key={filterIndex}>
                                            <span className='d-inline-block mb-2 filter-title'>{filter.title}</span>
                                            <select
                                                className="browser-default custom-select mb-2"
                                                value={this.state[filter.title]}
                                                data-type={filter.type}
                                                onChange={e => this.setFilters(e)}
                                            >
                                                {filter.content.map((value, valueIndex) => {
                                                    return (
                                                        <option
                                                            key={valueIndex}
                                                        >
                                                            {value}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                        </MDBCol>
                                    )
                                })}
                            </MDBRow>
                            <MDBRow center>
                                {filteredArticles.map((item, index) => {
                                    return (
                                        <MDBCol sm="6" lg="4" xl="3" className="text-center mt-4 d-flex justify-content-center" key={index}>
                                            <MDBCard>
                                                <MDBView hover>
                                                    <Link className="d-flex" to={'/articles/' + item.id + '/'}>
                                                        <MDBCardImage className="img-fluid" src={item.img} alt="" />
                                                        <MDBMask className="flex-center" overlay="black-light">
                                                            <span className="white-text lead">Читать</span>
                                                        </MDBMask>
                                                    </Link>
                                                </MDBView>
                                                <MDBCardBody>
                                                    <MDBCardText>{item.name}</MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    )
                                })}
                            </MDBRow>
                        </MDBContainer>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}
