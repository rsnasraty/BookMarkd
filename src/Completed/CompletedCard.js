import React from "react";
import { Card, CardText, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";

const CompletedCard = props => {
  return (
    <Card
      body
      outline
      color="info"
    >
      <CardBody>
        <CardTitle tag="h2">{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>{props.readObject.readTypeId}</CardText>
        <CardText>{props.readObject.addDate}</CardText>
        <CardText>{props.readObject.link}</CardText>
        <CardText tag="h4">{props.readObject.notes}</CardText>
        <Button color="info" type="button" onClick={() => props.deleteCompletedRead(props.readObject.id)}>Delete</Button>{' '} 
      </CardBody>
    </Card>
  );
};

export default CompletedCard;
