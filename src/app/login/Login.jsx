import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute.enum';

import loginPicture from '../../assets/images/loginPicture.png'

const ErrorMessage = ({message = 'no message', show = false}) =>
    show && (
        <div className="error">{message}</div>
    );

export const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length<6) {setErrorMessages(prevState => ({...prevState, pass: {short: true}}))}
        if(name.length<5) {setErrorMessages(prevState => ({...prevState, name: {short: true}}))}
        if(name.length>15) {setErrorMessages(prevState => ({...prevState, name: {long: true}}))}
    }

    const handleOnChange = (e) => {
        if(e.target.name==="username") {
            setName(e.target.value)
            setErrorMessages(prevValue => ({...prevValue, name: {}}));
        }
        if(e.target.name==="password") {
            setPassword(e.target.value)
            setErrorMessages(prevValue => ({...prevValue, pass: {}}));
        }

    }

  return (
      <div className="loginPage">
          <div className="loginPage__image">
              <img src={loginPicture} alt="login picture"/>
          </div>
          <div className="loginPage__content">
              <header>
                  <div className="header__wrapper">
                      <div className="logo"><h1 className="logo"><Link to={AppRoute.home}>join.tsh.io</Link></h1></div>
                  </div>
              </header>
              <div className="login__wrapper">
                  <div className="login__wrapper__two">
                      <div className="login__box">
                          <div className="login__title">
                              <h2>Login</h2>
                          </div>
                          <div className="login__form">
                              <form onSubmit={handleSubmit}>
                                  <label>
                                      <h3>Username</h3>
                                      <input
                                          type="text"
                                          value={name}
                                          placeholder="Enter username"
                                          name="username"
                                          onChange={handleOnChange}
                                      />
                                      {errorMessages.name?.long  &&
                                      <ErrorMessage message="Username too long" show="true"/>}
                                      {errorMessages.name?.short &&
                                      <ErrorMessage message="Username too short" show="true"/>}
                                  </label>
                                  <label>
                                      <h3>Password</h3>
                                      <input
                                          type="password"
                                          value={password}
                                          placeholder="Enter password"
                                          name="password"
                                          onChange={handleOnChange}
                                      />
                                      {errorMessages.pass?.short &&
                                      <ErrorMessage message="Password too short" show="true"/>}
                                  </label>
                                  <div className="login__button">
                                      <input type="submit" value="Submit" className="button button--filled"/>
                                  </div>
                              </form>
                          </div>
                          <a className="login__link link--recovery">Forgot password?</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
};
