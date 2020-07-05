import {
  Card,
  Container,
  CardColumns,
  CardDeck,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
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
        <CardDeck>
          <Container className="home_card_container">
            <CardColumns>
              <Card className="home_cards">
                <Link to="newBook ">
                  <CardImg
                    src="/images/lappelduvide.jpeg"
                    className="addNew"
                    alt="Notepad"
                    href="#"
                    id="TooltipExample"
                  />
                </Link>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
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
              <Card className="home_cards">
                <Link to="inProgressList">
                  <CardImg
                    src="/images/smeternaled.jpg"
                    className="inProgress"
                    alt="Open Book"
                    href="#"
                    id="TooltipExample2"
                  />
                </Link>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="TooltipExample2"
                  toggle={toggle}
                >
                  In Progress
                </Tooltip>
              </Card>

              {/* //card 3 */}

              <Card className="home_cards">
                <Link to="markedForLaterList">
                  <CardImg
                    src="/images/bookmark.svg"
                    className="MFLater"
                    alt="Book mark"
                    href="#"
                    id="TooltipExample3"
                  />
                </Link>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="TooltipExample3"
                  toggle={toggle}
                >
                  Marked For Later
                </Tooltip>
              </Card>

              {/* //card 4 */}
              <Card className="home_cards">
                <Link to="completedList">
                  <CardImg
                    src="/images/bookblue.svg"
                    className="Completed"
                    alt="Stack of books"
                    href="#"
                    id="TooltipExample4"
                  />
                </Link>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="TooltipExample4"
                  toggle={toggle}
                >
                  Completed
                </Tooltip>
              </Card>
            </CardColumns>
          </Container>
        </CardDeck>
      </div>
    </div>
  );
};

export default Home;
