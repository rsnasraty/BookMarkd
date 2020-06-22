import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, CardBody } from "reactstrap";

const CompletedCard = props => {
  return (
    <Card
      body
      outline
      color="info"
      body
      inverse
      style={{ backgroundColor: "#333", borderColor: "#333" }}
    >
      <CardBody>
        <CardTitle tag="h2">{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>{props.readObject.readTypeId}</CardText>
        <CardText>{props.readObject.addDate}</CardText>
        <CardText>{props.readObject.link}</CardText>
        <CardText tag="h4">{props.readObject.notes}</CardText>
      </CardBody>
    </Card>
  );
};

export default CompletedCard;
