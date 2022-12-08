import './App.css'

function Contacts() {
    return (
        <section class="section contacts" id="contacts">
            <div class="container">
                <div class="contacts-wrapper">
                    <div class="contacts-form">
                        <h2 class="section__title">Заявка на разработку</h2>
                        <p class="contacts__descr">
                            Оставьте контакты, по которым я смогу с вами
                            связаться и обсудить проект
                        </p>
                        <form class="form form-test-drive">
                            <input
                                type="text"
                                class="input"
                                name="name"
                                placeholder="Имя"
                            />
                            <input
                                type="mail"
                                class="input"
                                name="mail"
                                placeholder="Электронная почта"
                            />
                            <input
                                type="text"
                                class="input"
                                name="phone"
                                placeholder="Телефон"
                            />
                            <button type="submit" class="button form__button">
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
