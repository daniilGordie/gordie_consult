import './App.css'

function Feature(params) {
    return (
        // <!-- feature (start) -->
        <section class="section feature" id="feature">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="feature-block">
                        <h2 class="section__title feature__title">
                            Примеры цен на разработку
                        </h2>
                        <ul class="feature-list">
                            <li class="feature__item">
                                <button
                                    type="button"
                                    class="feature__link feature__link_active"
                                >
                                    <div class="feature-item-wrap">
                                        <span class="feature-item__title">
                                            Одностраничные сайты
                                        </span>
                                    </div>
                                </button>
                                {/* <!-- /.feature__link --&gt; */}
                                <ul class="feature-sub">
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Правки по вашему сайту
                                        </span>
                                        <span class="feature-sub__value">
                                            800р/час
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Разработка сайта с нуля
                                        </span>
                                        <span class="feature-sub__value">
                                            от 15000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Разработка новых страниц
                                        </span>
                                        <span class="feature-sub__value">
                                            от 5000 рублей
                                        </span>
                                    </li>
                                </ul>
                                {/* <!-- /.feature-list-sub --> */}
                            </li>
                            <li class="feature__item">
                                <button type="button" class="feature__link">
                                    <div class="feature-item-wrap">
                                        <span class="feature-item__title">
                                            Многостраничные сайты
                                        </span>
                                    </div>
                                </button>
                                <ul class="feature-sub hidden">
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Сайт под ключ
                                        </span>
                                        <span class="feature-sub__value">
                                            от 30000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Посадка готовой верстки на Wordpress
                                        </span>
                                        <span class="feature-sub__value">
                                            от 50000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Доработка дизайна страниц
                                        </span>
                                        <span class="feature-sub__value">
                                            от 4000 рублей
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li class="feature__item">
                                <button type="button" class="feature__link">
                                    <div class="feature-item-wrap">
                                        <span class="feature-item__title">
                                            Приложения
                                        </span>
                                    </div>
                                </button>
                                <ul class="feature-sub hidden">
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Разработка для iOS
                                        </span>
                                        <span class="feature-sub__value">
                                            от 60000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Разработка для Android
                                        </span>
                                        <span class="feature-sub__value">
                                            от 45000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Защита приложения
                                        </span>
                                        <span class="feature-sub__value">
                                            от 70000 рублей
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li class="feature__item">
                                <button type="button" class="feature__link">
                                    <div class="feature-item-wrap">
                                        <span class="feature-item__title">
                                            Интеграции сторонних сервисов
                                        </span>
                                    </div>
                                </button>
                                <ul class="feature-sub hidden">
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Подключение метрики
                                        </span>
                                        <span class="feature-sub__value">
                                            от 1000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Подключение textolite
                                        </span>
                                        <span class="feature-sub__value">
                                            от 1000 рублей
                                        </span>
                                    </li>
                                    <li class="feature-sub__item">
                                        <span class="feature-sub__name">
                                            Подключение чат-бота
                                        </span>
                                        <span class="feature-sub__value">
                                            от 3000 рублей
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <!-- /.feature-list --> */}
                    </div>
                    {/* <!-- /.feature-block --> */}
                </div>
                {/* <!-- /.feature-wrapper --> */}
            </div>
        </section>
        // <!-- feature (end) -->
    )
}

export default Feature
