import { menu, socialIcons } from "../data";
import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {menu.map((item) => (
              <li>
                <a href={item.link} className="nav-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="nav-icons">
            {socialIcons.map((item) => (
              <li>
                <a href={item.link} target="_blank" className="nav-icon">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
