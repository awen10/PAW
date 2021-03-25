/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';

// import background from '../../images/background1.jpg';

export default function HomePage() {
  console.log('hello');
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 collapse show d-md-flex pt-2 pl-0 min-vh-100 " id="sidebar">
              <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <i className="fa fa-home" />
                    {' '}
                    <span
                      className="d-none d-sm-inline"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pt-2 text-white">
              <h2>
                <a href="/" data-target="#sidebar" data-toggle="collapse" className="d-md-none ">
                  <i
                    className="fa fa-bars"
                  />
                </a>
                {' '}
                Pagina de start
                {' '}
              </h2>
              <h6 className="hidden-sm-down text-white">-</h6>
            </div>
          </div>
        </div>
      </row>
    </body>
  );
}
