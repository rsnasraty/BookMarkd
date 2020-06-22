import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";


const InProgressCard = props => {
  return (
      <Card body inverse color="info" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
        <CardTitle tag="h2">{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>{props.readObject.readTypeId}</CardText>
        <CardText>{props.readObject.addDate}</CardText>
        <CardText>{props.readObject.link}</CardText>
        <CardText tag="h4">{props.readObject.notes}</CardText>
      </Card>
  );
};

export default InProgressCard;
