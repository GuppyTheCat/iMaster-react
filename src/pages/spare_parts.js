import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBView, MDBMask, MDBBreadcrumb, MDBBreadcrumbItem  } from "mdbreact";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as exp from '../exports';
import './main.css';
import './spare_parts.css';

export default class SpareParts extends Component {

    render() {

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | Запчасти</title>
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
                                        <MDBBreadcrumbItem active>Запчасти</MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow center>
                                
                            </MDBRow>
                        </MDBContainer>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}
