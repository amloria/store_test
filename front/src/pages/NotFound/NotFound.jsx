import { Link } from "react-router-dom";
import "./NotFound.scss";
import imgNotFound from "../../assets/404NotFound.gif";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";

function NotFound() {
  return (
    <>
      <main className="notfound__container">
        <h1>Oups ! Il semble que cette page n'existe pas OU vous devez être authentifié pour y accéder</h1>
        <img
          src={imgNotFound}
          className="notfount__img"
          alt="Page introuvable"
        />
        <div>
          <Link to="/auth/login" element={<Auth />}>
            <button className="notfound__button" type="button">
              S'identifier
            </button>
          </Link>
          <Link to="/" element={<Home />}>
            <button className="notfound__button" type="button">
              Retour à la page d'accueil
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
