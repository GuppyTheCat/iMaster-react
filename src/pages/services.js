import React, { Component } from 'react';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { HashLink as Link } from 'react-router-hash-link';

class Services extends Component {
    render() {
        return (
            <>
                <h1>Services Page</h1>
                <MDBContainer fluid>
                    <MDBRow className="align-items-center">
                        <MDBCol size="12">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/#price">Price</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </>
        );
    }
}

export default Services;