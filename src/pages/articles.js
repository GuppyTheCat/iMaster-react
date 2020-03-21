import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBLink } from "mdbreact";
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';
import './articles.css';

import { Link } from 'react-router-dom';
import * as exp from '../exports';

export default class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: exp.articlesItems
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
                            <MDBRow center>
                                {articles.map((item, index) => {
                                    return (
                                        <MDBCol sm="6" lg="4" xl="3" className="text-center mt-4 d-flex" key={index}>
                                            <Link className="d-flex" to={'/articles/' + item.id}>
                                                <MDBCard>
                                                    <img className="img-fluid" src={item.img} alt="" />
                                                    <MDBCardBody>
                                                        <MDBCardText>{item.name}</MDBCardText>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </Link>
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
