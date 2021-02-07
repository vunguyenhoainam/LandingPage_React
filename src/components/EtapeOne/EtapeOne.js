import React from 'react';
import Slider from "react-slick";
import "./EtapeOne.scss";
import Material_03_Left from "../../assets/images/Material_03_Left.png";
import Material_03_Right from "../../assets/images/Material_03_Right.png";
import Material_05 from "../../assets/images/Material_05.png";
import Material_06 from "../../assets/images/Material_06.png";
import Material_07 from "../../assets/images/Material_07.png";

export default function EtapeOne(){

  const settings = {
    slidesToShow: 3,
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
        <section className="Etape EtapeOne">
          <p className="Etape-title">ÉTAPE 1 : DÉMAQUILLEZ</p>
          <p className="Etape-text-1">
            Des dé maquillants qui retirent le maquillage, les impuretés et les
            traces de pollution en douceur et en respectant de la flore cutanée.
          </p>
          <div className="complexe">
            <div className="complexe-container">
              <div className="complexe-left">
                <img src={Material_03_Left} alt />
                <p>Gentiane jaune bio</p>
              </div>
              <fieldset className="complexe-square">
                <legend>
                  <div>
                    <p>LE</p>
                    <span>+</span>
                  </div>
                </legend>
                <p>
                  Le [COMPLEXE DOUCEUR], qui associe deux plantes issues du
                  Domaine Clarins : <br /> la gentiane jaune bio et la mélisse
                  bio, contribue à apaiser, calmer et adoucir la peau.
                </p>
              </fieldset>
              <div className="complexe-right">
                <img src={Material_03_Right} alt />
                <p>Mélisse bio</p>
              </div>
            </div>
            <div className="Etape-text-2">
              Découvrez nos 3 nouvelles formules adaptées à tous les maquillages
              et toutes les habitudes
            </div>
          </div>
          <Slider {...settings} className="Etape-product">
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_05} alt />
              </a>
              <div className="Etape-text-3"> Lait Velours Démaquillant </div>
              <div className="Etape-text-4">
                {" "}
                Il s’adresse aux adeptes de confort, de textures onctueuses et
                de maquillages légers. Idéal pour un démaquillage{" "}
              </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_06} alt />
              </a>
              <div className="Etape-text-3"> Eau Micellaire Démaquillante </div>
              <div className="Etape-text-4">
                {" "}
                Elle convient aux peaux sensibles <br /> ou aux adeptes de
                démaquillages <br /> légers et de textures fraîches.
                <br /> Idéale pour un démaquillage rapide.{" "}
              </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_07} alt />
              </a>
              <div className="Etape-text-3"> Huile Très Démaquillante </div>
              <div className="Etape-text-4">
                {" "}
                Elle séduit les amoureuses <br /> de maquillages intenses,
                <br /> waterproofs et de textures <br /> enveloppantes.{" "}
              </div>
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
