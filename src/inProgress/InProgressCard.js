import React, { useState } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardImg
} from "reactstrap";
import ReadManager from "../modules/ReadManager";

const InProgressCard = props => {
  const [users, setUsers] = useState({ userId: "", statusId: "" });

  const handleFieldChange = evt => {
    const stateToChange = { ...users };
    stateToChange[evt.target.id] = evt.target.value;
    setUsers(stateToChange);
  };

  const handleUsers = e => {
    e.preventDefault();
    ReadManager.getInProgress(users.userId, users.statusId).then(
      user => {
        props.setUser(user[0].id);
      }
    );
    props.setUser(users);
    props.history.push("/InProgressCard");
  };

  return (
    <div>
      <Card>
        <CardImg
          top
          width="50%"
          src="/images/inprogress.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InProgressCard;
