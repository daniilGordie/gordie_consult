import './App.css'

function Main() {
    return (
        //  <!-- main (start) -->
        <section class="main" id="main">
            <div class="container">
                <div class="main-wrapper">
                    <div class="offer">
                        <div class="offer__text">
                            <div>
                                <h1 class="main__title">
                                    Разрабатываю веб-сайты и&nbsp;приложения
                                    для&nbsp;малого бизнеса
                                </h1>
                                <p class="main__descr">
                                    От простых страниц до больших
                                    интернет-магазинов. Сроки — от 5 дней.
                                </p>

                                <a
                                    href="#contacts"
                                    type="button"
                                    class="button main__button"
                                >
                                    Тест-драйв
                                </a>
                            </div>
                            <img
                                class="offer__photo"
                                src="img/ProdPhoto.jpg"
                                alt="Фото"
                            />
                        </div>

                        <a
                            href="#design"
                            class="main__scroll"
                            aria-label="к следующему экрану"
                        ></a>
                    </div>
                </div>
                {/* <!-- /.main-wrapper --> */}
            </div>
        </section>
        // <!-- main (end) -->
    )
}

export default Main
