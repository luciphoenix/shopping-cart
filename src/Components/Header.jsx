function Header() {
  return (
    <>
      <header className="px-3">
        <div className="">
          <div className="row">
            <div className="col logo my-auto">Phoenix</div>
            <div className="col user-location d-flex align-items-center my-auto ">
              <i className="bi bi-geo-alt"></i>
              <p>
                Deliver to <br />
                <span>GHANA</span>
              </p>
            </div>
            <form className="col-8 my-auto" action="#" method="get">
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                />
                <button className="input-group-text p-0" id="basic-addon2">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <div className="dropdown col my-auto">
              <button
                className="btn btn-secondary dropdown-toggle language"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/image.png" alt="" /> EN
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <a className="col my-auto" href="#">
              Returns <br /> & Orders
            </a>
            <a className="col my-auto" href="#">
              <i className="bi bi-cart4"></i>cart
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
