import React from 'react'
import "./LaPurete.scss";

export default function LaPurete(){
    return (
      <>
        <section className="LaPurete">
          <div className="LaPurete-content">
            <p className="LaPurete-text-1">
              La pureté des Alpes : <br /> notre inspiration depuis toujours
            </p>
            <p className="LaPurete-text-2">
              La pureté des Alpes a toujours inspiré Jacques-Courtin Clarins,{" "}
              <br /> le fondateur de la marque. <br /> Aujourd’hui, Clarins va
              plus loin en cultivant et en récoltant ces herbes des Alpes <br />{" "}
              au cœur du Domaine Clarins 100% bio : des actifs naturellement
              efficaces <br /> et bons pour la peau. <br />
              Vous profitez ainsi de tous les bienfaits des Alpes, à chaque
              démaquillage !
            </p>
          </div>
        </section>
      </>
    );
}
