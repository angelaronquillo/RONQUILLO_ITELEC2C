function Header() {
  return (
    <div className="header d-flex align-items-center">
      <div className="flex-fill text-left">
        <img
          src="./pics/logo.png"
          alt="Papa John's Logo"
          className="logo"
          width="250"
          height="100"
        ></img>
      </div>
      <div className="row header-content">
        <div className="col">
          <div className="d-flex align-items-center">
            <img src="./pics/phone-call.png" alt="Phone Call" />
            <div>
              <p>
                <strong>CLICK TO CALL</strong>
              </p>
              <span className="dropdown">0917-187-7272</span>
              <br />
              <span className="dropdown">0919-088-7272</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center">
            <img src="./pics/resto.png" alt="Resto"></img>
            <div className="flex-fill">
              <p>
                <strong>FIND A PAPA JOHN's</strong>
              </p>
              <span className="dropdown">Near you</span>
            </div>
          </div>
        </div>
        <div className="column login">
          <div className="d-flex align-items-center">
            <div>
              <p>
                <strong>LOG IN</strong>
              </p>
              <span className="dropdown">or register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
