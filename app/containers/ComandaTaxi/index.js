/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';
import history from '../../utils/history';

// import background from '../../images/background1.jpg';

export default function ComandaTaxi() {
  return (
    <body>
      <row>
        <nav className="navbar navbar-expand-md top" id="example2" role="navigation">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} width="100" height="100" alt="" />
            </a>
            <div className="collapse navbar-collapse " id="exCollapsingNavbar">
              <ul className="nav navbar-nav">
                <li className="nav-item"><a href="/despre" className="nav-link text-white"><h5>Despre</h5></a></li>
                <li className="nav-item"><a href="/comanda-taxi" className="nav-link text-white"><h5>Comanda taxi</h5></a></li>
                <li className="nav-item"><a href="/angajare" className="nav-link text-white"><h5>Angajare</h5></a></li>
                <li className="nav-item"><a href="/contact" className="nav-link text-white"><h5>Contact</h5></a></li>
              </ul>
              <span className="nav-item ml-auto "><a href="/logare" className="nav-link text-white">Logare</a></span>
              <span className="nav-item "><a href="/inregistrare" className="nav-link text-white">Inregistreaza-te</a></span>
            </div>
          </div>
        </nav>
      </row>
      <row>
        <div className="container" id="comanda">
          <p className="font-weight-bold">
            <h3 className="text-center text-white ">Comanda un taxi</h3>
          </p>
          <div className="form-group mt-5" id="comanda1">
            <label htmlFor="username" className="text-white text-center">
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
          <div className="form-group" id="comanda1">
            <label htmlFor="username" className="text-white text-center">
              Numar de telefon:
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Numar de telefon"
            />
          </div>
          <div className="form-group" id="comanda1">
            <label htmlFor="username" className="text-white text-center">
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
          <div className="row">
            <div className="col-sm">
              <p className="font-weight-bold">
                <h5 className="text-center text-white ml-3 ">Locatie curenta:</h5>
              </p>
              <div className="form-group ml-5">
                <div className="form-group">
                  <label htmlFor="username" className="text-white">
                    Cartier:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Cartier"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="text-white text-center">
                    Strada:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Strada"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="text-white text-center">
                    Detalii adresa:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Nr strada,bloc,scara"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="form-group" id="nota">
                <label htmlFor="exampleFormControlTextarea1" className="text-white">*Alte detalii</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
              </div>
              <div className="text-white">
                <h6>Campurile cu * nu sunt obligatorii</h6>
              </div>
            </div>
            <div className="col-sm">
              <p className="font-weight-bold">
                <h5 className="text-center text-white mr-5 ">Destinatie:</h5>
              </p>
              <div className="form-group mr-5">
                <div className="form-group">
                  <label htmlFor="username" className="text-white">
                    Cartier:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Cartier"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="text-white text-center">
                    Strada:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Strada"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="text-white text-center">
                    Alte detalii:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Nr strada,bloc,scara"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group ml-5">
            <br />
            <input
              type="submit"
              name="submit"
              className="btn btn-info btn-md btn btn-light"
              value="Finalizeaza comanda"
              onClick={() => history.push('/')}
            />
          </div>
        </div>
      </row>
    </body>
  );
}
