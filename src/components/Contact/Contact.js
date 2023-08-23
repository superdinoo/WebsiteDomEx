import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container5">
        <div className="col-7">
          <div className="content5">
            <div>
              <h2>Контактная информация</h2>
            </div>
            <p>Адрес</p>
          </div>
          <div className="address">
            <p>Минаева 28 </p>
            <p>Ульяновск</p>
          </div>
          <div className="icons2">
            <FaPhone style={{ marginRight: "1rem" }} />
            <p>89278268678</p>
          </div>
          <div className="icons2">
            <FaEnvelope style={{ marginRight: "1rem" }} />
            <p>serzh.bakalov.81@mail.ru</p>
          </div>
          <div className="careers">
            <p>
              Ищите карьерный рост? <span>Наши вакансии открыты!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-8">
        <form action="">
          <input type="text" placeholder="Имя"></input>
          <input type="text" placeholder="Почта"></input>
          <input type="text" placeholder="Телефон"></input>
          <textarea
            name="Message"
            placeholder="Сообщение"
            cols={30}
            rows={10}
          ></textarea>
          <div className="checkbox">
            <input type="checkbox"></input>
            <p>
              Заполняя это поле, вы даете согласие на обработку персональных
              данных, <span>соглашаетесь с Политикой сайта </span> и{" "}
              <span>принимаете Cookie Policy</span>
            </p>
          </div>
          <button>Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
