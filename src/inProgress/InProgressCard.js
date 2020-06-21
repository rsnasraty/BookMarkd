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
import "./InProgressCard.css"; 

const InProgressCard = props => {
  return (
    <Card>
      <CardBody>
      <img src="/images/blue-open-book_icon-icons.com_49295.png" className="addNew" alt="Notepad" />
        <CardTitle>{props.readObject.title}</CardTitle>
        <CardSubtitle>{props.readObject.authorName}</CardSubtitle>
        <CardText>...</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default InProgressCard;
