import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button
} from "reactstrap";

const CompletedCard = props => {
  return (
    <Card>
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
          onClick={() => props.deleteCompletedRead(props.readObject.id)}
        >
          Delete
        </Button>{" "}
        <Button
          className="edit"
          type="button"
          onClick={() =>
            props.history.push(`/CompletedList/${props.readObject.id}/edit`)
          }
        >
          Edit
        </Button>{" "}
        {props.readObject.file}
      </CardBody>
    </Card>
  );
};

export default CompletedCard;
