import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import g from '../assets/static/g.png';
import tw from '../assets/static/tw.png';

const Register = () => (
  <section className="login">
    <div className="login__container">
      <h2 tabindex="0">Registrarse</h2>
      <form action="" className="login__container--form">
      <input aria-label="name" type="text" className="input" placeholder="Nombre"/>
      <input aria-label="email" type="text" className="input" placeholder="Email"/>
        <input aria-label="password"  type="password" className="input" placeholder="Contraseña"/>
        <button className="button">Registrarse</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="checkbox"/>Recordarme
          </label>
        </div>
      </form>

      <section className="login__container--social-media">
        <div><img src={g} alt="Google"/>Registrarse con Google</div>
        <div><img src={tw} alt="Twitter"/>Registrarse con Twitter</div>
      </section>

      <p className="login__container--register">¿Ya tenés una cuenta? 
        <Link to="/login">
          Iniciar sesión
        </Link>
      </p>
    </div>
  </section>

);

export default Register;
