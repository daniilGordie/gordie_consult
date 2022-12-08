import './App.css'

function Design() {
    return (
        // <!-- design (start) -->
        <section class="section design" id="design">
            <div class="container">
                <div class="design-wrapper">
                    <div class="design-block">
                        <img
                            src="img/example/image-1.png"
                            alt="A 200"
                            class="feature__img design-block__img"
                            data-tabs-field="interior"
                        />
                        <img
                            src="img/example/image-2.png"
                            alt="A 200"
                            class="feature__img design-block__img hidden"
                            data-tabs-field="body"
                        />
                        <div class="design-text">
                            <h2
                                class="section__title design__title"
                                data-tabs-field="interior"
                            >
                                Портфолио&nbsp;
                            </h2>
                            <h2
                                class="section__title design__title hidden"
                                data-tabs-field="body"
                            >
                                Притягивает взгляды
                            </h2>
                            <ul class="design-list">
                                <li>
                                    <button
                                        type="button"
                                        class="design-list__item design-list__item_active"
                                        data-tabs-handler="interior"
                                        data-some-attr="attr"
                                    >
                                        Примеры сайтов
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class="design-list__item"
                                        data-tabs-handler="body"
                                    >
                                        Примеры приложений
                                    </button>
                                </li>
                            </ul>
                            {/* <!-- /.design-list --> */}
                            <ul>
                                <li
                                    class="design__descr"
                                    data-tabs-field="interior"
                                >
                                    <p class="design__description-text">
                                        Разработал больше 30 сайтов и
                                        веб-приложений разной сложности. От
                                        страниц по продаже спортивного питания
                                        до приложения для сети городских
                                        пиццерий. Подхожу к работе как ваш
                                        партнёр: делаю работу качественно, держу
                                        в курсе, сдаю вовремя, помогаю
                                        сэкономить бюджет там, где это можно
                                        сделать без потери качества.
                                    </p>
                                    <button class="more">
                                        — Узнать больше
                                    </button>
                                </li>
                                <li
                                    class="design__descr hidden"
                                    data-tabs-field="body"
                                >
                                    <p class="design__description-text">
                                        Благодаря длинной задней части, новый
                                        A-Class Sedan обладает еще лучшими
                                        аэродинамическими показателями, чем
                                        A-Class Hatchback (Cd от 0,25). С
                                        показателем 0,22 новая модель седана
                                        сравнялась с мировым рекордом CLA Coupe.
                                        A-Class Sedan имеет самое низкое
                                        аэродинамическое сопротивление среди
                                        всех серийных автомобилей в мире.
                                    </p>
                                    <button class="more">
                                        — Узнать больше
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li class="design-images" data-tabs-field="interior">
                            <img
                                src="img/design/image-1.png"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-2.png"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-3.jpg"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-4.jpg"
                                alt="A 200"
                                class="design__img"
                            />
                        </li>
                        <li class="design-images hidden" data-tabs-field="body">
                            <img
                                src="img/design/image-5.png"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-6.png"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-7.png"
                                alt="A 200"
                                class="design__img"
                            />
                            <img
                                src="img/design/image-8.jpg"
                                alt="A 200"
                                class="design__img"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Design
