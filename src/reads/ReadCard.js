import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ReadCard = props => {
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

export default ReadCard;

<div>
      <Card className="Read-card" body outline color="secondary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card body outline color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="success">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="info">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="warning">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card body outline color="danger">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </div>
  );
};