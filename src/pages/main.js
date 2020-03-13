import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBTabContent, MDBTabPane } from "mdbreact";
import { Helmet } from "react-helmet";
import TrackVisibility from 'react-on-screen';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: 1
        }
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
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер</title>
                </Helmet>
                <MDBContainer id="main" fluid>
                    <MDBContainer className="h-100">
                        <MDBRow className="h-100">
                            <MDBCol>
                                <Navbar />
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
                <MDBContainer id="gap" fluid className="section bg-dark text-center">
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
                <Footer />
            </>
        );
    }
}

export default Main;