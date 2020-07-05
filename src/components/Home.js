import { Card, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const Home = props => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="site_wrapper">
    <div className="home_img">
      <Container className="home_card_container">
        <Row>
          <Card body outline color="info" className="home_cards">
            <Link to="addNewReadForm">
              <img
                src="/images/notepad.svg"
                className="addNew"
                alt="Notepad"
                href="#"
                id="TooltipExample"
              />
            </Link>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="TooltipExample"
              toggle={toggle}
            >
              Add A New Book
            </Tooltip>
          </Card>

          {/*  /* //card 2// */}
          <Card body outline color="info" className="home_cards">
            <Link to="inProgressList">
              <img
                src="/images/inprogress.svg"
                max-width="50%"
                className="inProgress"
                alt="Open Book"
                href="#"
                id="TooltipExample2"
              />
            </Link>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target="TooltipExample2"
              toggle={toggle}
            >
              In Progress
            </Tooltip>
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
                href="#"
                id="TooltipExample3"
              />
            </Link>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen}
              target="TooltipExample3"
              toggle={toggle}
            >
              Marked For Later
            </Tooltip>
          </Card>

          {/* //card 4 */}
          <Card body outline color="info" className="home_cards">
            <Link to="completedList">
              <img
                src="/images/bookblue.svg"
                max-width="50%"
                className="Completed"
                alt="Stack of books"
                href="#"
                id="TooltipExample4"
              />
            </Link>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen}
              target="TooltipExample4"
              toggle={toggle}
            >
              Completed
            </Tooltip>
          </Card>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Home;
