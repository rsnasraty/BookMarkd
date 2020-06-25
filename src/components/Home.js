import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <div>
      <Container>
        <Row>
          <Card body outline color="info" className="home_cards">
            <Link to="addNewReadForm">
              <img src="/images/notepad.svg" className="addNew" alt="Notepad" />
            </Link>
            <CardBody>
            </CardBody>
          </Card>

          {/*  /* //card 2// */}
          <Card body outline color="info" className="home_cards">
            <Link to="inProgressList">
              <img
                src="/images/inprogress.svg"
                max-width="50%"
                className="inProgress"
                alt="Open Book"
              />
            </Link>
            <CardBody>
            </CardBody>
          </Card>
        </Row>

        {/* //card 3 */}

        <Row>
          <Card body outline color="info" className="home_cards">
            <Link to="markedForLaterList">
              <img
                src="/images/bookmark.svg"
                max-width="50%"
                className="MFLater"
                alt="Book mark"
              />
            </Link>
            <CardBody>
            </CardBody>
          </Card>

          {/* //card 4 */}
          <Card body outline color="info" className="home_cards">
            <Link to="completedList">
              <img
                src="/images/bookblue.svg"
                max-width="50%"
                className="Completed"
                alt="Stack of books"
              />
            </Link>
            <CardBody>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
