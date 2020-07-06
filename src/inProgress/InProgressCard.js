import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
  CardBody
} from "reactstrap";
import "./inProgressCard.css"

const InProgressCard = (props) => {
  return (
    <div className=".IpCard">
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
          onClick={() => props.deleteIPRead(props.readObject.id)}
        >
          Delete
        </Button>{" "}
        <Button
          className="edit"
          type="button"
          onClick={() =>
            props.history.push(`/InProgressList/${props.readObject.id}/edit`)
          }
        >
          Edit
        </Button>
        {""}
      </CardBody>
    </Card>
    </div>
  );
};

export default InProgressCard;
