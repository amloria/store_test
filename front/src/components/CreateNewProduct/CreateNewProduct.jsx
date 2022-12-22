import "./CreateNewProduct.scss";
import { useState } from "react";
import axios from "axios";

const CreateNewProduct = (e) => {
  const [newProduct, setNewProduct] = useState(false);
  // const [file, setFile] = useState(null);

  const createNewProduct = (e) => {
    e.preventDefault();
    let dataProduct = new FormData(e.target);

    axios
      .post(`http://localhost:4000/api/products`, dataProduct, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        setNewProduct(false);

      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
      });
  };
  return (
    <>
      {!newProduct ? (
        <article
          className="new__card"
          onClick={() => {
            setNewProduct(true);
          }}
        >
          <button className="new__product">
            <i className="fa-solid fa-xl fa-circle-plus"></i>
            <span>Créer un produit</span>
          </button>
        </article>
      ) : (
        <article className="new__card">
          <i
            className="close fa-regular fa-lg fa-circle-xmark"
            onClick={() => {
              setNewProduct(false);
            }}
          ></i>
          <form
            className="form__new"
            onSubmit={createNewProduct}
            encType="multipart/form-data"
          >
            <input
              name="title"
              id="product-title"
              placeholder="Marque..."
              aria-label="Marque du produit"
              type="text"
            ></input>
            <input
              name="description"
              id="product-description"
              placeholder="Description..."
              aria-label="Description du produit"
              type="text"
            ></input>
            <input
              name="price"
              id="product-price"
              placeholder="Prix..."
              aria-label="Prix du produit"
              type="text"
            ></input>
            <input
              name="stock"
              id="product-quantity"
              placeholder="Quantité..."
              aria-label="Quantité d'unités'"
              type="text"
            ></input>
            <input
              id="file"
              name="image"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              // onChange={(e) => {
              //   setFile(e.target.files[0]);
              // }}
            ></input>
            <button name="post" type="submit" className="product__card__cta">
              Créer
            </button>
          </form>
        </article>
      )}
    </>
  );
};

export default CreateNewProduct;
