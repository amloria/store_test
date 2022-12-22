import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__list">
        <dl>
          <dt>Nous Accompagnons</dt>
          <dd>Vendeurs</dd>
          <dd>Dropshippers</dd>
          <dd>Grossistes</dd>
          <dd>Fabricants</dd>
          <dd>Artisans</dd>
        </dl>
        <dl>
          <dt>Qui sommes-nous ?</dt>
          <dd>À Propos</dd>
          <dd>Charte éthique & durable</dd>
          <dd>Carrières</dd>
          <dd>Presse</dd>
        </dl>
        <dl>
          <dt>Rejoignez la Communauté</dt>
          <dd>Évènements à venir</dd>
          <dd>Devenez Acheteur</dd>
          <dd>Devenez Vendeur</dd>
        </dl>
        <dl>
          <dt>Suivez-nous !</dt>
          <dd>Facebook</dd>
          <dd>Linkedin</dd>
          <dd>Twitter</dd>
          <dd>Instagram</dd>
        </dl>
      </div>
      <div className="footer__info">
        <span>© 2022 amStore</span>
        <span>Conditions d'utilisation</span>
        <span>Politique de confidentialité & RGPD</span>
      </div>
    </footer>
  );
}

export default Footer;
