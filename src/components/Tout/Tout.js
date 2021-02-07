import React from 'react';
import "./Tout.scss";
import Material_18 from "../../assets/images/Material_18.png";

export default function Tout(){
    return (
      <>
        <section className="Tout">
          <div className="Tout-container">
            <div className="Tout-content">
              <div className="Tout-content-header">
                <p>
                  Tout comprendre
                  <br />
                  sur le microbiote
                </p>
                <img src={Material_18} alt />
              </div>
              <div className="Tout-content-text-1">
                <p>
                  Chaque individu possède son propre microbiote cutané, un
                  écosystème qui vit à la surface et dans les couches
                  superficielles de l’épiderme. En tout, il existe 1000
                  milliards de bactéries, dont l’équilibre agit sur l’apparence
                  de la peau.
                </p>
              </div>
              <div className="Tout-content-text-1">
                <p>
                  Les produits cosmétiques non adaptés, un démaquillage agressif
                  et la pollution peuvent le déséquilibrer. La peau devient plus
                  inconfortable, perd en éclat et présente des rougeurs et
                  imperfections.
                </p>
                <span>
                  Si le microbiote cutané est équilibré, la peau l’est aussi :
                  elle est belle et saine.
                </span>
              </div>
            </div>
            <div className="Tout-iframe">
              <iframe
                src="https://www.youtube.com/embed/6kH8QR9rcB8"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </>
    );
}
