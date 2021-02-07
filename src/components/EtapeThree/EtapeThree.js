import React from 'react'
import "./EtapeThree.scss";
import Slider from "react-slick";
import Material_15 from "../../assets/images/Material_15.png";
import Material_16 from "../../assets/images/Material_16.png";
import Material_17 from "../../assets/images/Material_17.png";

export default function EtapeThree(){
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
        <section className="Etape EtapeThree">
          <p className="Etape-title">ÉTAPE 3 : TONIFIEZ</p>
          <p className="Etape-text-1">
            Dernière étape du démaquillage, les lotions toniques sans alcool
            enrichies en extraits de plantes, éliminent les résidus de
            démaquillant tout en apaisant et en réconfortant la peau.
          </p>
          <div className="complexe">
            <div className="complexe-container">
              <fieldset className="complexe-square">
                <legend>
                  <div>
                    <p>LE</p>
                    <span>+</span>
                  </div>
                </legend>
                <p>
                  Le [MICROBIOTE COMPLEX] optimise l’équilibre du microbiote
                  cutané et renforce les défenses naturelles, pour une peau en
                  pleine santé.
                </p>
              </fieldset>
            </div>
            <div className="Etape-text-2">
              Découvrez nos 3 nouvelles formules fraîches pour parfaire le
              démaquillage et rééquilibrer chaque type de peau
            </div>
          </div>
          <Slider {...settings} className="Etape-product">
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_15} alt />
              </a>
              <div className="Etape-text-3"> Lotion Tonique Purifiante </div>
              <div className="Etape-text-4"> Peaux mixtes à grasses </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_16} alt />
              </a>
              <div className="Etape-text-3"> Lotion Tonique Hydratante </div>
              <div className="Etape-text-4"> Peaux normales à sèches </div>
              <div className="Etape-btn">
                <p className="Etape-text-5">
                  <a href="#">JE DÉMAQUILLE</a>
                </p>
              </div>
            </div>
            <div className="Etape-product-item">
              <a href="#">
                <img src={Material_17} alt />
              </a>
              <div className="Etape-text-3"> Lotion Tonique Apaisante </div>
              <div className="Etape-text-4">
                {" "}
                Peaux très sèches ou sensibles{" "}
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
