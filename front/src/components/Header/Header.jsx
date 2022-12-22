import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/" className="header__link">
          amStore
        </Link>
        <div className="header__search">
          <input
            className="header__search__input"
            placeholder="Rechercher"
            aria-label="Rechercher"
            type="text"
          ></input>
        </div>
        <ul className="header__ul">
          <li className="header__li">
            <Link to="/auth/login">
              <i className="fa-solid fa-lg fa-user"></i>
              <span>Se connecter</span>
            </Link>
          </li>
          <li className="header__li">
            <a href="/wishes">
              <i className="fa-solid fa-lg fa-heart"></i>
              <span>Liste d'envies</span>
            </a>
          </li>
          <li className="header__li">
            <a href="/cart">
              <i className="fa-solid fa-lg fa-cart-shopping"></i>
              <span>Panier</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__nav">
        <ul className="header__nav__ul">
          <li className="header__nav__li">Économie D'énergies</li>
          <li className="header__nav__li">Food & Beverages</li>
          <li className="header__nav__li">Hébergements</li>
          <li className="header__nav__li">Cosmétiques Naturels</li>
          <li className="header__nav__li">Aide & Paramètres</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
