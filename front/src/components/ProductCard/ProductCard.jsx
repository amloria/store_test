import "./ProductCard.scss";
import { useState, useEffect } from "react";
import newProductImg from "../../assets/new_product.jpeg";

const product_img_url = process.env.REACT_APP_PRODUCTS_IMG_URL;

const token = localStorage.getItem("token");

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/`, {
      headers: {
        authorization: "Bearer " + token,
      },
    })
      .then(function (apiProducts) {
        if (apiProducts.ok) {
          return apiProducts.json();
        }
      })
      .then(function (products) {
        setProducts(
          products.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        );
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`); // Show error if necessary
      });
  }, [products]);

  const addToCart = () => {
    console.log("Added to cart !");
  };

  return products.map((product) => (
    <article key={product._id} className="product__card">
      <img
        src={
          product.image_url !== ""
            ? product_img_url + product.image_url
            : newProductImg
        }
        alt="Produit en vente"
        className="product__card__img"
      />
      <div className="product__card__details">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <span>Prix: {product.price} €</span>
        <span>Stock: {product.stock} unitées</span>
        <button className="product__card__cta" onClick={addToCart}>
          Ajouter au panier
        </button>
      </div>
    </article>
  ));
}

export default ProductCard;
