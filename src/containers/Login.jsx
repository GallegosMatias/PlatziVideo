import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import g from '../assets/static/g.png';
import tw from '../assets/static/tw.png';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <>
        <Header isLogin />
        <section className="login">
          <div className="login__container">
            <h2 tabindex="0">Iniciar sesión</h2>
            <form action="" className="login__container--form" onSubmit={handleSubmit}>

              <input
              name="email"
              className="input"
              aria-label="email"
              type="text"
              placeholder="Email"
              onChange={handleInput}
              />

              <input
              name="password"
              className="input"
              aria-label="password"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
              />

              <button type="submit" className="button">Ingresar</button>
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
                {' '} Registrate
              </Link>
            </p>
          </div>
        </section>
    </>

  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
