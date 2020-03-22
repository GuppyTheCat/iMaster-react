import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as exp from '../exports';
import './main.css';
import './article.css';


export default class ArticleNew extends Component {
    
    formatBlock(block){
        let content = ''
        switch(block.type){
            case 'p': 
                content = React.createElement('p',null,block.content)
                break;
            case 'img':
                content = React.createElement('div',{className:'text-center'},[
                    React.createElement('img',{src:block.content},null)
                ])
                break;
            case 'h4':
                content = content = React.createElement('h4',null,block.content)
                break;
            case 'ul':
                content = React.createElement('ul',null, block.content.map(item=>{
                    return React.createElement('li',null,item)
                }
                ))
                break;
            case 'ol':
                content = React.createElement('ol',null, block.content.map(item=>{
                    return React.createElement('li',null,item)
                }
                ))
                break;
        }
        return content
    }

    render() {
        const item = exp.articlesItemsNew.filter(item => item.id === this.props.match.params.articleId)[0];

        return ( 
                <>
                    <Helmet>
                        <title> Ремонт электроники в Нижнем Новгороде - iМастер | {item.title} </title> 
                    </Helmet> 
                    <MDBContainer>
                        <MDBContainer className = "navbar-container position-relative">
                            <Navbar/>
                        </MDBContainer>
                    <MDBContainer fluid className = "section" >
                        <MDBRow center >
                            <MDBCol size = "12" md = "10" className = "breadcrumb-container" >
                                <MDBBreadcrumb >
                                    <MDBBreadcrumbItem> 
                                        <Link to = '/articlesnew'> Статьи </Link>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active > {item.name} 
                                    </MDBBreadcrumbItem> 
                                </MDBBreadcrumb > 
                            </MDBCol> 
                            <MDBCol size = "12" md = "10" className = "bg-light article-content text-center" >
                                <h3>{item.title}</h3> 
                                <div className = "text-left">
                                    { item.content.map(block => {
                                        return this.formatBlock(block)
                                    })
                                    } 
                                </div> 
                                <button type = "button" className = "btn btn-custom" onClick = { () => eval("jivo_api.open()")}>
                                    Написать мастеру 
                                </button> 
                            </MDBCol> 
                        </MDBRow> 
                    </MDBContainer> 
                    <Footer/>
                    </MDBContainer> 
                    </>
        );
    }
}