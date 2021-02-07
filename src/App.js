import React from 'react'
import "./assets/css/style.scss";
import Header from "./components/Header/Header";
import LaPurete from "./components/LaPurete/LaPurete";
import EtapeOne from "./components/EtapeOne/EtapeOne";
import EtapeTwo from "./components/EtapeTwo/EtapeTwo";
import LeDomaine from "./components/LeDomaine/LeDomaine";
import EtapeThree from "./components/EtapeThree/EtapeThree";
import Tout from "./components/Tout/Tout";

export default function App(){
  return (
    <section class="wrapper-landing">
      <section class="container">
        <Header/>
        <LaPurete/>
        <EtapeOne/>
        <EtapeTwo/>
        <LeDomaine/>
        <EtapeThree/>
        <Tout/>
      </section>
    </section>
  )
}
