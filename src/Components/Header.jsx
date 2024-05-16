function Header() {
  return (
    <>
      <header className="">
        <div className="first-row p-3">
          <div className="row">
            <div className="col logo my-auto">Phoenix</div>
            <div className="col user-location d-flex align-items-center my-auto ">
              <i className="bi bi-geo-alt"></i>
              <p>
                Deliver to <br />
                <span>GHANA</span>
              </p>
            </div>
            <form className="col-xl-8 col-sm-6 my-auto" action="#" method="get">
              <div className="input-group">
                <button
                  className="btn btn-outline-secondary bg-secondary text-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Amazon Devices
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
                  <i className="bi bi-search mx-auto"></i>
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
            <div className="col">
              Hello,sign in <br />
              <span>Account Lists</span>
            </div>
            <a className="col my-auto text-reset" href="#">
              Returns <br />
              <span>& Orders</span>
            </a>
            <a className="col my-auto text-reset" href="#">
              <i className="bi bi-cart4"></i>
              <span>cart</span>
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center second-row gap-5 px-3 py-2">
          <a href="#" className="text-reset">
            <i className="bi bi-list"></i>All
          </a>
          <a href="#" className="text-reset">
            Today&apos;s Deal
          </a>
          <a href="#" className="text-reset">
            Customer services
          </a>
          <a href="#" className="text-reset">
            Registry
          </a>
          <a href="#" className="text-reset">
            Gift cards
          </a>
          <a href="#" className="text-reset">
            Sell
          </a>
        </div>
        <div className="third-row d-flex">
          <a href="#" id="amazon">
            Amazon Devices
          </a>
          <a href="#">Device Deals</a>
          <a href="#">
            Echo &amp; Alexa <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Fire Tablets <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Fire TV <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Kindle <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Connected Home <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Luna Gaming <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Day 1 Editions <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Accessories <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Pre-owned Devices <i className="bi bi-caret-down-fill"></i>
          </a>
          <a href="#">
            Trade-In <i className="bi bi-caret-down-fill"></i>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
