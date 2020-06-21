import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardImg
} from "reactstrap";

const InProgressCard = props => {
  return (
    <Card>
      <CardImg
        top
        width="25%"
        src="/images/inprogress.svg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>...</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default InProgressCard;
