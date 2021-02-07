import React from 'react'
import "./LeDomaine.scss";
import Material_13 from "../../assets/images/Material_13.png";

export default function LeDomaine(){
    return (
      <>
        <section className="LeDomaine">
          <div className="LeDomaine-content">
            <div className="LeDomaine-logo">
              <img src={Material_13} alt />
            </div>
            <p className="LeDomaine-text-1">
              Le Domaine Clarins : <br /> un laboratoire à ciel ouvert
            </p>
            <div className="LeDomaine-intro">
              <div className="LeDomaine-video">
                <iframe
                  src="https://www.youtube.com/embed/6kH8QR9rcB8"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="LeDomaine-txt">
                <p>
                  Un site unique et préservé, niché à 1 400 mètres d’altitude au
                  cœur des Alpes où les plantes poussent au rythme des saisons.
                </p>
                <p>
                  Un véritable écrin de pureté sans pollution de l’air et des
                  sols sur lequel Clarins, élabore ses propres extraits de
                  plantes gorgés d’actifs, dont la gentiane jaune bio et mélisse
                  bio : des ingrédients purs et naturellement efficaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
