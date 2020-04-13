import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sparePartsItems } from '../exports';
import './main.css';
import './spare_parts.css';

export default class SpareParts extends Component {

    render() {
        const items = sparePartsItems
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
                            {items.map((item, index) => {
                                return (
                                    <MDBRow center key={index} className='parts-container my-3'>
                                        <MDBCol size='12' classname='mb-5'>
                                            <span className='parts-brand d-inline-block mb-1 text-center'>{item.brand}</span>
                                        </MDBCol>
                                        <MDBCol size='12'>
                                            <div className='parts-block px-3 py-1 mt-2'>
                                            {
                                                item.items.map((part, partIndex) => {
                                                    return (
                                                        <div key={partIndex} className='mt-3 mb-3'>
                                                            <p className='parts-model mb-0'>
                                                                <strong>{part.model}</strong>
                                                            </p>
                                                            <div className='parts-description mt-0 mb-4'>
                                                                <p className='my-0'>
                                                                    <span>
                                                                        {part.description}
                                                                    </span>
                                                                    <span className='parts-price'>
                                                                        {` - ${part.price}р`}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                )
                            })}
                        </MDBContainer>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}
