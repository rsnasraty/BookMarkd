import React from "react";
import { Link } from "react-router-dom";
import "./AnimalCard.css";

const AnimalCard = props => {
  return (
    <div className="Animal-card">
      <div className="card-content">
        <picture>
          <img src={props.animal.images} alt="Cat" />
        </picture>
        <h2>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h2>
        <h4> Color: {props.animal.color} </h4>
        <button
          onClick={() => {
            props.deleteAnimal(props.animal.id);
          }}
          id="delete"
        >
          Delete
        </button>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
        <button
          type="button"
          onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
