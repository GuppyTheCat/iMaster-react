import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Helmet } from "react-helmet";
import 'simplebar/dist/simplebar.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';
import './article.css';
import * as exp from '../exports';

export default class Services extends Component {

    render() {
        const item = exp.articlesItems.filter(item => item.id === this.props.match.params.articleId)[0];

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | {item.title}</title>
                </Helmet>
                <MDBContainer>
                    <MDBContainer className="navbar-container position-relative">
                        <Navbar />
                    </MDBContainer>
                    <MDBContainer fluid className="section">
                        <MDBRow center>
                            <MDBCol size="12" md="10" className="bg-light article-content text-center">
                                <h3>{item.title}</h3>
                                <div className="text-left" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                    Написать мастеру
                                </button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}
