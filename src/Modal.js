import './App.css'

function Modal() {
    return (
        // <!-- modal (start) -->
        <div class="modal hidden">
            <div class="overlay"></div>
            <div class="modal-wrapper">
                <h2 class="section__title modal__title">
                    Консультация по вашему сайту
                </h2>
                <p class="modal__descr">
                    Оставьте адрес электронной почты, по которому с вами можно
                    связаться
                </p>
                <button
                    type="button"
                    class="modal__close"
                    aria-label="закрыть модальное окно"
                ></button>
                <form class="form modal__form">
                    <input
                        type="text"
                        name="name"
                        class="input modal__input"
                        placeholder="Имя"
                    />
                    <input
                        type="mail"
                        name="mail"
                        class="input modal__input"
                        placeholder="Электронная почта"
                    />
                    <div class="modal-buttons">
                        <button type="submit" class="button modal__button">
                            Оставить заявку
                        </button>
                    </div>
                </form>
                {/* <!-- /.form modal__form --> */}
            </div>
        </div>
        // <!-- modal (end) -->
    )
}

export default Modal
