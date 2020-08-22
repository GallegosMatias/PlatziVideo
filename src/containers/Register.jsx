import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import g from '../assets/static/g.png';
import tw from '../assets/static/tw.png';

const Register = props => {
    const [form, setValues] = useState({
      email: '',
      name: '',
      password: '',
    });

    const handleInput = event => {
      setValues({
        ...form,
        [event.target.name]: event.target.value
      })
    };

    const handleSubmit = event => {
      event.preventDefault();
      props.registerRequest(form);
      props.history.push('/');
    };

    return (
      <section className="login">
        <div className="login__container">
          <h2 tabindex="0">Registrarse</h2>
          <form action="" className="login__container--form" onSubmit={handleSubmit}>

          <input
            name="name"
            className="input"
            aria-label="name"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />

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

          <button className="button" type="submit">Registrarse</button>
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
};

const mapDispatchToProps = {
  registerRequest,
};


export default connect(null, mapDispatchToProps)(Register);
