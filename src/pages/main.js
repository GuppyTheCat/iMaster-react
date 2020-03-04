import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem } from "mdbreact";
import TrackVisibility from 'react-on-screen';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import './main.css';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapseID: ""
        }
    }

    navbarToggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    setAnimationType(index) {
        let screenWidth = window.innerWidth
        let type

        if (screenWidth < 992) {
            type = index % 2 ? 'fadeInRight' : 'fadeInLeft'
        }

        else {
            switch (index) {
                case 0:
                case 3: type = 'fadeInLeft'
                    break
                case 2:
                case 5: type = 'fadeInRight'
                    break
                case 1: type = 'fadeInDown'
                    break
                case 4: type = 'fadeInUp'
                    break
                default: break
            }
        }

        return type;
    }


    render() {
        const sliderSettings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2500,
                    dots: false
                }
            }
            ]
        };

        const electronicSliderItems = [
            {
                title: 'Телефоны',
                classes: 'fa fa-mobile-alt'
            },
            {
                title: 'Планшеты',
                classes: 'fas fa-tablet-alt'
            },
            {
                title: 'Компьютеры',
                classes: 'fa fa-desktop'
            },
            {
                title: 'Ноутбуки',
                classes: 'fa fa-laptop'
            },
            {
                title: 'Телевизоры',
                classes: 'fa fa-tv'
            },
            {
                title: 'Игровые консоли',
                classes: 'fas fa-game-console-handheld'
            },
            {
                title: 'Фотоаппараты',
                classes: 'fa fa-camera'
            },
            {
                title: 'Видеокамеры',
                classes: 'fa fa-video'
            },
            {
                title: 'Плееры',
                classes: 'fa fa-mp3-player'
            },
            {
                title: 'Навигаторы',
                classes: 'fa fa-location-arrow'
            },
            {
                title: 'Пауэрбанки',
                classes: 'fa fa-battery-three-quarters'
            },
            {
                title: 'Вейпы',
                classes: 'fa fa-smoking'
            },
            {
                title: 'Электроинструмент',
                classes: 'fa fa-tools'
            },
            {
                title: 'ЭБУ',
                classes: 'fa fa-car-mechanic'
            }
        ]

        const prosItems = [
            {
                title: 'Бесплатная диагностика',
                classes: 'far fa-piggy-bank'
            },
            {
                title: 'Бесплатная консультация по телефону или в чате на сайте',
                classes: 'far fa-comment'
            },
            {
                title: 'Бесплатный выезд домой или в офис *',
                classes: 'far fa-car'
            },
            {
                title: 'Использую оригинальные запчасти',
                classes: 'far fa-microchip'
            },
            {
                title: 'Работаю круглосуточно 7 дней в неделю',
                classes: 'far fa-history'
            },
            {
                title: 'Подтверждаю качества работы гарантией',
                classes: 'far fa-check'
            }
        ]

        return (
            <>
                <MDBContainer id="main" fluid>
                    <MDBContainer className="h-100">
                        <MDBRow className="h-100">
                            <MDBCol>
                                <MDBNavbar dark expand="md" className="mt-3">
                                    <MDBNavbarBrand className="align-middle">
                                        <table>
                                            <tr>
                                                <td>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                        <rect x="31" y="50" width="2" height="4" />
                                                        <rect x="22" y="50" width="7" height="2" />
                                                        <path
                                                            d="M56,62V48.41406L57.12109,47.293A2.98152,2.98152,0,0,0,58,45.17188V45a3.00328,3.00328,0,0,0-3-3h-.17188a2.98152,2.98152,0,0,0-2.12109.87891L50.87891,44.707a1.00687,1.00687,0,0,1-.707.293H50a1.00067,1.00067,0,0,1-1-1v-.17188a1.00687,1.00687,0,0,1,.293-.707L51.12109,41.293A2.98152,2.98152,0,0,0,52,39.17188V39a2.99348,2.99348,0,0,0-2.7038-2.97009l-8.40844-4.20417a12.86647,12.86647,0,0,0,2.64392-4.97338l2.81012-1.40509A2.98517,2.98517,0,0,0,48,22.76367V21a3.00328,3.00328,0,0,0-3-3H44V13A11.01245,11.01245,0,0,0,33,2H31A11.01245,11.01245,0,0,0,20,13v5H19a3.00328,3.00328,0,0,0-3,3v1.76367a2.98517,2.98517,0,0,0,1.6582,2.6836l2.81018,1.40509a12.8669,12.8669,0,0,0,2.64392,4.97338L14.08105,36.3418A10.9376,10.9376,0,0,0,8,46.18066V62ZM38.41406,60l8.707-8.707a1.00687,1.00687,0,0,1,.707-.293h4.34376A2.96842,2.96842,0,0,0,54,50.36194V60ZM50,39v.17188a1.00687,1.00687,0,0,1-.293.707L47.87891,41.707A2.98152,2.98152,0,0,0,47,43.82812V44a3.00328,3.00328,0,0,0,3,3h.17188a2.98152,2.98152,0,0,0,2.12109-.87891L54.12109,44.293a1.00687,1.00687,0,0,1,.707-.293H55a1.00067,1.00067,0,0,1,1,1v.17188a1.00687,1.00687,0,0,1-.293.707L52.87891,48.707a1.00687,1.00687,0,0,1-.707.293H47.82812a2.98152,2.98152,0,0,0-2.12109.87891l-9.793,9.793a1.12143,1.12143,0,0,1-1.58594-1.58594l9.793-9.793A2.98152,2.98152,0,0,0,45,46.17188V41.82812a1.00687,1.00687,0,0,1,.293-.707L48.12109,38.293a1.00687,1.00687,0,0,1,.707-.293H49A1.00067,1.00067,0,0,1,50,39ZM34.96881,38l-1.04809-1.25781a5.93641,5.93641,0,0,0,1.301-.60645l2.75781-1.75586a13.15208,13.15208,0,0,0,1.42761-1.05816l2.68348,1.34173L37.01855,40.46,35,38.03741V38ZM31,38.7627l1-1.19989,1,1.19989V46H31ZM29,38v.03741L26.98145,40.46l-5.072-5.79639,2.68342-1.34185a13.15208,13.15208,0,0,0,1.42761,1.05816l2.75781,1.75586a5.93641,5.93641,0,0,0,1.301.60645L29.03119,38ZM45,20a1.00067,1.00067,0,0,1,1,1v1.76367a.9936.9936,0,0,1-.55273.89453l-1.51014.75507c.02533-.33264.06287-.66278.06287-1.00018V20ZM31,4h2a9.00984,9.00984,0,0,1,9,9H22A9.00984,9.00984,0,0,1,31,4Zm9.91937,11L39.4209,16.874A2.98841,2.98841,0,0,1,37.07715,18H26.92285a2.985,2.985,0,0,1-2.34277-1.126L23.08105,15ZM18.55273,23.6582A.9936.9936,0,0,1,18,22.76367V21a1.00067,1.00067,0,0,1,1-1h1v3.41309c0,.3374.03754.66754.06287,1.00018ZM22,16.85107l1.01855,1.273A4.97819,4.97819,0,0,0,26.92285,20h10.1543a4.98152,4.98152,0,0,0,3.90527-1.876L42,16.85187v6.56122a10.945,10.945,0,0,1-5.09473,9.27929l-2.75781,1.75586a4.015,4.015,0,0,1-4.29492,0l-2.75781-1.75586A10.945,10.945,0,0,1,22,23.41309ZM10,46.18066a8.9482,8.9482,0,0,1,4.97559-8.0498l5.08508-2.54279,6.95788,7.952L29,41.16254V48h6V41.16254L36.98145,43.54l6.958-7.95215,2.70575,1.35284L43.87891,39.707A2.98152,2.98152,0,0,0,43,41.82812v4.34376a1.00687,1.00687,0,0,1-.293.707l-9.793,9.793A3.14144,3.14144,0,0,0,32,58.87891,3.09124,3.09124,0,0,0,32.217,60H20V49H18V60H10Z" />
                                                    </svg>
                                                </td>
                                                <td><span>iМастер</span></td>
                                            </tr>
                                        </table>
                                    </MDBNavbarBrand>
                                    <MDBNavbarToggler onClick={this.navbarToggleCollapse("navbarCollapse")} />
                                    <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                                        <MDBNavbarNav right className="mr-0 ml-auto">
                                            <MDBNavItem className="mr-4">
                                                <a className="nav-link middleHover" href="#price">Прайс-лист</a>
                                            </MDBNavItem>
                                            <MDBNavItem className="mr-4">
                                                <a className="nav-link middleHover" href="#footer">Контакты</a>
                                            </MDBNavItem>
                                            <MDBNavItem className="navbar-text navbar-phone mx-0">
                                                <a className="navbar-phone-link middleHover middleHover_siteColor"
                                                    href="tel:+7-953-553-0614">+7 (953) 553-06-14</a>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBNavbar>
                                <MDBContainer fluid className="main-description h-100">
                                    <MDBRow className="h-100">
                                        <MDBCol className="col-lg-8 col-12 my-auto">
                                            <h1>
                                                ПОЧИНЮ<br />АБСОЛЮТНО ВСЁ
                                        </h1>
                                            <p>
                                                Cрочный ремонт электронных устройств любой сложности. Кратчайшие сроки исполнения и
                                                самые
                                                выгодные цены на ремонт, а также постгарантийное обслуживание устройств.
                                        </p>
                                            <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                                Оставить заявку
                                        </button>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer fluid id="electronics" className="section bg-light text-center">
                    <h2>
                        Ремонтирую всё!
                    </h2>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <TrackVisibility once>
                                    {({ isVisible }) => (
                                        <Slider {...sliderSettings} className={'electronics-slider animated ' + (isVisible ? 'fadeInRight' : '')}>
                                            {
                                                electronicSliderItems.map((item, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={
                                                                'electronics-card' +
                                                                (index === 0 ? ' track' : '')
                                                            }>
                                                            <table>
                                                                <tr>
                                                                    <td><i className={item.classes}></i></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span>{item.title}</span></td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    )}
                                </TrackVisibility>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer id="gap1" fluid className="section bg-dark text-center">
                    <MDBContainer>
                        <MDBRow className="align-items-center">
                            <MDBCol size="12" md="8">
                                <p>Я более 8 лет занимаюсь ремонтом мобильной электроники. <br />Если вы ищете недорогой и
                                    качественный сервис,<br /> то вы попали точно по адресу.<br /> Произвожу надежный и быстрый ремонт любой сложности.<br />
                                    Часто клиенты обращаются с техникой,<br /> с которой готовы были проститься.<br /> Цены в крупных СЦ не радуют ?<br />
                                    А гарантий на выполненный ремонт нет?<br /> Даю гарантию на аппараты с попаданием влаги в устройство<br />
                                    и беру на себя ответственность за каждое действие<br /> с вашим любимым девайсом!<br />
                                    Не стесняйтесь задавать вопросы!<br />Окажу помощь каждому клиенту.
                                </p>
                            </MDBCol>
                            <MDBCol className="d-none d-md-block" md="4">
                                <img src="img/iphone.png" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer id="pros" fluid className="section bg-light text-center">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="12">
                                <h2>
                                    Преимущества ремонта в iМастер
                                </h2>
                            </MDBCol>
                            {
                                prosItems.map((item, index) => {
                                    return (
                                        <MDBCol key={index} size="12" lg="4" sm="6" className='pros-card'>
                                            <TrackVisibility once>
                                                {({ isVisible }) => (
                                                    <div className={'pros-card-content animated ' + (isVisible ? this.setAnimationType(index) : '')}>
                                                        <table>
                                                            <tr>
                                                                <td><i className={item.classes}></i></td>
                                                            </tr>
                                                            <tr>
                                                                <td><span>{item.title}</span></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                )}
                                            </TrackVisibility>
                                        </MDBCol>
                                    )
                                })
                            }
                            <MDBCol size="12" className="mt-3 star-message">
                                <span>* После 22:00 стоимость выезда - 300 руб.</span>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </>
        );
    }
}

export default Main;