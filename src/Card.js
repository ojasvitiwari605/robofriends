import React from "react";

export default function Card({ name, email, id }) {
  return (
    <div className=" bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
      <img
        alt="robos"
        src={`https://robohash.org/${id}?200*200  `}
        height="200px"
        width="200px"
      />

      <div>
        <h2>{name}</h2>
        <p> {email}</p>
      </div>
    </div>
  );
}
