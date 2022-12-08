import './App.css'

function Header() {
    return (
        <div className="Header">
            {/* header (start)  */}
            <header class="header">
                <div class="container">
                    <div class="header-wrapper">
                        <div class="header-main">
                            <a href="#main" class="logo header__logo">
                                <img
                                    src="./logo.svg"
                                    alt="Logo: A 200"
                                    class="logo__img"
                                />
                            </a>
                            {/* <!-- /.logo --> */}
                            <nav class="menu">
                                <ul class="menu-list">
                                    <li class="menu-list__item">
                                        <a
                                            href="#design"
                                            class="menu-list__link"
                                        >
                                            Портфолио
                                        </a>
                                    </li>
                                    <li class="menu-list__item">
                                        <a
                                            href="#feature"
                                            class="menu-list__link"
                                        >
                                            Цены
                                        </a>
                                    </li>
                                    <li class="menu-list__item">
                                        <a
                                            href="#contacts"
                                            class="menu-list__link"
                                        >
                                            Заказать разработку
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            {/* <!-- /.menu --> */}
                        </div>
                        {/* <!-- /.header-main --> */}
                        <a href="tel:88005437809" class="phone">
                            8 800 543 78 09
                        </a>
                        <button
                            class="humburger-menu"
                            aria-label="Бургер меню"
                        ></button>
                    </div>
                    {/* <!-- /.header-wrapper --> */}
                </div>
            </header>
            {/* <!-- header (end) --> */}
        </div>
    )
}

export default Header
