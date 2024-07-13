import React from 'react'
import PropTypes from 'prop-types'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark flex-row">
        <a className="navbar-brand mr-auto" href="/">
          <img src="//placehold.it/120x29?text=Logo" className="img-fluid" alt="Responsive image" />
        </a>
        <ul className="navbar-nav flex-row mr-lg-0">
          <li className="nav-item">
            <a className="nav-link pr-2">
              <i className="fa fa-search" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-2">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-3 mr-lg-0"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user" />
              <span className="caret" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href>
                User
              </a>
              <a className="dropdown-item" href>
                Login
              </a>
            </div>
          </li>
        </ul>
        <button
          className="navbar-toggler ml-lg-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com/go/cxXqBnGrPx">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="d-flex w-50 order-0">
          <a className="navbar-brand mr-1" href="#">
            Bootstrap 4
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsingNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          className="navbar-collapse collapse justify-content-center order-2"
          id="collapsingNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
        <span className="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">
          always show
        </span>
      </nav>

      <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center">
        <a href="/" className="navbar-brand mr-0">
          Brand
        </a>
        <button
          className="navbar-toggler ml-1"
          type="button"
          data-toggle="collapse"
          data-target="#collapsingNavbar2"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li className="nav-item">
              <a className="nav-link" href>
                <i className="fa fa-facebook mr-1" />
              </a>{' '}
            </li>
            <li className="nav-item">
              <a className="nav-link" href>
                <i className="fa fa-twitter" />
              </a>{' '}
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-dark navbar-expand-md bg-success justify-content-between">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link pl-0" href="#">
                  Home <span className="sr-only">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="//codeply.com">
                  Codeply
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
          <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">
            Brand
          </a>
          <div className="navbar-collapse collapse dual-nav w-50 order-2">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href>
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href>
                  <i className="fa fa-github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <a href="/" className="navbar-brand">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar4"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbar4">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="navbar-brand">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar5"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse justify-content-stretch" id="navbar5">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <form className="ml-3 my-auto d-inline w-100">
            <div className="input-group">
              <input type="text" className="form-control border-right-0" placeholder="..." />
              <div className="input-group-append">
                <button className="btn btn-outline-primary border-left-0" type="button">
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-dark bg-danger">
        <a href="/" className="navbar-brand">
          Brand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar6"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse justify-content-stretch" id="navbar6">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Link <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Bootstrap 4
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar7"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse justify-content-stretch" id="navbar7">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar8"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <span className="navbar-text">&nbsp</span>
        <div className="navbar-collapse collapse" id="navbar8">
          <ul className="navbar-nav abs-center-x">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Center
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                Codeply
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            Bootstrap 4
          </a>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbar9"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar9">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="//codeply.com">
                  Codeply
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar10"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar10">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="//codeply.com">
                  Codeply
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
        <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
          <a className="navbar-brand" href="#">
            Brand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarsExample11">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
        <a className="navbar-brand" href="#">
          Brand
        </a>
        <button className="btn btn-success ml-auto mr-2">Always Show</button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav text-right">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Right Link
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Right Link
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="navbar navbar-dark navbar-expand bg-primary justify-content-between">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item text-center">
              <a href="#" className="nav-link" data-toggle="modal" data-target="#">
                <span className="fa fa-map" />
                <span className="d-none d-sm-inline d-xl-block px-1">Map</span>
              </a>
            </li>
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="fa fa-list" />
                <span className="d-xl-block d-none" />
                <span className="d-none d-sm-inline px-1">Dropdown</span>{' '}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item text-center" id="signup-btn">
              <a href="#" className="nav-link" data-toggle="modal" data-target="#">
                <span className="fa fa-user" />
                <span className="d-none d-sm-inline d-xl-block px-1">Sign Up</span>
              </a>
            </li>
            <li className="nav-item text-center" id="login-btn">
              <a href="#" className="nav-link" data-toggle="modal" data-target="#">
                <span className="fa fa-sign-in" />
                <span className="d-none d-sm-inline d-xl-block px-1">Log In</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  pageData: PropTypes.object.isRequired,
}
