import React from 'react'
import "./Header.scss";
import Material_00 from "../../assets/images/Material_00.png";

export default function Header(){
    return (
      <>
        <section className="Header">
          <div className="Header-logo">
            <a href="#">
              <img src={Material_00} alt=""/>
            </a>
          </div>
          <div className="Header-left" />
          <div className="Header-right">
            <div className="Header-right-content">
              <p className="Header-right-text-1">NOUVEAU</p>
              <p className="Header-right-text-2">
                Les experts démaquillants aux Herbes des Alpes
              </p>
              <p className="Header-right-text-3">
                La pureté des montagnes pour votre peau
              </p>
            </div>
          </div>
        </section>
      </>
    );
}
