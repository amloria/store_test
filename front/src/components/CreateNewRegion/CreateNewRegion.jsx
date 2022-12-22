import "./CreateNewRegion.scss";
import { useState } from "react";
import axios from "axios";

const CreateNewRegion = (e) => {
  const [newRegion, setNewRegion] = useState(false);
  // const [file, setFile] = useState(null);

  const createNewRegion = (e) => {
    e.preventDefault();
    let dataRegion = new FormData(e.target);

    axios
      .post(`http://localhost:4000/api/regions`, dataRegion, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(() => {
        setNewRegion(false);
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`);
      });
  };
  return (
    <>
      {!newRegion ? (
        <article
          className="new__card"
          onClick={() => {
            setNewRegion(true);
          }}
        >
          <button className="new__product">
            <i className="fa-solid fa-xl fa-circle-plus"></i>
            <span>Créer une région</span>
          </button>
        </article>
      ) : (
        <article className="new__card">
          <i
            className="close fa-regular fa-lg fa-circle-xmark"
            onClick={() => {
              setNewRegion(false);
            }}
          ></i>
          <form
            className="form__new"
            onSubmit={createNewRegion}
            encType="multipart/form-data"
          >
            <input
              name="title"
              id="region-title"
              placeholder="Nom de la région..."
              aria-label="Nom de la région"
              type="text"
            ></input>
            <input
              name="country"
              id="region-country"
              placeholder="Pays..."
              aria-label="Pays d'origin"
              type="text"
            ></input>
            {/* <input
              name="currency"
              id="currency"
              placeholder="Devise..."
              aria-label="Devise de la region"
              type="text"
            ></input> */}
            <div>
              <label htmlFor="currency">Devise: </label>
              <select name="currency">
                <option value="EUR" label="Euro">
                  Euro
                </option>
                <option value="USD" label="US dollar">
                  US Dollar
                </option>
                <option value="GBP" label="UK pound">
                  UK Pound
                </option>
                <option value="CAD" label="Canadian dollar">
                  CAD
                </option>
                <option value="ARS" label="Argentinian peso">
                  ARS
                </option>
                <option value="BRL" label="Brazilian real">
                  BRL
                </option>
                <option value="HKD" label="Hong Kong dollar">
                  HKD
                </option>
                <option value="JPY" label="Japanese yen">
                  JPY
                </option>
                <option value="LKR" label="Sri Lankan rupee">
                  LKR
                </option>
                <option value="NZD" label="New Zealand dollar">
                  NZD
                </option>
                <option value="SGD" label="Singapore dollar">
                  SGD
                </option>
              </select>
            </div>
            <input
              name="tax"
              id="region-tax"
              placeholder="TVA..."
              aria-label="Pourcentage de TVA"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
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

export default CreateNewRegion;
