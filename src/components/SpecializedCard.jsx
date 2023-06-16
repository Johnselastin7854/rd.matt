import React from "react";

import "../styles/_SpecializedCad.scss";

function SpecializedCard(props) {
  return (
    <section className="specializedcard">
      <img src={props.img} alt={props.title} />
      <div className="specializedcard__top">
        <h1 className="specializedcard__top--title">{props.title}</h1>
        <p className="specializedcard__top--description">{props.desc}</p>
      </div>
    </section>
  );
}

export default SpecializedCard;
