/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';
import history from '../../utils/history';

export default function Register() {
  return (
    <>
      <body>
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action="" method="post">
                    <p className="font-weight-bold">
                      <div className="float-right">
                        <a className="navbar-brand" href="/">
                          <img src={logo} width="70" height="70" alt="" />
                        </a>
                      </div>
                      <br />
                      <h3 className="text-center text-white ml-xl-5">Inregistreaza-te</h3>
                    </p>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">
                        Nume:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Nume"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">
                        Prenume:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Prenume"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">
                        Nume de utilizator:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Nume de utilizator"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">
                        E-mail:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="text-white">
                        Numar de telefon:
                      </label>
                      <br />
                      <input
                        type="number"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Numar de telefon"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">
                        Parola:
                      </label>
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Parola"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-white">
                        Repeta parola:
                      </label>
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Repeta parola"
                      />
                    </div>
                    <div className="form-group">
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md btn btn-light"
                        value="Trimite"
                        onClick={() => history.push('/')}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
