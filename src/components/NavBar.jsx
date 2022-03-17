import "../styles/mainStyle.css";


const NavBar = () => {
  return <div className="NavBar">
      <nav>
          <ul>
              <li><a href="#">our stories</a></li>
              <li><a href="#">our work</a></li>
              <li><a href="#">about us</a></li>
              <li><a href="#">get involved</a></li>
          </ul>
      </nav>


      <button id="donteBtn" className="btn">
          <h3>donate</h3>
      </button>
  </div>;
};

export default NavBar;
