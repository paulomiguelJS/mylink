import "./menu.css";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="menu">
        <a className="social" href="https://www.paulomiguel.dev/" target="_blank">
          <img className="logoPM" src="./logopm.png" alt="Logo PM" />
        </a>
        <a className="social" href="https://www.linkedin.com/in/-paulo-miguel/" target="_blank">
          <BsLinkedin color="#fff" size={30} />
        </a>
        <Link className="menu-item" to="/links">
          My Links
        </Link>
      </div>
    </div>
  );
}

export default Menu;
