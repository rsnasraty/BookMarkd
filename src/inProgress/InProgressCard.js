import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";

const InProgressCard = props => {
  return (
    <Card body outline color="info">
      <CardTitle tag="h2">{props.readObject.title}</CardTitle>
      <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
      <CardText>{props.readObject.readTypeId}</CardText>
      <CardText>{props.readObject.addDate}</CardText>
      <CardText>{props.readObject.link}</CardText>
      <CardText tag="h4">{props.readObject.notes}</CardText>
      <Button
        color="info"
        type="button"
        onClick={() => props.deleteIPRead(props.readObject.id)}
      >
        Delete
      </Button>{" "}
    </Card>
  );
};

export default InProgressCard;
