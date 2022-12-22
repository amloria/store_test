import "./RegionCard.scss";
import { useState, useEffect } from "react";
import newRegionImg from "../../assets/new_market.jpg";

const region_img_url = process.env.REACT_APP_REGIONS_IMG_URL;

function RegionCard() {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/regions/`, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (apiRegions) {
        if (apiRegions.ok) {
          return apiRegions.json();
        }
      })
      .then(function (regions) {
        setRegions(
          regions.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        );
      })
      .catch(function (err) {
        console.error(`Retour du serveur : ${err}`); // Show error if necessary
      });
  }, [regions]);

  return regions.map((region) => (
    <article key={region._id} className="product__card">
      <img
        src={
          region.image_url !== ""
            ? region_img_url + region.image_url
            : newRegionImg
        }
        alt={`Region ` + region.title}
        className="product__card__img"
      />
      <div className="product__card__details">
        <h4>{region.title}</h4>
        <p>Pays: {region.country}</p>
        <span>Devise: {region.currency}</span>
        <span>Tax: {region.tax}%</span>
        <button className="product__card__cta">Visiter la region</button>
      </div>
    </article>
  ));
}

export default RegionCard;
