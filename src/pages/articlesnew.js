import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBView, MDBMask, MDBBreadcrumb, MDBBreadcrumbItem  } from "mdbreact";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as exp from '../exports';
import './main.css';
import './articles.css';

export default class ArticlesNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: exp.articlesItemsNew
        }
    }


    render() {
        const { articles } = this.state;

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
                            <MDBRow center>
                                {articles.map((item, index) => {
                                    return (
                                        <MDBCol sm="6" lg="4" xl="3" className="text-center mt-4 d-flex justify-content-center" key={index}>
                                            <MDBCard>
                                                <MDBView hover>
                                                    <Link className="d-flex" to={'/articlesnew/' + item.id}>
                                                        <MDBCardImage className="img-fluid" src={item.img} alt=""/>
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
