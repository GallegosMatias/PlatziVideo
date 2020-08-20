import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import g from '../assets/static/g.png';
import tw from '../assets/static/tw.png';

const Login = () => (
  <section className="login">
    <div className="login__container">
      <h2 tabindex="0">Iniciar sesión</h2>
      <form action="" className="login__container--form">
        <input aria-label="email" type="text" className="input" placeholder="Email"/>
        <input aria-label="password"  type="password" className="input" placeholder="Contraseña"/>
        <button className="button">Ingresar</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="checkbox"/>Recordarme
          </label>
          <a href="/">¿Olvidaste la contraseña?</a>
        </div>
      </form>

      <section className="login__container--social-media">
        <div><img src={g} alt="Google"/>Iniciar sesión con Google</div>
        <div><img src={tw} alt="Twitter"/>Iniciar sesión con Twitter</div>
      </section>

      <p className="login__container--register">¿Aún no estás registrado?
        <Link to="/register">
          Registrate
        </Link>
      </p>
    </div>
  </section>

);

export default Login;
