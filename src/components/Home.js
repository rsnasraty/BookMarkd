import React from "react";
import { Card, CardBody, CardLink, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = props => {
  return (
    <div>
    <Container>
      <Row>
        <Card className="home_cards">
          <Link to="AddNewReadForm">
            <img src="/images/notepad.svg" className="addNew" alt="Notepad" />
          </Link>
          <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>

        {/*  /* //card 2// */}
        <Card className="home_cards">
          <Link to="InProgressList">
            <img
              src="/images/inprogress.svg"
              max-width="50%"
              className="inProgress"
              alt="Open Book"
            />
          </Link>
          <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Row>

      {/* //card 3 */}

      <Row>
        <Card className="home_cards">
        <Link to="MarkedForLaterList">
            <img
              src="/images/bookmark.svg"
              max-width="50%"
              className="MFLater"
              alt="Book mark"
            />
          </Link>
          <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>

        {/* //card 4 */}
        <Card className="home_cards">
          <Link to="CompletedList">
            <img
              src="/images/completedbooks.svg"
              max-width="50%"
              className="Completed"
              alt="Stack of books"
            />
          </Link>
          <CardBody>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
