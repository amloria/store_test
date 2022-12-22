import "./Home.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import RegionCard from "../../components/RegionCard/RegionCard";
import Banner from "../../components/Banner/Banner";
import WhyUs from "../../components/WhyUs/WhyUs";
import CreateNewProduct from "../../components/CreateNewProduct/CreateNewProduct";
import CreateNewRegion from "../../components/CreateNewRegion/CreateNewRegion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="section__products">
        <h2>Découvrez nos produits</h2>
        <div className="products__container">
          <ProductCard />
          <CreateNewProduct />
        </div>
      </section>
      <section className="section__shops">
        <h2>Découvrez nos régions</h2>
        <div className="shops__container">
          <RegionCard />
          <CreateNewRegion />
        </div>
      </section>
      <WhyUs />
      <Footer />
    </>
  );
}

export default Home;
