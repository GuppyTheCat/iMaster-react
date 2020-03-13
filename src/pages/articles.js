import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBTabContent, MDBTabPane } from "mdbreact";
import { Helmet } from "react-helmet";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './main.css';
import './articles.css';

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
        const articlesItems = [
            {
                name: 'Замена клавиатуры на ноутбуке Acer',
                title: 'Замена клавиатуры на ноутбуке Acer',
                content: `<img src='../img/articles/acer_keyboard/1_webp.webp'></img>
                <p>Здравствуйте, уважаемый посетитель сайта i-master.tech.<br /> В данной статье я хочу рассказать про все тонкости процесса
                    замены клавиатуры на ноутбуке Acer.<br />
                    Произвести ремонт клавиатуры, то есть её замену можно и самостоятельно, имея базовый опыт и необходимые
                    инструменты.<br />
                    Для самостоятельной замены клавиатуры вам потребуются:<br />
                </p>
                <ul>
                    <li>Медицинский шпатель(лопатка)</li>
                    <li>Пластиковая лопатка, либо ненужная кредитная карта</li>
                    <li>Набор отверток</li>
                    <li>Пинцет(желательно)</li>
                </ul>
                <p>
                    В каждом ноутбуке есть свои тонкости в снятии и установке новой клавиатуры, но в большинстве моделей клавиатура
                    меняется без разбора ноутбука. Например, в представленной модели Acer 5920.<br />
                    В иных случаях для снятия и установки клавиатуры вам потребуется полный разбор ноутбука, что крайне не рекомендуется
                    делать, не имея достаточного опыта.<br /><br />
                    <strong>Важно!</strong> Не забудьте извлечь аккумуляторную батарею и не выполняйте никакие работы, не обесточив
                    устройство.
                </p>
                <h4>Итак, начнем!</h4>
                <p>
                    Будь то замена клавиатуры на ноутбуке Asus либо замена клавиатуры на ноутбуке Samsung, вся процедура займет у вас не
                    более часа при аккуратном демонтаже и установке.
                </p>
                <img src='../img/articles/acer_keyboard/2_webp.webp'></img>
                <p>
                    При снятии клавиатуры на ноутбуке Acer, вам потребуется тонкий инструмент: желательно медицинская лопатка, а также
                    медицинский зонд либо что-то очень похожее на него.<br /> Нужно слегка надавить вглубь ноутбука по
                    направлению пластиковых держателей (см. фото) и параллельно немного подцепить клавиатуру, чуть приподнимая её. Не
                    бойтесь тянуть её наверх, клавиатуры зачастую очень мягкие и без проблем гнутся без риска повреждения.<br />
                    После снятия клавиатуры вы увидите единственный интерфейсный шлейф. Используйте пинцет либо тонкую отвертку для
                    изъятия шлейфа. Предварительно отодвиньте каретку в сторону экрана.<br />
                </p>
                <p>
                    <strong>Внимание!</strong> При установке новой клавиатуры в корпус предварительно необходимо проверить все кнопки на
                    наличие дефектов и только потом производить установку.
                </p>
                <img src='../img/articles/acer_keyboard/3_webp.webp'></img>
                <h4>Могу Вас поздравить вы успешно произвели ремонт самостоятельно!</h4>
                <p>
                    Однако, если у вас:
                </p>
                <ul>
                    <li>Недостаточно опыта в установке клавиатуры ноутбука.</li>
                    <li>Нет нужного инструмента</li>
                    <li>Есть опасения за стоимость установки клавиатуры в СЦ</li>
                </ul>
                <p>
                    <strong>
                        Вы можете обратиться в iМастер. Средняя стоимость замены клавиатуры в районе 800р, срок ремонта от 10 минут.
                    </strong>
                    <br /><br />
                    При появлении любых вопросов, связанных с ремонтом вашего ноутбука или нетбука, вы всегда можете написать в чат на
                    сайте либо позвонить, а также написать в наш instagram.<br />
                    Если у вас нет времени на самостоятельный ремонт, самостоятельную замену клавиатуры, вы всегда можете обратиться ко
                    мне и произвести ремонт у специалиста с огромным опытом ремонта мобильной электроники.
                </p>`
            },
            {
                name: 'Замена дисплейного модуля Huawei P Smart',
                title: 'Замена дисплейного модуля смартфона Huawei P Smart 2019',
                content: `<img src='img/articles/huawei-p-smart_display/image1.webp'></img>
                <p>
                    В данной статье мы рассмотрим замену дисплейного модуля на примере смартфона Huawei P Smart 2019.<br />
                    Замена экрана Huawei P Smart 2019 практически идентична замене на любом другом устройстве, будь то замена
                    дисплейного модуля на смартфоне Sony, Samsung, Philips, Xiaomi, Meizu и других производителей.<br />
                    Поломка телефона, в частности повреждение дисплея это - самая частая поломка мобильных устройств. Данная
                    статья позволит вам самостоятельно произвести замену дисплейного модуля своими руками.<br />
                </p>
                <h5>Итак начнем!</h5>
                <p>
                    Для начала разберемся с необходимым инструментом и оборудованием.<br />
                    Вам потребуются:
                </p>
                <ul>
                    <li>Медицинская лопатка</li>
                    <li>Скальпель</li>
                    <li>Набор отверток</li>
                    <li>Пластиковая карта либо её аналог</li>
                    <li>Скотч 3М либо клей по типу B7000 T7000 E7000, либо ему подобный</li>
                    <li>Желательна паяльная станция, сепаратор либо что-то подобное для прогрева до 250 градусов</li>
                    <li>Спирт изопропиловый, ацетон, flux-off (не использовать парфюмерную воду, алкоголь и прочие жидкости)</li>
                    <li>Ватные палочки, зубная щетка</li>
                    <li>Пластиковые прищепки либо резинки.</li>
                </ul>
                <h5>Небольшое отступление перед началом работы:</h5>
                <ul>
                    <li><strong>Важно!</strong> Не торопитесь. Делайте все предельно аккуратно, так как шлейфы, коннекторы,
                        радиокомпоненты на системной плате хрупкие.</li>
                    <li>При вскрытии и извлечении аккумуляторной батареи не использовать металлические инструменты! При повреждении АКБ
                        есть риск выхода её из строя и даже возгорание!</li>
                    <li>При разборе телефона все болты должны быть установлены именно в то место, откуда они были извлечены. Не все
                        болты одинаковой длины и вы запросто можете повредить плату либо экран.</li>
                    <li>Не подключать новый дисплей либо старый при подключенной АКБ. Все делать только в обесточенном состоянии. Есть
                        риск повреждения дисплея, цепи питания дисплея. Например, выгоревшей микросхемой питания подсветки из-за
                        подключения «на горячую». Как это часто бывает по незнанию. Будьте внимательны!</li>
                </ul>
                <p>
                    Данное отступление сделано чтобы предостеречь, а не напугать вас сложностью замены. Нужно соблюдать
                    элементарные правила, и все у вас получится!<br />
                    <i>Если у вас появились сомнения по самостоятельной замене вы всегда можете написать в чат на сайте либо позвонить,
                        и я с радостью проконсультирую вас! Стоимость замены дисплея начинается от 600р.</i>
                </p>
                <h5>Приступим!</h5>
                <img src='img/articles/huawei-p-smart_display/image2.webp'></img>
                <p>В первую очередь необходимо извлечь сим-лоток их очень часто ломают, так что будьте внимательны.<br />
                    Далее используя пластиковую карту начинайте отгибать корпус по кругу телефона до щелчка. Щелчок говорит о том, что
                    пластиковые замки отошли от корпуса.<br /> После того как вы извлекли заднюю крышку, не спешите убирать её. Нужно
                    отключить шлейф датчика отпечатка пальца (№1 на картинке). Это можно сделать пластиковой лопаткой. Чтобы извлечь
                    его, необходимо снять металлическую защиту. Она закреплена 3-мя винтами (3 красных круга на фото). После этого
                    аккуратно извлекаем её и отключаем шлейф.<br />
                    Крышка снята!<br />
                </p>
                <p>На фото вы видите 4 стрелки:</p>
                <ul>
                    <li>Шлейф датчика отпечатка пальца</li>
                    <li>Шлейф дисплейного модуля (экран)</li>
                    <li>Шлейф аккумуляторной батареи </li>
                    <li>Межплатный шлейф (соединяет нижнюю плату с основной материнской(системной) платой)</li>
                </ul>
                <p>Сначала нужно обесточить телефон! Далее отключаем шлейфы начиная с третьего. Далее четвертый и второй.<br />
                    Все шлейфы у нас отключены. Теперь необходимо снять АКБ(батарею).<br />
                    Для легкого извлечения батареи рекомендую вам 2-3 кубика спирта залить в любое место в корпус под батарею, используя
                    шприц. Это значительно облегчит вам её демонтаж - спирт разъест клей и вы без труда сможете её извлечь, например
                    пластиковой лопаткой (не использовать металлические инструменты)! В процессе извлечения проткните АКБ!<br />
                    На фото представлен телефон со снятой АКБ.
                </p>
                <img src='img/articles/huawei-p-smart_display/image3.webp'></img>
                <p>После снятия АКБ переворачиваем телефон и проделываем тоже самое со спиртом и шприцом - 2-3 кубика с помощью иглы
                    смело выливаем по всему дисплею в рамку между корпусом и экраном. Через 2-3 минуты клей начнет терять свои свойства,
                    и вы без труда, используя скальпель, сможете его поддеть.<br />
                    Выставляем фен на 200 градусов и прогреваем дисплей аккуратно по всему периметру в течение 30-40 секунд. Это
                    облегчит вам работу по демонтажу.<br />
                    <strong>Не забываем отклеить шлейф дисплея с обратной стороны корпуса.</strong><br />
                    Практически вся основная работа выполнена!
                </p>
                <p>
                    <i>Если у вас возникли сложности в разборе и ремонте вашего девайся iМастер всегда готов вам помочь. Я выполняю
                        ремонт любых телефонов, а замена дисплейного модуля производится с использованием профессионального
                        оборудования. Замена модуля, в среднем, производится за 1 час. </i>
                </p>
                <p>После извлечения дисплея необходимо убрать остатки клея и стекла в месте установленного ранее дисплейного модуля.
                    Будьте внимательны, весь периметр установки экрана должен быть абсолютно чистым иначе при установке нового экрана,
                    если что-то попадет под него, экран может треснуть.<br />
                    Убираем все металлической лопаткой и протираем ватной палочкой, предварительно обработанной в спирте. <br />
                    Теперь мы можем производить установку нового экрана, но до этого нужно еще раз обезжирить поверхность, используя
                    щетку и спирт.<br />
                    <strong>Если вы сомневаетесь в работоспособности нового экрана, рекомендую вам сначала просто подключить его, не
                        производя установку в корпус, и после полной проверки уже производить монтаж.</strong>
                </p>
                <img src='img/articles/huawei-p-smart_display/image4.webp'></img>
                <p>Далее берем наш клей и аккуратно наносим его по всему периметру корпуса (не допускайте попадания в технологические
                    отверстия такие как динамик, микрофон и прочие).<br />
                    После нанесения клея необходимо сразу аккуратно установить экран в корпус (не забудьте про шлейф). После того как
                    дисплей установлен ровно в корпус, его необходимо зафиксировать на 30-40 минут под давлением используя прищепки либо
                    канцелярские резинки (стянув экран), чтобы клей равномерно распределился по корпусу и высох.<br />
                    После всех проделанных операций собираем телефон в обратной последовательности и в последнюю очередь подключаем
                    батарею.<br />
                    Поздравляю! Телефон готов!
                </p>
                <img src='img/articles/huawei-p-smart_display/image5.webp'></img>
                <p>Незабываем проверить все еще раз перед закрытием крышки. Например, подключить шлейф датчика отпечатка пальца.<br />
                    Если он у вас перестал работать, вероятнее всего он просто не инициализировался системой. Перезагрузите телефон.
                </p>
                <p>
                    <i>iМастер всегда к вашем услугам, мы производим ремонт любой мобильной электроники.<br />
                        Замена дисплея, замена тачскрина, замена дисплейного модуля на телефонах Samsung, Xiaomi, Meizu, Sony, ZTE,
                        Iphone, Ginzu, Alcatel, Jinga Basco, Lenovo, Motorolla и многих других производителей.
                    </i>
                </p>`
            },
            {
                name: 'Article 3 name',
                title: 'Article 3 title',
                content: `3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam id excepturi incidunt doloremque nostrum error sint tempora placeat commodi voluptatum. Quibusdam deleniti soluta voluptates cum excepturi sequi corporis magnam vero.
                Amet praesentium neque blanditiis culpa nulla, aliquid nemo eligendi qui reprehenderit eius nam debitis rem dolorem alias maiores tempora asperiores perferendis eos dolor adipisci optio perspiciatis nobis corporis consequatur. A?
                Vel soluta pariatur molestias ut adipisci velit, sequi atque alias. Praesentium, quae sed sequi, officiis neque natus accusamus deleniti beatae, unde minus iure excepturi nemo. Obcaecati accusantium magnam incidunt architecto.
                Nemo eum cupiditate harum vero quisquam autem pariatur, nulla veniam, in sit distinctio quam. Cupiditate maiores impedit voluptatum, iure excepturi, ratione numquam nisi dicta similique odit atque corporis molestias fugit.
                Nesciunt nisi, autem accusamus amet quibusdam omnis reiciendis debitis dolorem facilis obcaecati, vitae saepe quia minus cupiditate, deleniti porro. Aut, nulla quae? Cupiditate culpa quaerat excepturi fugiat suscipit necessitatibus voluptates!
                Eligendi est maiores ea, odio eius dicta. Repellat, tenetur autem tempora mollitia porro facere! Illum quae aliquid sint, quam ratione mollitia nobis molestias sequi corrupti perferendis, tempore, cum minima aperiam?
                Ex tempora, dolorem deleniti laudantium itaque fugiat dolorum cum hic vitae velit? Nobis iure voluptate minus doloremque rerum nesciunt natus aliquid optio debitis nihil quidem et dolorum, quis tempore suscipit.
                Aut recusandae aperiam laboriosam vitae totam excepturi a dolorum dolorem culpa fugit ipsam nostrum non rem, magnam doloribus est, maxime officia, reiciendis cum accusamus? A vero necessitatibus quas ad minima?
                Maiores fuga repudiandae quasi recusandae. Id ad magnam velit nihil, distinctio ipsa accusantium architecto rerum, dolor optio possimus voluptatum fugiat impedit necessitatibus obcaecati hic, error nemo ea et minima? A?
                Odio accusantium quia odit hic dicta eveniet magni, delectus esse, qui laboriosam ab temporibus saepe soluta laborum possimus similique cumque dolore eligendi porro. In illum quibusdam nihil iste beatae maiores?`
            }
        ]

        return (
            <>
                <Helmet>
                    <title>Ремонт электроники в Нижнем Новгороде - iМастер | Статьи</title>
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
                                            {articlesItems.map((item, index) => {
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
                                        {articlesItems.map((item, index) => {
                                            return (
                                                <MDBTabPane
                                                    tabId={index}
                                                    role="tabpanel"
                                                    className={'fade' + (index === this.state.activeItem ? ' show' : '')}
                                                >
                                                    <MDBContainer fluid className="tabContent-section">
                                                        <MDBRow className="justify-content-center">
                                                            <MDBCol md="11" lg="10" className="text-center article-content">
                                                                <h3>{item.title}</h3>
                                                                <div className="text-left" dangerouslySetInnerHTML={{ __html: item.content }}></div>
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
