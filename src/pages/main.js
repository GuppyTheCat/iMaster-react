import React, { Component } from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBNavbarNav, MDBNavItem, MDBListGroup, MDBListGroupItem,
    MDBTabContent, MDBTabPane
} from "mdbreact";
import { HashLink as Link } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import './main.css';


import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collapseID: "",
            activeItem: 1
        }
    }

    navbarToggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
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
        const sliderElectronicsSettings = {
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

        const sliderProblemsSettings = {
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

        const problemsItems = [
            {
                title: 'Попала вода',
                img: 'img/problems/problem1.jpg',
                alt: ''
            },
            {
                title: 'Разбился экран',
                img: 'img/problems/problem2.jpg',
                alt: ''
            },
            {
                title: 'Не работает динамик',
                img: 'img/problems/problem3.jpg',
                alt: ''
            },
            {
                title: 'Плохой сигнал',
                img: 'img/problems/problem4.jpg',
                alt: ''
            },
            {
                title: 'Не работают кнопки',
                img: 'img/problems/problem5.jpg',
                alt: ''
            },
            {
                title: 'Садится аккумулятор',
                img: 'img/problems/problem6.jpg',
                alt: ''
            }
        ]

        const priceItems = [
            {
                title: 'Телефоны',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена сим холдера', price: '790' },
                    { name: 'Ремонт шлейфа платы', price: '690' },
                    { name: 'Замена тачскрина', price: '890' },
                    { name: 'Замена аккумулятора', price: '90' },
                    { name: 'Замена вибромотора', price: '490' },
                    { name: 'Ремонт цепи питания материнской платы', price: '2 790' },
                    { name: 'Замена крышки', price: '790' },
                    { name: 'Разбор', price: '590' },
                    { name: 'Замена Wi-Fi', price: '490' },
                    { name: 'Замена камеры', price: '590' },
                    { name: 'Замена платы GPS', price: '690' },
                    { name: 'Замена слухового динамика', price: '490' },
                    { name: 'Замена контроллера платы', price: '1 190' },
                    { name: 'Замена кнопки включения', price: '790' },
                    { name: 'Замена разъема HDMI', price: '590' },
                    { name: 'Замена микрофона', price: '490' },
                    { name: 'Замена системной платы', price: '1 290' },
                    { name: 'Чистка', price: '1 090' },
                    { name: 'Ремонт корпуса', price: '890' },
                    { name: 'Замена USB', price: '590' },
                    { name: 'Замена гнезда питания', price: '790' }]
            },
            {
                title: 'Планшеты',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена платы', price: '1 290' },
                    { name: 'Замена гнезда питания', price: '790' },
                    { name: 'Полная разборка', price: '590' },
                    { name: 'Замена мультиконтроллера', price: '1 190' },
                    { name: 'Замена шлейфа платы', price: '690' },
                    { name: 'Ремонт HDMI', price: '590' },
                    { name: 'Замена модуля дисплея', price: '890' },
                    { name: 'Ремонт сим лотка', price: '790' },
                    { name: 'Замена встроенной камеры', price: '590' },
                    { name: 'Замена порта USB', price: '590' },
                    { name: 'Замена вибро', price: '490' },
                    { name: 'Восстановление корпуса', price: '890' },
                    { name: 'Замена АКБ', price: '90' },
                    { name: 'Замена элементов цепи питания', price: '2 790' },
                    { name: 'Замена кнопки включения', price: '790' },
                    { name: 'Ремонт встроенного микрофона', price: '490' },
                    { name: 'Замена слухового динамика', price: '490' },
                    { name: 'Замена заднего стекла', price: '790' },
                    { name: 'Замена WiFi', price: '490' },
                    { name: 'Чистка', price: '1 090' },
                    { name: 'Замена модуля GPS', price: '690' }]
            },
            {
                title: 'Компьютеры',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Установка Windows, Linux, Mac OS', price: 'От 500' },
                    { name: 'Восстановление работоспособности Windows(с сохранением всех настроек и приложений)', price: 'От 1000' },
                    { name: 'Установка антивируса', price: 'От 200' },
                    { name: 'Настройка Wi-Fi', price: 'От 350' },
                    { name: 'Установка Драйвера', price: 'От 200' },
                    { name: 'Установка Утилиты', price: '200' },
                    { name: 'Установка Игры', price: '200' },
                    { name: 'Тестирование Wi-Fi соединения', price: '250' },
                    { name: 'Установка точки доступа', price: 'От 450' },
                    { name: 'УНастройка роутера', price: 'От 350' },
                    { name: 'Подключение сетевого принтера', price: 'От 500' },
                    { name: 'Настройка локальной сети', price: '500' },
                    { name: 'Обнаружение и удаление вирусов', price: 'От 500' },
                    { name: 'Восстановление информации с жесткого диска', price: 'От 800' },
                    { name: 'Восстановление информации с флэшек', price: 'От 500' },
                    { name: 'Разбивка жесткого диска на разделы', price: 'От 300' },
                    { name: 'Сборка компьютера под заказ (Цена-Качество)', price: '1000' },
                    { name: 'Компонентный ремонт материнской платы', price: 'От 800' },
                    { name: 'Компонентный ремонт видеокарты ', price: 'От 1000' },
                    { name: 'Настройка интернет USB-модем ', price: '500' },
                    { name: 'Замена USB, аудио разъемов ', price: 'От 1000' },
                    { name: 'Замена жесткого диска ', price: '300' },
                    { name: 'Замена оперативной памяти ', price: '300' },
                    { name: 'Замена элемента питания BIOS ', price: '350' },
                    { name: 'Ремонт компьютера ', price: 'От 500' },
                    { name: 'Ремонт монитора ', price: 'От 1000' },
                    { name: 'Клонирование HDD ', price: 'От 500' },
                    { name: 'Установка комплекса : Операционная система+драйвера+базовый пакет Мультимедии ', price: '1200' },
                    { name: 'Сбор/разбор ', price: 'От 300' }
                ]
            },
            {
                title: 'Ноутбуки',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Установка Windows, Linux, Mac OS', price: 'От 500' },
                    { name: 'Восстановление работоспособности Windows(с сохранением всех настроек и приложений)', price: 'От 1000' },
                    { name: 'Установка антивируса', price: 'От 200' },
                    { name: 'Настройка Wi-Fi', price: 'От 350' },
                    { name: 'Установка драйвера', price: 'От 200' },
                    { name: 'Установка утилиты', price: '200' },
                    { name: 'Установка игры', price: '200' },
                    { name: 'Тестирование Wi-Fi соединения ', price: '250' },
                    { name: 'Установка точки доступа', price: 'От 450' },
                    { name: 'Настройка роутера', price: 'От 350' },
                    { name: 'Подключение сетевого принтера', price: 'От 500' },
                    { name: 'Настройка локальной сети', price: '500' },
                    { name: 'Обнаружение и удаление вирусов', price: 'От 500' },
                    { name: 'Восстановление информации с жесткого диска', price: 'От 800' },
                    { name: 'Восстановление информации с флэшек', price: 'От 500' },
                    { name: 'Разбивка жесткого диска на разделы', price: 'От 300' },
                    { name: 'Настройка интернет USB-модем', price: '500' },
                    { name: 'Клонирование HDD', price: 'От 500' },
                    { name: 'Установка комплекса : Операционная система + драйвера + базовый пакет мультимедии ', price: '1200' },
                    { name: 'Сбор/разбор ', price: 'От 500' },
                    { name: 'Замена DVD привода ', price: 'От 500' },
                    { name: 'Замена Wi-Fi модуля ', price: 'От 500' },
                    { name: 'Замена аккумуляторной батареи (встроенной) ', price: 'От 800' },
                    { name: 'Замена антенны ', price: 'От 800' },
                    { name: 'Замена верхней крышки ', price: 'От 800' },
                    { name: 'Замена петли ', price: 'От 800' },
                    { name: 'Замена динамика ', price: 'От 800' },
                    { name: 'Замена жесткого диска ', price: '500' },
                    { name: 'Замена камеры ', price: 'От 1000' },
                    { name: 'Замена клавиатуры ', price: 'От 800' },
                    { name: 'Замена кнопки включения ', price: 'От 1000' },
                    { name: 'Замена коннектора (любого) на материнской плате ', price: 'От 1000' },
                    { name: 'Замена корпуса ', price: 'От 1000' },
                    { name: 'Замена кулера ', price: 'От 800' },
                    { name: 'Замена материнской платы ', price: 'От 1000' },
                    { name: 'Замена матрицы ', price: 'От 800' },
                    { name: 'Замена микрофона ', price: '1000' },
                    { name: 'Замена разьема USB ', price: '800' },
                    { name: 'Замена разьема питания ', price: 'От 800' },
                    { name: 'Замена сетевой карты ', price: 'От 600' },
                    { name: 'Замена тачпада ', price: 'От 1000' },
                    { name: 'Замена термопасты ', price: 'От 800' },
                    { name: 'Замена шлейфа матрицы ', price: 'От 1000' },
                    { name: 'Замена видеочипа ', price: 'От 2000' },
                    { name: 'Замена мульти контроллера ', price: 'От 2000' },
                    { name: 'Замена чипсета (северного и южного мостов) ', price: 'От 2000' },
                    { name: 'Замена/ремонт средней части корпуса ', price: 'От 1500' },
                    { name: 'Ремонт Wi-Fi модуля ', price: 'От 1000' },
                    { name: 'Ремонт видеокарты ', price: 'От 1000' },
                    { name: 'Ремонт материнской платы ', price: '800' },
                    { name: 'Ремонт разъема зарядки/USB разъема ', price: 'От 800' },
                    { name: 'Ремонт сетевой карты ', price: 'От 1000' },
                    { name: 'Чистка динамика/микрофона ', price: 'От 1000' },
                    { name: 'Чистка материнской платы ультразвуковая ', price: 'От 1800' },
                    { name: 'Чистка разъема питания/USB разъема ', price: 'От 600' },
                    { name: 'Чистка системы охлаждения ', price: 'От 1000' }
                ]
            },
            {
                title: 'Телевизоры',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена матрицы ', price: 'От 900' },
                    { name: 'Восстановление после попадания жидкостью ', price: 'От 900' },
                    { name: 'Ремонт подсветки дисплея ', price: 'От 900' },
                    { name: 'Замена TV-тюнера ', price: 'От 800' },
                    { name: 'Ремонт / замена шлейфа экрана ', price: 'От 800' },
                    { name: 'Замена системной платы ', price: 'От 400' },
                    { name: 'Восстановления цепей питания ', price: 'От 800' },
                    { name: 'Замена кнопок ', price: 'От 600' },
                    { name: 'Замена блока питания ', price: 'От 500' },
                    { name: 'Замена HDMI ', price: 'От 800' },
                    { name: 'Замена антенного разъема ', price: 'От 700' },
                    { name: 'Восстановление ПО (прошивка) ', price: 'От 900' },
                    { name: 'Замена динамиков (спикеров) телевизора ', price: 'От 800' },
                    { name: 'Сбор/разбор ', price: 'От 300' }]
            },
            {
                title: 'Игровые консоли',
                services: [
                    { name: 'Название услуги', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена блока питания консоли', price: '1490' },
                    { name: 'Ремонт привода Bluray устройства', price: '1490' },
                    { name: 'Замена твердого накопителя HDD', price: '1190' },
                    { name: 'Чистка системы охлаждения', price: '1190' },
                    { name: 'Замена материнской платы', price: '1990' },
                    { name: 'Замена видеочипа, чипа северного или южного моста', price: '1490' },
                    { name: 'Ремонт разъема HDMI', price: '1190' },
                    { name: 'Обновление программного обеспечения', price: '790' }]
            },
            {
                title: 'Фото/видеотехника',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена дисплея видеокамеры ', price: '800' },
                    { name: 'Ремонт объектива видеокамеры ', price: '2500-4500' },
                    { name: 'Ремонт механизмов видеокамеры от ', price: '1300' },
                    { name: 'Ремонт ЛПМ ', price: '1100-2400' },
                    { name: 'Ремонт контроллера ', price: '1900-2600' },
                    { name: 'Ремонт привода DVD ', price: '2600' },
                    { name: 'Замена затвора ', price: 'От 800' },
                    { name: 'Замена кнопки спуска затвора ', price: 'От 800' },
                    { name: 'Замена крышки батарейного отсека ', price: 'От 500' },
                    { name: 'Замена лампы вспышки ', price: 'От 800' },
                    { name: 'Замена матрицы ', price: 'От 500' },
                    { name: 'Замена мотора ', price: 'От 600' },
                    { name: 'Замена направляющих объектива ', price: 'От 600' },
                    { name: 'Замена системы стабилизации ', price: 'От 600' },
                    { name: 'Замена шестерней объектива ', price: 'От 600' },
                    { name: 'Замена шлейфа диафрагмы ', price: 'От 600' },
                    { name: 'Ремонт батарейного отсека ', price: 'От 600' }]
            },
            {
                title: 'Плееры',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена аудио выхода ', price: 'От 500' },
                    { name: 'Замена разъёма зарядки ', price: 'От 500' },
                    { name: 'Замена прошивки ', price: 'От 500' },
                    { name: 'Сбор/разбор ', price: 'От 300' },
                    { name: 'Восстановление после попадания жидкости ', price: 'От 600' },
                    { name: 'Ремонт (замена) шлейфа дисплея ', price: 'От 500' },
                    { name: 'Замена дисплея ', price: 'От 500' },
                    { name: 'Замена тачскрина ', price: 'От 500' },
                    { name: 'Ремонт платы ', price: 'От 500' },
                    { name: 'Ремонт корпуса ', price: 'От 500' },
                    { name: 'Ремонт (замена) кнопки ', price: 'От 400' },
                    { name: 'Ремонт аудио тракта ', price: 'От 500' },
                    { name: 'Замена микрофона ', price: 'От 500' }]
            },
            {
                title: 'Навигаторы / радар-детекторы',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Установка и обновление Навител ', price: '700' },
                    { name: 'Установка и обновление карт ', price: '700' },
                    { name: 'Прошивка', price: '800' },
                    { name: 'Обновление прошивки', price: '500' },
                    { name: 'Восстановление прошивки', price: '800' },
                    { name: 'Настройка', price: '500' },
                    { name: 'Русификация', price: '500' },
                    { name: 'Замена дисплея', price: '600' },
                    { name: 'Замена тачскрина', price: '600' },
                    { name: 'Восстановение питания', price: '600' },
                    { name: 'Восстановение шлейфа от 3 до 5 дорожек', price: '600' },
                    { name: 'Восстановение шлейфа от 5 до 10 дорожек', price: '1000' },
                    { name: 'Замена аудио разъёма', price: '600' },
                    { name: 'Восстановление GPS', price: '700' },
                    { name: 'Замена (ремонт) корпуса (корпусных элементов)', price: '600' },
                    { name: 'Замена разъёма mini/microUSB', price: '600' },
                    { name: 'Замена разъёма питания', price: '600' },
                    { name: 'Замена разъёма карты памяти', price: '700' },
                    { name: 'Замена разъёма сим карты', price: '700' },
                    { name: 'Замена динамика', price: '500' },
                    { name: 'Замена микрофона', price: '500' },
                    { name: 'Замена аккумулятора', price: '700' },
                    { name: 'Замена кнопки', price: '600' },
                    { name: 'Восстановление после попадания жидкости', price: '600' }]
            },
            {
                title: 'Пауэрбанки',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Замена элементов питания', price: '500' },
                    { name: 'Замена разъёма зарядки', price: '500' },
                    { name: 'Замена корпуса (ремонт корпуса)', price: 'От 500' },
                    { name: 'Замена коннектора на плате', price: 'От 400' },
                    { name: 'Замена кнопки', price: 'От 400' },
                    { name: 'Замена экрана', price: 'От 600' },
                    { name: 'Ремонт платы питания (управления)', price: 'От 500' },
                    { name: 'Ремонт после попадания жидкости', price: 'От 500' },
                    { name: 'Ремонт после короткого замыкания', price: 'От 500' },
                    { name: 'Замена кабеля', price: 'От 500' }
                ]
            },
            {
                title: 'Вейпы',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Чистка после попадания жидкости ', price: '800' },
                    { name: 'Сбор/разбор ', price: 'От 300' },
                    { name: 'Замена кнопки испорителя ', price: 'От 400' },
                    { name: 'Замена дисплея ', price: 'От 500' },
                    { name: 'Замена батареи ', price: 'От 300' },
                    { name: 'Ремонт контактов акб ', price: 'От 300' }]
            },
            {
                title: 'ЭБУ',
                services: [
                    { name: 'Наименование работ', price: 'Цена, р.' },
                    { name: 'Диагностика', price: 'Бесплатно' },
                    { name: 'Восстановление после попадания жидкости', price: 'От 2000' },
                    { name: 'Восстановление после короткого замыкания', price: 'От 2000' },
                    { name: 'Ремонт основной платы', price: 'От 2000' },
                    { name: 'Замена системных разъёмов', price: 'От 1000' },
                    { name: 'Ремонт интерфейсного разъёма, разъёмов питания', price: 'От 1000' },
                    { name: 'Ремонт корпуса', price: 'От 1000' }]
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
                                            <tbody>
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
                                            </tbody>
                                        </table>
                                    </MDBNavbarBrand>
                                    <MDBNavbarToggler onClick={this.navbarToggleCollapse("navbarCollapse")} />
                                    <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                                        <MDBNavbarNav right className="mr-0 ml-auto">
                                            <MDBNavItem className="mr-4">
                                                <Link className="nav-link middleHover" smooth to="/#price">Прайс-лист</Link>
                                            </MDBNavItem>
                                            <MDBNavItem className="mr-4">
                                                <Link className="nav-link middleHover" smooth to="/#footer">Контакты</Link>
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
                <MDBContainer id="electronics" fluid className="section bg-light text-center">
                    <h2>
                        Ремонтирую всё!
                    </h2>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <TrackVisibility once>
                                    {({ isVisible }) => (
                                        <Slider {...sliderElectronicsSettings} className={'electronics-slider animated ' + (isVisible ? 'fadeInRight' : '')}>
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
                                                                <tbody>
                                                                    <tr>
                                                                        <td><i className={item.classes}></i></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><span>{item.title}</span></td>
                                                                    </tr>
                                                                </tbody>
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
                                                            <tbody>
                                                                <tr>
                                                                    <td><i className={item.classes}></i></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span>{item.title}</span></td>
                                                                </tr>
                                                            </tbody>
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
                <MDBContainer id="problems" fluid className="section bg-dark text-center">
                    <h2>Что у вас случилось?</h2>
                    <p>Для любой проблемы - от замены динамика до комплексного ремонта<br />подберу лучшее решение по доступной
                        цене.<br />Ваша техника в надёжных руках!</p>
                    <MDBContainer fluid>
                        <MDBRow className="align-items-center">
                            <MDBCol size="12">
                                <Slider {...sliderProblemsSettings} className="problems-slider">
                                    {
                                        problemsItems.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        'problems-card' +
                                                        (index === 0 ? ' track' : '')
                                                    }>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td><img src={item.img} alt={item.alt} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <h4>{item.title}</h4>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer id="help" fluid className="section bg-dark text-center">
                    <MDBContainer className="h-100">
                        <MDBRow className="h-100">
                            <MDBCol size="12" className="my-auto">
                                <h2>
                                    Нужна помощь?
                                </h2>
                                <p><strong>iМастер</strong> всегда готов помочь Вам с ремонтом любого электронного устройства.
                                </p>
                                <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                    Оставить заявку
                                </button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer id="price" fluid className="bg-dark text-center">
                    <h2>Прайс-лист</h2>
                    <p>Здесь представлены цены на основные виды ремонта.<br />Если вы не нашли в списке поломку своего
            устройства, напишите мне!<br />iМастер починит, что угодно.</p>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="4">
                                <SimpleBar>
                                    <MDBListGroup role="tablist">
                                        {priceItems.map((item, index) => {
                                            return (
                                                <MDBListGroupItem
                                                    key={index}
                                                    role="tab"
                                                    onClick={this.toggle(index)}
                                                    hover
                                                    active={this.state.activeItem === index}
                                                >
                                                    {item.title}
                                                </MDBListGroupItem>
                                            )
                                        })}
                                    </MDBListGroup>
                                </SimpleBar>
                            </MDBCol>
                            <MDBCol md="8">
                                <MDBTabContent activeItem={this.state.activeItem}>
                                    {priceItems.map((item, index) => {
                                        return (
                                            <MDBTabPane
                                                tabId={index}
                                                role="tabpanel"
                                                className={'fade' + (index === this.state.activeItem ? ' show' : '')}
                                            >
                                                <table className='priceTable'>
                                                    <tbody>
                                                        {item.services.map((service, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{service.name}</td>
                                                                    <td>{service.price}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </MDBTabPane>
                                        )
                                    })}
                                </MDBTabContent>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
                <MDBContainer id="footer" fluid className="section bg-dark">
                    <MDBContainer>
                        <hr />
                        <MDBRow>
                            <MDBCol md="9">
                                <table>
                                    <tbody>
                                        <tr className="navbar-brand">
                                            <td className="navbar-brand-logo">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                    <rect x="31" y="50" width="2" height="4" />
                                                    <rect x="22" y="50" width="7" height="2" />
                                                    <path
                                                        d="M56,62V48.41406L57.12109,47.293A2.98152,2.98152,0,0,0,58,45.17188V45a3.00328,3.00328,0,0,0-3-3h-.17188a2.98152,2.98152,0,0,0-2.12109.87891L50.87891,44.707a1.00687,1.00687,0,0,1-.707.293H50a1.00067,1.00067,0,0,1-1-1v-.17188a1.00687,1.00687,0,0,1,.293-.707L51.12109,41.293A2.98152,2.98152,0,0,0,52,39.17188V39a2.99348,2.99348,0,0,0-2.7038-2.97009l-8.40844-4.20417a12.86647,12.86647,0,0,0,2.64392-4.97338l2.81012-1.40509A2.98517,2.98517,0,0,0,48,22.76367V21a3.00328,3.00328,0,0,0-3-3H44V13A11.01245,11.01245,0,0,0,33,2H31A11.01245,11.01245,0,0,0,20,13v5H19a3.00328,3.00328,0,0,0-3,3v1.76367a2.98517,2.98517,0,0,0,1.6582,2.6836l2.81018,1.40509a12.8669,12.8669,0,0,0,2.64392,4.97338L14.08105,36.3418A10.9376,10.9376,0,0,0,8,46.18066V62ZM38.41406,60l8.707-8.707a1.00687,1.00687,0,0,1,.707-.293h4.34376A2.96842,2.96842,0,0,0,54,50.36194V60ZM50,39v.17188a1.00687,1.00687,0,0,1-.293.707L47.87891,41.707A2.98152,2.98152,0,0,0,47,43.82812V44a3.00328,3.00328,0,0,0,3,3h.17188a2.98152,2.98152,0,0,0,2.12109-.87891L54.12109,44.293a1.00687,1.00687,0,0,1,.707-.293H55a1.00067,1.00067,0,0,1,1,1v.17188a1.00687,1.00687,0,0,1-.293.707L52.87891,48.707a1.00687,1.00687,0,0,1-.707.293H47.82812a2.98152,2.98152,0,0,0-2.12109.87891l-9.793,9.793a1.12143,1.12143,0,0,1-1.58594-1.58594l9.793-9.793A2.98152,2.98152,0,0,0,45,46.17188V41.82812a1.00687,1.00687,0,0,1,.293-.707L48.12109,38.293a1.00687,1.00687,0,0,1,.707-.293H49A1.00067,1.00067,0,0,1,50,39ZM34.96881,38l-1.04809-1.25781a5.93641,5.93641,0,0,0,1.301-.60645l2.75781-1.75586a13.15208,13.15208,0,0,0,1.42761-1.05816l2.68348,1.34173L37.01855,40.46,35,38.03741V38ZM31,38.7627l1-1.19989,1,1.19989V46H31ZM29,38v.03741L26.98145,40.46l-5.072-5.79639,2.68342-1.34185a13.15208,13.15208,0,0,0,1.42761,1.05816l2.75781,1.75586a5.93641,5.93641,0,0,0,1.301.60645L29.03119,38ZM45,20a1.00067,1.00067,0,0,1,1,1v1.76367a.9936.9936,0,0,1-.55273.89453l-1.51014.75507c.02533-.33264.06287-.66278.06287-1.00018V20ZM31,4h2a9.00984,9.00984,0,0,1,9,9H22A9.00984,9.00984,0,0,1,31,4Zm9.91937,11L39.4209,16.874A2.98841,2.98841,0,0,1,37.07715,18H26.92285a2.985,2.985,0,0,1-2.34277-1.126L23.08105,15ZM18.55273,23.6582A.9936.9936,0,0,1,18,22.76367V21a1.00067,1.00067,0,0,1,1-1h1v3.41309c0,.3374.03754.66754.06287,1.00018ZM22,16.85107l1.01855,1.273A4.97819,4.97819,0,0,0,26.92285,20h10.1543a4.98152,4.98152,0,0,0,3.90527-1.876L42,16.85187v6.56122a10.945,10.945,0,0,1-5.09473,9.27929l-2.75781,1.75586a4.015,4.015,0,0,1-4.29492,0l-2.75781-1.75586A10.945,10.945,0,0,1,22,23.41309ZM10,46.18066a8.9482,8.9482,0,0,1,4.97559-8.0498l5.08508-2.54279,6.95788,7.952L29,41.16254V48h6V41.16254L36.98145,43.54l6.958-7.95215,2.70575,1.35284L43.87891,39.707A2.98152,2.98152,0,0,0,43,41.82812v4.34376a1.00687,1.00687,0,0,1-.293.707l-9.793,9.793A3.14144,3.14144,0,0,0,32,58.87891,3.09124,3.09124,0,0,0,32.217,60H20V49H18V60H10Z" />
                                                </svg>
                                            </td>
                                            <td>
                                                <span>iМастер</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <p>
                                                    iМастер основан опытным мастером по ремонту электроники.<br />
                                                    Более чем 8-летний опыт работы с обширным диапазоном различных
                                                    электронных устройств дает мне право гарантировать, что и ваше устройство оживет
                                                    и еще долго будет вас радовать.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </MDBCol>
                            <MDBCol className="footer-contacts" md="3">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h4>Контакты</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>
                                                    <strong>E-mail : </strong>
                                                    <a className="middleHover middleHover_siteColor"
                                                        href="mailto:mail@i-master.tech">
                                                        mail@i-master.tech</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>
                                                    <strong>Телефон : </strong>
                                                    <a className="middleHover middleHover_siteColor"
                                                        href="tel:+7-953-553-0614">
                                                        +7-953-553-06-14</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>
                                                    <strong>Instagram : </strong>
                                                    <a className="middleHover middleHover_siteColor"
                                                        href="https://www.instagram.com/imaster.tech/">
                                                        imaster.tech</a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="footer-contacts-button">
                                            <td>
                                                <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                                    Написать в чат
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </>
        );
    }
}

export default Main;