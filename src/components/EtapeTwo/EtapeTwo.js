import React from 'react'
import "./EtapeTwo.scss";
import Slider from "react-slick";
import Material_04 from "../../assets/images/Material_04.png";
import Material_09 from "../../assets/images/Material_09.png";
import Material_10 from "../../assets/images/Material_10.png";
import Material_11 from "../../assets/images/Material_11.png";
import Material_12 from "../../assets/images/Material_07.png";

export default function EtapeTwo(){
    const settings = {
      slidesToShow: 4,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
          }
      }]
    };
    return (
      <>
        <section className="Etape EtapeTwo">
          <p className="Etape-title">ÉTAPE 2 : NETTOYEZ</p>
          <p className="Etape-text-1">
            Une offre complète pour nettoyer la peau, éliminer les impuretés et
            particules de pollution.
            <br /> Grâce au [COMPLEXE DOUCEUR], la peau est apaisée et adoucie !
          </p>
          <div className="lextrailt">
            <div className="lextrailt-container">
              <div className="lextrailt-left"></div>
              <fieldset className="lextrailt-square">
                <legend>
                  <div>
                    <p>LE</p>
                    <span>+</span>
                  </div>
                </legend>
                <p>
                  L’extrait de Saponaire Bio, présent dans les nettoyants
                  Clarins est un agent moussant naturel, idéal pour nettoyer la
                  peau tout en douceur !
                </p>
              </fieldset>
              <div className="lextrailt-right">
                <img src={Material_04} alt />
                <p>Saponaire bio</p>
              </div>
            </div>
            <div className="Etape-text-2">
              Découvrez nos 4 nouvelles formules adaptées à tous les besoins et
              types de peaux
            </div>
          </div>
          <Slider {...settings} className="Etape-product">
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_09} alt />
              </a>
              <div className="Etape-text-3"> Lait Velours Démaquillant </div>
              <div className="Etape-text-4"> Peaux mixtes à grasses </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_10} alt />
              </a>
              <div className="Etape-text-3"> Eau Micellaire Démaquillante </div>
              <div className="Etape-text-4"> Peaux normales à sèches </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_11} alt />
              </a>
              <div className="Etape-text-3"> Huile Très Démaquillante </div>
              <div className="Etape-text-4"> Peaux très sèches ou</div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <img src={Material_12} alt />
              <div className="Etape-text-3"> Huile Très Démaquillante </div>
              <div className="Etape-text-4"> Toutes peaux </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
          </Slider>
        </section>
      </>
    );
}
