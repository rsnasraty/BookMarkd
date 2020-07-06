import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button
} from "reactstrap";

import "./MarkedForLater.css"

const MarkedForLaterCard = props => {
  return (
    <Card >
      <CardBody>
        <CardTitle tag="h2">{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>{props.readObject.readTypeId}</CardText>
        <CardText>{props.readObject.addDate}</CardText>
        <CardText>{props.readObject.link}</CardText>
        <CardText tag="h4">{props.readObject.notes}</CardText>
        <Button
          className="delete"
          type="button"
          onClick={() => props.deleteMFLRead(props.readObject.id)}
        >
          Delete
        </Button>{" "}
        <Button
          className="edit"
          type="button"
          onClick={() =>
            props.history.push(
              `/MarkedForLaterList/${props.readObject.id}/edit`
            )
          }
        >
          Edit
        </Button>{" "}
      </CardBody>
    </Card>
  );
};

export default MarkedForLaterCard;
