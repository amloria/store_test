import "./Banner.scss";

function Banner() {
  return (
    <section className="home">
      <div className="home__start">
        <h1>LE CATALOGUE N°1 DE PRODUITS DURABLES</h1>
        <h2>POUR TOUS VOS HÔTELS, RESTAURANTS ET CAFÉS</h2>
        <h3>Gratuit pour tous, aucun frais d'adhésion</h3>
        <div className="home__buttons">
          <button className="home__button button__buy">
            ACHETER DES PRODUITS
          </button>
          <button className="home__button button__sell">
            VENDRE DES PRODUITS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
