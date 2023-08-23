import React from "react";
import "./Hero.css";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="col-1">
            <h1>Ивестиции, которые обоготят вас</h1>
            <h1>
              <span className="secondary-color">online business</span>
            </h1>
            <p>
              Вкладывайтесь в Start-Up "Sky Sweets" и становитесь частью мировой
              команды!
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i>
                  <FaDatabase /> Staxx
                </i>
                <i>
                  <FaAsterisk /> Start AI
                </i>
                <i>
                  <FaAccusoft /> Accusoft
                </i>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Авторизоваться через: </p>
                <div className="social-login">
                  <i>
                    <FaFacebook size={20} />
                  </i>
                  <i>
                    <FaTwitter size={20} />
                  </i>
                  <i>
                    <FaGithub size={20} />
                  </i>
                </div>
                <div className="divider">
                  <p>
                    <span className="ili">Или</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="Почта" />
                  <input type="text" placeholder="Пароль" />
                </form>
                <button>Создай свой профиль</button>
              </div>
              <div className="form-footer">
                <p>
                  Регистрируясь, вы соглашаетесь с условиями и политикой нашего
                  сайта
                  <span className="secondary-color"> Условия и политика</span> и
                  <span className="secondary-color">
                    {""} Политика использования файлов cookie
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
