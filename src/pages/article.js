import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact"
import { Link, Redirect } from 'react-router-dom'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from 'simple-react-lightbox'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as exp from '../exports'
import './main.css'
import './article.css'


export default class Article extends Component {

    formatBlock(block, index) {
        let content = ''
        switch (block.type) {
            case 'p':
                content = React.createElement('p', { key: index }, block.content)
                break
            case 'img':
                content = React.createElement('div', { className: 'text-center', key: index }, [
                    React.createElement('img', { src: block.content }, null)
                ])
                break
            case 'h4':
                content = content = React.createElement('h4', { key: index }, block.content)
                break
            case 'ul':
                content = React.createElement('ul', { key: index }, block.content.map((item, key) => {
                    return React.createElement('li', { key: key }, item)
                }
                ))
                break
            case 'ol':
                content = React.createElement('ol', { key: index }, block.content.map((item, key) => {
                    return React.createElement('li', { key: key }, item)
                }
                ))
                break
            case 'card':
                content = React.createElement('div', { className: 'card', key: index }, function () {
                    let item = block.content,
                        cardContent = []
                    if (item.header) {
                        cardContent.push(React.createElement('div', { className: 'card-header', key: 0 }, block.content.header))
                    }
                    cardContent.push(React.createElement('div', { className: 'card-body', key: 1 }, block.content.body))
                    return cardContent
                }()
                )
                break
        }
        return content
    }

    render() {
        const item = exp.articlesItems.filter(item => item.id === this.props.match.params.articleId)[0]

        return (
            item ?
                <>
                    <Helmet>
                        <title> Ремонт электроники в Нижнем Новгороде - iМастер | {item.title} </title>
                    </Helmet>
                    <MDBContainer>
                        <MDBContainer className="navbar-container position-relative">
                            <Navbar />
                        </MDBContainer>
                        <MDBContainer fluid className="section" >
                            <MDBRow center >
                                <MDBCol size="12" md="10" className="breadcrumb-container" >
                                    <MDBBreadcrumb >
                                        <MDBBreadcrumbItem>
                                            <Link to='/articles'> Статьи </Link>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem active > {item.name}
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb >
                                </MDBCol>
                                <MDBCol size="12" md="10" className="bg-light article-content text-center" >
                                    <SimpleReactLightbox>
                                        <SRLWrapper>
                                            <h3>{item.title}</h3>
                                            <div className="text-left">
                                                {
                                                    item.content.map((block, index) => {
                                                        return this.formatBlock(block, index)
                                                    })
                                                }
                                            </div>
                                            <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                                Написать мастеру
                                            </button>
                                        </SRLWrapper>
                                    </SimpleReactLightbox>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <Footer />
                    </MDBContainer>

                </>
                : <Redirect to="/404" />
        )
    }
}