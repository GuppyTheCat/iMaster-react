import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';
import './article.css';


export default class NotFound extends Component {

    render() {

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | 404 - Страница не найдена</title>
                </Helmet>
                <MDBContainer style={{ minWidth: '100vw', minHeight: '100vh' }}>
                    <MDBContainer className="navbar-container position-relative">
                        <Navbar />
                    </MDBContainer>
                    <MDBContainer fluid className="my-auto">
                        <MDBRow>
                            <MDBCol size="12" className="text-center">
                                <MDBTypography tag="h1">
                                    404 <br/> Страница не найдена
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}
