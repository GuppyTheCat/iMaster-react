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
                content: `<div class="text-center"><img src='img/articles/acer_keyboard/1_webp.webp' /></div>
                <p>Здравствуйте, уважаемый посетитель сайта i-master.tech. В данной статье я хочу рассказать про все тонкости процесса
                    замены клавиатуры на ноутбуке Acer.<br />
                    Произвести ремонт клавиатуры, то есть её замену можно и самостоятельно, имея базовый опыт и необходимые
                    инструменты.<br /><br />
                    Для самостоятельной замены клавиатуры вам потребуются:<br />
                </p>
                <ol>
                    <li>Медицинский шпатель(лопатка)</li>
                    <li>Пластиковая лопатка, либо ненужная кредитная карта</li>
                    <li>Набор отверток</li>
                    <li>Пинцет(желательно)</li>
                </ol>
                <p>
                    В каждом ноутбуке есть свои тонкости в снятии и установке новой клавиатуры, но в большинстве моделей клавиатура
                    меняется без разбора ноутбука. Например, в представленной модели Acer 5920.<br />
                    В иных случаях для снятия и установки клавиатуры вам потребуется полный разбор ноутбука, что крайне не рекомендуется
                    делать, не имея достаточного опыта.
                </p>
                <div class="card">
                    <div class="card-header">
                        Важно!
                    </div>
                    <div class="card-body">
                        Не забудьте извлечь аккумуляторную батарею и не выполняйте никакие работы, не обесточив
                        устройство.
                    </div>
                </div>
                <h4>Итак, начнем!</h4>
                <p>
                    Будь то замена клавиатуры на ноутбуке Asus либо замена клавиатуры на ноутбуке Samsung, вся процедура займет у вас не
                    более часа при аккуратном демонтаже и установке.
                </p>
                <div class="text-center"><img src='img/articles/acer_keyboard/2_webp.webp' /></div>
                <p>
                    При снятии клавиатуры на ноутбуке Acer, вам потребуется тонкий инструмент: желательно медицинская лопатка, а также
                    медицинский зонд либо что-то очень похожее на него. Нужно слегка надавить вглубь ноутбука по
                    направлению пластиковых держателей (см. фото) и параллельно немного подцепить клавиатуру, чуть приподнимая её. Не
                    бойтесь тянуть её наверх, клавиатуры зачастую очень мягкие и без проблем гнутся без риска повреждения.<br />
                    После снятия клавиатуры вы увидите единственный интерфейсный шлейф. Используйте пинцет либо тонкую отвертку для
                    изъятия шлейфа. Предварительно отодвиньте каретку в сторону экрана.
                </p>
                <div class="card">
                    <div class="card-header">
                        Внимание!
                    </div>
                    <div class="card-body">
                        При установке новой клавиатуры в корпус предварительно необходимо проверить все кнопки на
                        наличие дефектов и только потом производить установку.
                    </div>
                </div>
                <div class="text-center"><img src='img/articles/acer_keyboard/3_webp.webp' /></div>
                <h4>Могу Вас поздравить!<br/> Вы успешно произвели самостоятельный ремонт!</h4>
                <p>
                    Однако, если у вас:
                </p>
                <ul>
                    <li>Недостаточно опыта в установке клавиатуры ноутбука.</li>
                    <li>Нет нужного инструмента</li>
                    <li>Есть опасения за стоимость установки клавиатуры в СЦ</li>
                </ul>
                <p>
                    Вы можете обратиться в iМастер. Средняя стоимость замены клавиатуры в районе 800р. А срок ремонта от 10 минут.
                </p>
                <div class="card">
                    <div class="card-body">
                        При появлении любых вопросов, связанных с ремонтом вашего ноутбука или нетбука, вы всегда можете написать в
                        чат
                        на
                        сайте либо позвонить, а также написать в наш instagram.<br />
                        Если у вас нет времени на самостоятельный ремонт, самостоятельную замену клавиатуры, вы всегда можете
                        обратиться
                        ко
                        мне и произвести ремонт у специалиста с огромным опытом ремонта мобильной электроники.
                    </div>
                </div>`
            },

            {
                name: 'Замена дисплейного модуля Huawei P Smart',
                title: 'Замена дисплейного модуля смартфона Huawei P Smart 2019',
                content: `<div class="text-center"><img src='img/articles/huawei-p-smart_display/image1.webp'></div></img>
                <p>
                    В данной статье мы рассмотрим замену дисплейного модуля на примере смартфона Huawei P Smart 2019.<br />
                    Замена экрана Huawei P Smart 2019 практически идентична замене на любом другом устройстве, будь то замена
                    дисплейного модуля на смартфоне Sony, Samsung, Philips, Xiaomi, Meizu и других производителей.<br />
                    Поломка телефона, в частности повреждение дисплея это - самая частая поломка мобильных устройств. Данная
                    статья позволит вам самостоятельно произвести замену дисплейного модуля своими руками.<br />
                </p>
                <h5>Итак начнем!</h5>
                <p>
                    Для начала разберемся с необходимым инструментом и оборудованием.<br /><br />
                    Вам потребуются:
                </p>
                <ol>
                    <li>Медицинская лопатка</li>
                    <li>Скальпель</li>
                    <li>Набор отверток</li>
                    <li>Пластиковая карта либо её аналог</li>
                    <li>Скотч 3М либо клей по типу B7000 T7000 E7000, либо ему подобный</li>
                    <li>Желательна паяльная станция, сепаратор либо что-то подобное для прогрева до 250 градусов</li>
                    <li>Спирт изопропиловый, ацетон, flux-off (не использовать парфюмерную воду, алкоголь и прочие жидкости)</li>
                    <li>Ватные палочки, зубная щетка</li>
                    <li>Пластиковые прищепки либо резинки.</li>
                </ol>
                <div class="card">
                    <div class="card-header">
                        Важно!
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>Не торопитесь. Делайте все предельно аккуратно, так как шлейфы, коннекторы,
                                радиокомпоненты на системной плате хрупкие.</li>
                            <li>При вскрытии и извлечении аккумуляторной батареи не использовать металлические инструменты! При
                                повреждении АКБ
                                есть риск выхода её из строя и даже возгорание!</li>
                            <li>При разборе телефона все болты должны быть установлены именно в то место, откуда они были извлечены. Не
                                все
                                болты одинаковой длины и вы запросто можете повредить плату либо экран.</li>
                            <li>Не подключать новый дисплей либо старый при подключенной АКБ. Все делать только в обесточенном
                                состоянии. Есть
                                риск повреждения дисплея, цепи питания дисплея. Например, выгоревшей микросхемой питания подсветки из-за
                                подключения «на горячую». Как это часто бывает по незнанию. Будьте внимательны!</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Данное отступление сделано чтобы предостеречь, а не напугать вас сложностью замены. Нужно соблюдать
                    элементарные правила, и все у вас получится!
                </p>
                <div class="card">
                    <div class="card-body">
                        Если у вас появились сомнения по самостоятельной замене вы всегда можете написать в чат на сайте либо позвонить,
                        и я с радостью проконсультирую вас! Стоимость замены дисплея начинается от 600р.
                    </div>
                </div>
                <h4>Приступим!</h4>
                <p>В первую очередь необходимо извлечь сим-лоток их очень часто ломают, так что будьте внимательны.<br />
                    Далее используя пластиковую карту начинайте отгибать корпус по кругу телефона до щелчка. Щелчок говорит о том, что
                    пластиковые замки отошли от корпуса.<br /> После того как вы извлекли заднюю крышку, не спешите убирать её. Нужно
                    отключить шлейф датчика отпечатка пальца (№1 на картинке). Это можно сделать пластиковой лопаткой. Чтобы извлечь
                    его, необходимо снять металлическую защиту. Она закреплена 3-мя винтами (3 красных круга на фото). После этого
                    аккуратно извлекаем её и отключаем шлейф.<br />
                    Крышка снята!<br />
                </p>
                <div class="text-center"><img src='img/articles/huawei-p-smart_display/image2.webp'></div></img>
                <p>На фото вы видите 4 стрелки:</p>
                <ol>
                    <li>Шлейф датчика отпечатка пальца</li>
                    <li>Шлейф дисплейного модуля (экран)</li>
                    <li>Шлейф аккумуляторной батареи </li>
                    <li>Межплатный шлейф (соединяет нижнюю плату с основной материнской(системной) платой)</li>
                </ol>
                <p>Сначала нужно обесточить телефон! Далее отключаем шлейфы начиная с третьего. Далее четвертый и второй.<br />
                    Все шлейфы у нас отключены. Теперь необходимо снять АКБ(батарею).<br />
                    Для легкого извлечения батареи рекомендую вам 2-3 кубика спирта залить в любое место в корпус под батарею, используя
                    шприц. Это значительно облегчит вам её демонтаж - спирт разъест клей и вы без труда сможете её извлечь, например
                    пластиковой лопаткой (не использовать металлические инструменты)! В процессе извлечения не проткните
                    АКБ!<br /><br />
                    На фото ниже представлен телефон со снятой АКБ.
                </p>
                <div class="text-center"><img src='img/articles/huawei-p-smart_display/image3.webp'></div></img>
                <p>После снятия АКБ переворачиваем телефон и проделываем тоже самое со спиртом и шприцом - 2-3 кубика с помощью иглы
                    смело выливаем по всему дисплею в рамку между корпусом и экраном. Через 2-3 минуты клей начнет терять свои свойства,
                    и вы без труда, используя скальпель, сможете его поддеть.<br />
                    Выставляем фен на 200 градусов и прогреваем дисплей аккуратно по всему периметру в течение 30-40 секунд. Это
                    облегчит вам работу по демонтажу.
                </p>
                <div class="card">
                    <div class="card-header">
                        Важно!
                    </div>
                    <div class="card-body">
                        Не забываем отклеить шлейф дисплея с обратной стороны корпуса.
                    </div>
                </div>
                <h4>
                    Практически вся основная работа выполнена!
                </h4>
                <div class="card">
                    <div class="card-body">
                        Если у вас возникли сложности в разборе и ремонте вашего девайся iМастер всегда готов вам помочь. Я выполняю
                        ремонт любых телефонов, а замена дисплейного модуля производится с использованием профессионального
                        оборудования. Замена модуля, в среднем, производится за 1 час.
                    </div>
                </div>
                <p>После извлечения дисплея необходимо убрать остатки клея и стекла в месте установленного ранее дисплейного модуля.
                    Будьте внимательны, весь периметр установки экрана должен быть абсолютно чистым иначе при установке нового экрана,
                    если что-то попадет под него, экран может треснуть.<br />
                    Убираем все металлической лопаткой и протираем ватной палочкой, предварительно обработанной в спирте. <br />
                    Теперь мы можем производить установку нового экрана, но до этого нужно еще раз обезжирить поверхность, используя
                    щетку и спирт.<br /><br />
                    Если вы сомневаетесь в работоспособности нового экрана, рекомендую вам сначала просто подключить его, не
                    производя установку в корпус, и после полной проверки уже производить монтаж.
                </p>
                <div class="text-center"><img src='img/articles/huawei-p-smart_display/image4.webp'></div></img>
                <p>Далее берем наш клей и аккуратно наносим его по всему периметру корпуса (не допускайте попадания в технологические
                    отверстия такие как динамик, микрофон и прочие).<br />
                    После нанесения клея необходимо сразу аккуратно установить экран в корпус (не забудьте про шлейф). После того как
                    дисплей установлен ровно в корпус, его необходимо зафиксировать на 30-40 минут под давлением используя прищепки либо
                    канцелярские резинки (стянув экран), чтобы клей равномерно распределился по корпусу и высох.<br />
                    После всех проделанных операций собираем телефон в обратной последовательности и в последнюю очередь подключаем
                    батарею.<br />
                
                </p>
                <h4>Поздравляю! Телефон готов!</h4>
                <div class="text-center"><img src='img/articles/huawei-p-smart_display/image5.webp'></div></img>
                <p>Не забываем проверить все еще раз перед закрытием крышки. Например, подключить шлейф датчика отпечатка пальца.<br />
                    Если он у вас перестал работать, вероятнее всего он просто не инициализировался системой. Перезагрузите телефон.
                </p>
                <div class="card">
                    <div class="card-body">
                        iМастер всегда к вашем услугам, мы производим ремонт любой мобильной электроники.<br />
                        Замена дисплея, замена тачскрина, замена дисплейного модуля на телефонах Samsung, Xiaomi, Meizu, Sony, ZTE,
                        Iphone, Ginzu, Alcatel, Jinga Basco, Lenovo, Motorolla и многих других производителей.
                    </div>
                </div>`
            },
            {
                name: 'Замена материнской платы iPhone 6',
                title: 'Замена материнской платы iPhone 6',
                content: `<p>В данной статье мы рассмотри замену материнской (системной) платы на iPhone 6.</p>
                <div class="text-center"><img src="img/articles/iphone6-motherboard/image001.webp"/></div>
                <p>В данном примере имеется исправная плата с отпечатком пальца, которую мы будем устанавливать взамен нерабочей. <br /><br />
                    Определимся с набором необходимых инструментов:
                </p>
                <ol>
                    <li>Пинцет</li>
                    <li>Кредитная карта</li>
                    <li>Присоска Mechanic </li>
                    <li>Пластиковая лопатка</li>
                    <li>Медицинская лопатка</li>
                    <li>Отвертка крестовая 1.5х25мм</li>
                    <li>Отвертка звездочка 0.8мм</li>
                </ol>
                <div class="text-center"><img src="img/articles/iphone6-motherboard/image002.webp"/></div>
                <h4>Приступим.</h4>
                <p>Берем отвертку №7 и в нижней части телефона откручиваем 2 винта крепления дисплейного модуля. <br />
                    После этого нам необходимо снять дисплей из корпуса. Берем присоску, слегка тянем на себя и одновременно вставляем
                    пластиковуюлопатку с нижней стороны между экраном и корпусом, чуть приподнимая. Нужно, чтобы заводская проклейка
                    экрана отошла от корпуса, и тогда экран слегкостью выйдет из пазов крепления внутри корпуса. Будьте предельно
                    аккуратны, на данном этапе разбора очень легко повредить экран.
                </p>
                <div class="card">
                <div class="card-body">
                Если вы понимаете, что у вас не хватает для этого опыта, жду Вас в числе моих клиентов. С радостью помогу вам с
                ремонтом вашего устройства. Замена платы обойдется вам от 600 рублей и займет примерно час.
                <br />
                Если же вы все таки решились делать ремонт самостоятельно идем дальше.
                </div>
            </div>
                <div class="text-center"><img src="img/articles/iphone6-motherboard/image003.webp"/></div>
                <p>После того как мы с вами сняли экран, необходимо снять все защитные экраны под болтами и крепление платы в корпус.
                    <br />
                    Рекомендую вам не путать винты и раскладывать их в строгой последовательности. Все винты в телефоне разные и очень
                    часто получается так, что можно поставить болт большей длины, чем предусмотрено конструкцией, и в последствии вам
                    придется искать «как отремонтировать пробитую гильзу», «провернул плату винтом, что делать» и «сколько стоит ремонт
                    платы после неудачной замены на iPhone”.
                </p>
                <div class="text-center"><img src="img/articles/iphone6-motherboard/image004.webp"/></div>
                <p>Откручиваем винты, как показано на фото. Убираем защитные экраны и отключаем коннекторы от платы пластиковой
                    лопаткой. Помним правило - всегда отключаем коннектор АКБ. Он находится под пластиной с двумя винтами.</p>
                <div class="text-center"><img src="img/articles/iphone6-motherboard/image005.webp"/></div>
                    <p>На фото показаны все винты, которые необходимо открутить. Раскладывайте их в той же последовательности, чтобы не
                        перепутать при сборке. <br />
                        Извлекаем остальные винты и не забываем про сим-лоток. <br />
                        Снимаем камеру, теперь она не зафиксирована. <br />
                        Все коннекторы аккуратно отключаем пластиковой лопаткой либо пинцетом.
                    </p>
                    <div class="text-center"><img src="img/articles/iphone6-motherboard/image006.webp"/></div>
                    <div class="text-center"><img src="img/articles/iphone6-motherboard/image007.webp"/></div>
                    <p>Аккуратно извлекаем системную плату. Убедитесь, что все винты крепления сняты и шлейфы отключены. <br />
                        Устанавливаем нашу новуюсистемную плату и собираем все в обратной последовательности. <br />
                        После того как все винты находятся на своих местах, переходим к дисплейному модулю.
                    </p>
                    <div class="text-center"><img src="img/articles/iphone6-motherboard/image008.webp"/></div>
                    <p>
                        Нам необходимо поменять кнопку «Домой», иначе старая кнопка работать у нас не будет также как и функция Touch
                        ID.
                        <br />
                        Кнопка имеет прямую привязку к процессору телефона и поменять её на другую у нас не получится.<br />
                        Отключайте кнопку аккуратно, не повредите шлейф. <br />
                        После установки новой кнопки подключаем экран, закрепляем его защитным экраном и только потом подключаем АКБ. Не
                        забывайте, все действия проводить только на обесточенном телефоне.<br />
                        Теперь практически всё готово.
                    </p>
                    <div class="text-center"><img src="img/articles/iphone6-motherboard/image009.webp"/></div>
                    <p>Наш телефон включился и работает исправно. <br />
                        Устанавливаем дисплейный модуль в корпус, закручиваем винты крепления и пользуемся практически новым телефоном,
                        ведь
                        мы поменяли всё его содержимое.</p>
                        <div class="card">
                <div class="card-body">
                iМастер выполняет ремонт любой сложности и производит замену любых системных плат на iPhone. Замена
                            системной
                            платы на iPhone 6 обойдется вам от 600р. Замена платы на телефоне процедура не из легких и нужно обладать
                            хотя
                            бы базовыми навыками для этой процедуры.
                </div>
            </div>`
            },
            {
                name: 'Замена дисплея, тачскрина на Samsung Galaxy J2 Prime',
                title: 'Замена дисплея, сенсорного стекла (тачскрина) на Samsung Galaxy J2 Prime',
                content: `<p>В этой статье мы рассмотрим замену дисплея и сенсорного стекла (тачскрина) на примере смартфона Samsung Galaxy J2
                Prime.</p>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image001.webp"/></div>
            <p>Процедура достаточно простая и не потребует большого количества оборудования и инструментов. <br /><br />
                Нам потребуются:</p>
            <ol>
                <li>Щетка</li>
                <li>Кредитная карта либо её аналог</li>
                <li>Ватные палочки</li>
                <li>Клей T7000 либо его аналоги</li>
                <li>Медицинская лопатка</li>
                <li>Скальпель</li>
                <li>Отвертки</li>
                <li>Спирт изопропиловый</li>
                <li>Термофен (паяльная станция)</li>
            </ol>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image002.webp"/></div>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image003.webp"/></div>
            <h4>Итак, приступим</h4>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image004.webp"/></div>
            <p>Снимаем заднюю крышку, отключаем батарею и видим пластиковую заглушку. Берем лопатку и аккуратно поддеваем заглушку с
                правой стороны. Она служит для отключения дисплея при разборе телефона. Отключаем коннектор дисплея медицинской
                лопаткой либо скальпелем. Будьте аккуратны и не повредите компоненты на системной плате.</p>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image005.webp"/></div>
            <p>Откручиваем все винты. Их можно сложить вместе. При сборке вы не сможете их перепутать так как они все одинаковы.</p>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image006.webp"/></div>
            <p>Ну а теперь самое интересное - нам нужно избавиться от поврежденного дисплея и тачскрина. Особая аккуратность не
                требуется, запчасти уже повреждены и мы сможем быстро их извлечь, не опасаясь за их работоспособность.<br />
                Выставляем температуру фена на 250 градусов и аккуратно прогреваем экран по кругу в течении 1-2 минут. Наша задача —
                максимально нагреть сенсорное стекло и разогреть клей, для того чтобы без особых усилий извлечь тачскрин. <br />
                После прогрева берем скальпель и аккуратно поддеваем сенсорное стекло, приподнимая вверх. Далее проделываем тоже
                самое с дисплеем. Все достаточно просто. Самое главное - не торопиться и делать все предельно аккуратно.
            </p>
            <p>На фотографии видно, что должно получиться после снятия поврежденных деталей.</p>
            <p>Далее берем щетку и изопропиловый спирт и обезжириваем рамку, в которой ранее был установлен тачскрин. Не забываем
                удалять остатки клея. <br />
                Берем ватные палочки и проделываем тоже самое. Нам нужно полностью убрать остатки клея для установки новых деталей.
                <br />
                Берем наш новый дисплей и тачскрин. Удаляем транспортировочные пленки и устанавливаем дисплей на тачскрин как
                показано на фото ниже.
            </p>
            <div class="card">
            <div class="card-header">
            Внимание!
                </div>
                <div class="card-body">
                Дисплей необходимо устанавливать с такими же отступами как и на старом дисплее, иначе он не
                влезет в корпус.
                </div>
            </div>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image007.webp"/></div>
            <p>Подключаем шлейф тачскрина в коннектор который расположен на дисплее. </p>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image008.webp"/></div>
            <p>
                Устанавливаем аккуратно наш новый дисплей и сенсорное стекло в корпус и подключаем к плате. <br />
                Проверяем все ли у нас работает и собираем в обратной последовательности.
            </p>
            <div class="text-center"><img src="img/articles/galaxy-j2-prime_display-touchscreen/image009.webp"/></div>
            <div class="card">
                <div class="card-body">
                Процесс замены дисплея, тачскрина либо сенсорного модуля практически ничем не отличается от других моделей
                    Samsung. Самое главное это - наличие инструмента и желание произвести ремонт самостоятельно. <br />
                    Но не забывайте - если у вас нет желания либо опыта, лучше доверить работу специалисту. iМастер производит
                    ремонт телефонов по доступным ценам, от 600р и сроком ремонта не более часа.
                </div>
            </div>`
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
