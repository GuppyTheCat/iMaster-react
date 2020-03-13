import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBTabContent, MDBTabPane } from "mdbreact";
import { Helmet } from "react-helmet";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';
import './services.css';

export default class Services extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeItem: 0
        }
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }

    render() {

        const servicesItems = [
            {
                name: 'Телефоны',
                title: 'Ремонт телефонов, смартфонов в Нижнем Новгороде',
                img: 'img/devices/phone2.png',
                alt: '',
                text: 'Если вы ищете быстрый и недорогой ремонт специалистом своего дела, то вы обратились по адресу. С момента звонка до выдачи аппарата вам на руки я контролирую процесс. Вы можете быть уверены, что ремонт будет выполнен качественно. Моя задача - довольный клиент. Работа на результат, который полностью понравится мои заказчикам это - лучшая оценка работы. Ремонт вашего любимого девайся будь то смартфон, телефон, КПК будет произведен качественно, за разумные деньги и в минимальные сроки. Сам процесс с момента приема аппарат в ремонт и его выдачи вам на руки контролируется именно мной как владельцем сервиса. Доверить аппарат человеку, который у вас его принял, произвел ремонт и выдал гораздо надежнее, чем сервису с многочисленными людьми, отвечающими за разные процессы. По сравнению с другими СЦ накручивающими вам бесполезные услуги и сервисы, мои цены будут ниже на 20-25%. Например замена разъема зарядки обойдется от 600р, замена дисплея от 500р, замена сенсорного стекла от 500р. Рекомендую вам написать мне, либо позвонить и узнать, сколько вы сможет сэкономить на ремонте по сравнению с обычными сервисными центрами.',
                brandsText: 'iМастер осуществляет ремонт телефонов, смартфонов, КПК любых моделей, в том числе и следующих брендов:',
                brandsNames: 'iPhone, Samsung, Xiaomi, Huawei, Nokia, Sony, Meizu, Lenovo, ASUS, LG, DEXP, Blackview, Prestigio, DEXP, Vivo, Oppo, Doogee, Philips, Motorola, HTC',
                typesText: 'Наша фирма производит программный и аппаратный ремонт телефонов и смартфонов в Нижнем Новгороде:',
                typesList: ['Ремонт после попадания жидкости',
                    'Замена тачскрина',
                    'Замена аккумулятора',
                    'Ремонт корпуса',
                    'Замена USB',
                    'Замена гнезда питания',
                    'Замена камеры',
                    'Замена слухового динамика',
                    'Замена сим холдера',
                    'Ремонт шлейфа платы',
                    'Замена вибромотора',
                    'Ремонт цепи питания материнской платы',
                    'Замена крышки',
                    'Замена Wi-Fi',
                    'Замена платы GPS',
                    'Замена контроллера платы',
                    'Замена кнопки включения',
                    'Замена разъема HDMI',
                    'Замена микрофона',
                    'Замена системной платы',
                    'Чистка']
            },
            {
                name: 'Планшеты',
                title: 'Ремонт планшетов в Нижнем Новгороде',
                img: 'img/devices/tablet.png',
                alt: '',
                text: 'Планшеты в наше время стали неотъемлемой частью жизни. Кому-то они нужны для хобби и развлечений, а кому-то для работы и бизнеса. Но не стоит переживать, если вы остались без вашего верного друга и помощника. iМастер решит вашу проблему в минимальные сроки и за разумные деньги. Моя задача - осуществить ремонт в любое удобное время и за стоимость соразмерную степени сложности ремонта. Работая КРУГЛОСУТОЧНО именно для Вас, я исправлю любой дефект. Например, ремонт разъема зарядки обойдется вам от 600р, замена экрана от 800р, замена аккумуляторной батареи от 500р. Не спешите принимать решение по замене планшета, просто позвоните или напишите. Я уверен мы решим вашу проблему.',
                brandsText: 'iМастер осуществляет ремонт планшетов любых моделей, в том числе и следующих брендов:',
                brandsNames: 'Apple, Samsung, Huawei, Sony, Asus, Lenovo, Acer, Google, Alcatel, Prestigio, Microsoft, DEXP, Irbis, Digma',
                typesText: 'Наша фирма производит программный и аппаратный ремонт планшетов в Нижнем Новгороде:',
                typesList: ['Замена платы',
                    'Замена гнезда питания',
                    'Полная разборка',
                    'Замена мультиконтроллера',
                    'Замена шлейфа платы',
                    'Ремонт HDMI',
                    'Замена модуля дисплея',
                    'Ремонт сим лотка',
                    'Замена встроенной камеры',
                    'Замена порта USB',
                    'Замена вибро',
                    'Восстановление корпуса',
                    'Замена аккумуляторной батареи',
                    'Замена элементов цепи питания',
                    'Замена кнопки включения',
                    'Ремонт встроенного микрофона',
                    'Замена слухового динамика',
                    'Замена заднего стекла',
                    'Замена WiFi',
                    'Чистка',
                    'Замена модуля GPS']
            },
            {
                name: 'Компьютеры / Моноблоки',
                title: 'Ремонт персональных компьютеров и моноблоков в Нижнем Новгороде',
                img: 'img/devices/pc.png',
                alt: '',
                text: 'Сервис iМастер предлагает Вам ремонт ПК на дому с бесплатным выездом. В любое время дня и ночи я всегда приду на помощь. Диагностика не займет много времени, а имея все комплектующие в наличии, отремонтировать вашего друга получится в течение часа. Цены на ремонт также абсолютно демократичные: замена блока питания от 800р, замена материнской платы от 500р, замена жесткого диска от 500р.',
                brandsText: 'iМастер осуществляет ремонт ПК, моноблоков и их комплектующих любых моделей, в том числе и следующих брендов:',
                brandsNames: 'Apple, HP, Asus, Dell, Alienware, Lenovo, Razer, Acer, Microsoft, MSI',
                typesText: 'Наша фирма производит программный и аппаратный ремонт персональных компьютеров, моноблоков и их комплектующих в Нижнем Новгороде:',
                typesList: ['Установка Windows, Linux, Mac OS',
                    'Восстановление работоспособности Windows(с сохранением всех настроек и приложений)',
                    'Установка драйверов, утилит, антивируса и другого программного обеспечения',
                    'Настройка Wi-Fi',
                    'Тестирование Wi-Fi соединения',
                    'Установка точки доступа',
                    'УНастройка роутера',
                    'Подключение сетевого принтера',
                    'Настройка локальной сети',
                    'Обнаружение и удаление вирусов',
                    'Восстановление информации с жесткого диска и флешек',
                    'Разбивка жесткого диска на разделы',
                    'Сборка компьютера под заказ',
                    'Компонентный ремонт материнской платы',
                    'Компонентный ремонт видеокарты ',
                    'Настройка интернет USB-модем ',
                    'Замена USB, аудио разъемов ',
                    'Замена жесткого диска ',
                    'Замена оперативной памяти ',
                    'Замена элемента питания BIOS ',
                    'Ремонт компьютера',
                    'Ремонт монитора',
                    'Клонирование HDD']
            },
            {
                name: 'Ноутбуки / Нетбуки',
                title: 'Ремонт ноутбуков и нетбуков в Нижнем Новгороде',
                img: 'img/devices/notebook.png',
                alt: '',
                text: 'Произвести ремонт ноутбука или нетбука не так просто. Сервисных центров оказывающих данную услугу очень много, но как качественно будет произведен ремонт – вопрос неоднозначный. iМастер гарантирует ремонт частным мастером с многолетним опытом работы в данном направлении. Вы всегда можете позвонить и узнать все о процессе ремонта, сроках заказа запчастей, статусе ремонта непосредственно у исполнителя. Я дорожу своими заказчиками и гарантирую прозрачность выполнения ремонта так же как и его цену. В процессе ремонта она никогда не поменяется. Например, замена матрицы стоит 800р, замена жесткого диск 500р, замена клавиатуры 500р. Цены на ремонт нашего сервисного центра являются демпинговыми, но только для того чтобы показать действительно конкурентоспособные цены.',
                brandsText: 'iМастер осуществляет ремонт ноутбуков и нетбуков любых моделей, в том числе и следующих брендов:',
                brandsNames: 'HP, Asus, Dell, Alienware, Lenovo, Razer, Acer, Microsoft, Huawei, Apple, MSI, Samsung',
                typesText: 'Наша фирма производит программный и аппаратный ремонт ноутбуков и нетбуков в Нижнем Новгороде:',
                typesList: ['Установка Windows, Linux, Mac OS',
                    'Восстановление работоспособности Windows(с сохранением всех настроек и приложений)',
                    'Установка драйверов, утилит, антивируса и другого программного обеспечения',
                    'Настройка Wi-Fi',
                    'Тестирование Wi-Fi соединения ',
                    'Установка точки доступа',
                    'Настройка роутера',
                    'Подключение сетевого принтера',
                    'Настройка локальной сети',
                    'Обнаружение и удаление вирусов',
                    'Восстановление информации с жесткого диска',
                    'Восстановление информации с флэшек',
                    'Разбивка жесткого диска на разделы',
                    'Настройка интернет USB-модем',
                    'Клонирование HDD',
                    'Замена DVD привода ',
                    'Замена Wi-Fi модуля ',
                    'Замена аккумуляторной батареи (встроенной) ',
                    'Замена антенны ',
                    'Замена верхней крышки ',
                    'Замена петли ',
                    'Замена динамика ',
                    'Замена жесткого диска ',
                    'Замена камеры ',
                    'Замена клавиатуры ',
                    'Замена кнопки включения ',
                    'Замена коннектора (любого) на материнской плате ',
                    'Замена корпуса ',
                    'Замена кулера ',
                    'Замена материнской платы ',
                    'Замена матрицы ',
                    'Замена микрофона ',
                    'Замена разьема USB ',
                    'Замена разьема питания ',
                    'Замена сетевой карты ',
                    'Замена тачпада ',
                    'Замена термопасты ',
                    'Замена шлейфа матрицы ',
                    'Замена видеочипа ',
                    'Замена мульти контроллера ',
                    'Замена чипсета (северного и южного мостов) ',
                    'Замена / ремонт средней части корпуса ',
                    'Ремонт Wi-Fi модуля ',
                    'Ремонт видеокарты ',
                    'Ремонт материнской платы ',
                    'Ремонт разъема зарядки/USB разъема ',
                    'Ремонт сетевой карты ',
                    'Чистка динамика/микрофона ',
                    'Чистка материнской платы ультразвуковая ',
                    'Чистка разъема питания/USB разъема ',
                    'Чистка системы охлаждения ']
            },
            {
                name: 'Телевизоры',
                title: 'Ремонт телевизоров в Нижнем Новгороде',
                img: 'img/devices/tv2.png',
                alt: '',
                text: 'iМастер с полной уверенностью может гарантировать качественный ремонт вашего телевизора. Имея многолетний опыт ремонта техники КБТ и надежных поставщиков комплектующих с гарантией на запчасти до 3х лет на произведенные детали, я могу гарантировать вам дальнейшее многолетнее использование вашей техники по назначению. Будь то ремонт подсветки телевизора, ремонт блока питания, ремонт платы управления или что-либо другое. Ремонт любой сложности не скажется на сроке эксплуатации вашей любимой техники.',
                brandsText: 'iМастер осуществляет ремонт телевизоров любых моделей, в том числе и следующих брендов:',
                brandsNames: 'Samsung, LG, Sony, Hisense, Panasonic, Philips, TCL, Skyworth, Vizio, Sharp, Haier, Harper, Hyundai, Loewe',
                typesText: 'Наша фирма производит программный и аппаратный ремонт телевизоров в Нижнем Новгороде:',
                typesList: ['Замена матрицы ',
                    'Восстановление после попадания жидкостью ',
                    'Ремонт подсветки дисплея ',
                    'Замена TV-тюнера ',
                    'Ремонт / замена шлейфа экрана ',
                    'Замена системной платы ',
                    'Восстановления цепей питания ',
                    'Замена кнопок ',
                    'Замена блока питания ',
                    'Замена HDMI ',
                    'Замена антенного разъема ',
                    'Восстановление ПО (прошивка) ',
                    'Замена динамиков (спикеров) телевизора ']
            },
            {
                name: 'Игровые консоли',
                title: 'Ремонт игровых консолей / приставок в Нижнем Новгороде',
                img: 'img/devices/console.png',
                alt: '',
                text: 'Рано или поздно ваша любимая игровая станция выходит из строя, будь то XBOX, PlayStation Nintendo или любая другая. Тогда каждый геймер, либо отец такого геймера задумывается кому доверить дорогую памяти и сердцу консоль. Не переживайте - если вы это читаете, можете быть уверены, что вы попали именно по адресу. Я возьмусь за возрождение вашей приставки. Не успеет выйти новое обновление вашей любимой игры, а ваш любимый клан собраться на новые подвиги, как вы получите обновленный игровой агрегат с устраненными проблемами. Такие неисправности как ребболинг видео чипа, замена блока питания, чистка системы охлаждения, ремонт корпуса и многое другое решается буквально за день. Не стесняйтесь обращаться, вы останетесь довольны ценами и сервисом.',
                brandsText: 'iМастер осуществляет ремонт игровых приставок любых брендов, в том числе и следующих моделей:',
                brandsNames: 'Sony PlayStation 3, Sony PlayStation 4, XBOX 360, XBOX ONE, PlayStation Portable (PSP), PlayStation Vita (PS Vita), Nintendo DS, Nintendo 3DS, Nintendo Wii, Nintedo Switch и многие другие',
                typesText: 'Наша фирма производит программный и аппаратный ремонт игровых приставок в Нижнем Новгороде:',
                typesList: [
                    'Замена блока питания консоли',
                    'Ремонт привода Bluray устройства',
                    'Замена твердого накопителя HDD',
                    'Чистка системы охлаждения',
                    'Замена материнской платы',
                    'Замена видеочипа, чипа северного или южного моста',
                    'Ремонт разъема HDMI',
                    'Обновление программного обеспечения']
            },
            {
                name: 'Фото/видеотехника',
                title: 'Ремонт фотоаппаратов, видеокамер, экшен-камер в Нижнем Новгороде',
                img: 'img/devices/photo2.png',
                alt: '',
                text: 'В наше время очень тяжело найти специалиста по ремонту фото и видеотехники, но будьте уверены – с моим многолетним опытом работы в данном направлении мне не составит труда ремонт как обычного цифрового аппарата, так и дорогого зеркального . Чтобы убедиться в качестве, сроках и приятных ценах iМастер, я рекомендую вам хотя бы раз обратиться, и вы будете приятно удивлены. Многие запчасти уже находятся в наличии, такие как лентопротяжные механизмы, линзы, блоки питания и прочее, а многие сервисы отказываются от ремонта сложных устройств. Обратившись в iМастер вы останетесь довольны. Ремонт объектива стоит от 800р, замена батарейного отсека от 500р, чистка объектива от 800р.',
                brandsText: 'iМастер осуществляет ремонт фотоаппаратов, видеокамер, экшен-камер любых моделей, в том числе и следующих брендов:',
                brandsNames: 'Canon, Nikon, Pentax, Fujifilm, Olympus, Sony, Panasonic, DEXP, Kodak, Sigma, Polaroid',
                typesText: 'Наша фирма производит программный и аппаратный ремонт фотоаппаратов, видеокамер, экшен-камер в Нижнем Новгороде:',
                typesList: ['Замена дисплея видеокамеры ',
                    'Ремонт объектива видеокамеры ',
                    'Ремонт механизмов видеокамеры от ',
                    'Ремонт ЛПМ ',
                    'Ремонт контроллера ',
                    'Ремонт привода DVD ',
                    'Замена затвора ',
                    'Замена кнопки спуска затвора ',
                    'Замена крышки батарейного отсека ',
                    'Замена лампы вспышки ',
                    'Замена матрицы ',
                    'Замена мотора ',
                    'Замена направляющих объектива ',
                    'Замена системы стабилизации ',
                    'Замена шестерней объектива ',
                    'Замена шлейфа диафрагмы ',
                    'Ремонт батарейного отсека ']
            },
            {
                name: 'Плееры',
                title: 'Ремонт аудио плееров в Нижнем Новгороде',
                img: 'img/devices/player.png',
                alt: '',
                text: 'Произведем качественный ремонт аудио техники, в частности mp3-плееров от самых бюджетных до дорогостоящих. Ремонт плеера не займет много времени и не ударит по вашему карману, вы всегда можете ознакомиться с прайсом, а если есть вопросы - задать их в чат и мы с радостью ответим на них. Ремонт аудио плееров производится в большинстве случаев в течение часа, так как все узлы достаточно простые и не являются сложными в плане диагностики и последующего ремонта.',
                brandsText: 'iМастер осуществляет ремонт аудио плееров любых моделей, в том числе и следующих брендов:',
                brandsNames: 'Apple(iPod), Sony, RITMIX, Digma, FiiO, DEXP, Cowon, Aceline',
                typesText: 'Наша фирма производит программный и аппаратный ремонт аудио плееров в Нижнем Новгороде:',
                typesList: ['Замена аудио выхода ',
                    'Замена разъёма зарядки ',
                    'Замена прошивки ',
                    'Восстановление после попадания жидкости ',
                    'Ремонт (замена) шлейфа дисплея ',
                    'Замена дисплея ',
                    'Замена тачскрина ',
                    'Ремонт платы ',
                    'Ремонт (замена) кнопки ',
                    'Замена микрофона ']
            },
            {
                name: 'Пауэрбанки',
                title: 'Ремонт пауэрбанков в Нижнем Новгороде',
                img: 'img/devices/powerbank.png',
                alt: '',
                text: 'Ремонт пауэрбанков (powerbank) - на рынке ремонта электроники достаточно новое направление. Только опытные специалисты могут произвести качественный ремонт пауэрбанка в доступном ценовом диапазоне и в приемлемые сроки. В iМастер замена разъёма пауэрбанка, либо замена аккумулятора, так же как и другой ремонт выполняется специалистом с опытом работы более 8 лет. Гарантия , качество и надежность - вот что может гарантировать iМастер.',
                brandsText: 'iМастер осуществляет ремонт пауэрбанков любых моделей, в том числе и следующих брендов:',
                brandsNames: 'InterStep, Canyon, Defender, HIPER, Harper, Huawei, Xiaomi, Nobby, Qumo, Rivacase, Rombica, Samsung, Sony, TFN, iconBIT, Remax, Smartbuy, Silicon Power',
                typesText: 'Наша фирма производит аппаратный ремонт пауэрбанков в Нижнем Новгороде:',
                typesList: ['Замена аудио выхода ',
                    'Замена разъёма зарядки ',
                    'Замена прошивки ',
                    'Сбор/разбор ',
                    'Восстановление после попадания жидкости ',
                    'Ремонт (замена) шлейфа дисплея ',
                    'Замена дисплея ',
                    'Замена тачскрина ',
                    'Ремонт платы ',
                    'Ремонт корпуса ',
                    'Ремонт (замена) кнопки ',
                    'Ремонт аудио тракта ',
                    'Замена микрофона ']
            },
        ]

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | Услуги</title>
                </Helmet>
                <MDBContainer>
                    <MDBContainer className="navbar-container position-relative">
                        <Navbar />
                    </MDBContainer>
                    <MDBContainer fluid className="section devices-block">
                        <MDBContainer fluid>
                            <MDBRow>
                                <MDBCol md="4" lg="3" className="text-center simplebar-block">
                                    <SimpleBar>
                                        <MDBListGroup role="tablist" className="mx-auto">
                                            {servicesItems.map((item, index) => {
                                                return (
                                                    <MDBListGroupItem
                                                        key={index}
                                                        role="tab"
                                                        onClick={this.toggle(index)}
                                                        hover
                                                        active={this.state.activeItem === index}
                                                    >
                                                        {item.name}
                                                    </MDBListGroupItem>
                                                )
                                            })}
                                        </MDBListGroup>
                                    </SimpleBar>
                                </MDBCol>
                                <MDBCol md="8" lg="9" className="bg-dark tab-block">
                                    <MDBTabContent className="bg-light" activeItem={this.state.activeItem}>
                                        {servicesItems.map((item, index) => {
                                            return (
                                                <MDBTabPane
                                                    tabId={index}
                                                    role="tabpanel"
                                                    className={'fade' + (index === this.state.activeItem ? ' show' : '')}
                                                >
                                                    <MDBContainer fluid className="description tabContent-section">
                                                        <MDBRow className="justify-content-center">
                                                            <MDBCol md="11" lg="10" className="text-center">
                                                                <h3>{item.title}</h3>
                                                                <img src={item.img} alt={item.alt} className="description-image" />
                                                                <p className="description-text text-left">{item.text}</p>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </MDBContainer>
                                                    <MDBContainer fluid className="brands">
                                                        <MDBRow className="justify-content-center">
                                                            <MDBCol md="11" lg="10" className="text-center">
                                                                <h3>Бренды</h3>
                                                                <div className="brands-text text-left tabContent-section">
                                                                    <p>{item.brandsText}</p>
                                                                    <p><strong>{item.brandsNames}</strong></p>
                                                                </div>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </MDBContainer>
                                                    <MDBContainer fluid className="cases">
                                                        <MDBRow className="justify-content-center">
                                                            <MDBCol md="11" lg="10" className="text-center tabContent-section">
                                                                <h3>Виды услуг</h3>
                                                                <div className="cases-text text-left">
                                                                    {/*<p>{item.typesText}</p>*/}
                                                                    <ul>
                                                                        {item.typesList.map((type, index) => {
                                                                            return (
                                                                                <li key={index} >{type}</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                                <button type="button" className="btn btn-custom" onClick={() => eval("jivo_api.open()")}>
                                                                    Написать мастеру
                                                            </button>
                                                            </MDBCol>
                                                        </MDBRow>
                                                    </MDBContainer>
                                                </MDBTabPane>
                                            )
                                        })}
                                    </MDBTabContent>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBContainer>
                    <Footer />
                </MDBContainer>
            </>
        );
    }
}