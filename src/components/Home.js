import {
  Card,
  Container,
  CardColumns,
  CardDeck,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardHeader
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
              <CardHeader><h5>Add New</h5></CardHeader>
                <Link to="newBook ">
                  <CardImg
                    src="/images/lappelduvide.jpeg"
                    className="addNew"
                    alt="Notepad"
                    href="#"
                    id="TooltipExample"
                  />
                </Link>
                <CardTitle>L'Appel Du Vide</CardTitle>
                <CardSubtitle>Persona 5 Fanfiction by Xov</CardSubtitle>
                <CardText>
                  Art by TaiguCafe
                </CardText>
              </Card>

              {/*  /* //card 2// */}
              <Card className="home_cards">
              <CardHeader><h5>In-Progress</h5></CardHeader>
                <Link to="inProgressList">
                  <CardImg
                    src="/images/smeternaled.jpg"
                    className="inProgress"
                    alt="Open Book"
                    href="#"
                    id="TooltipExample2"
                  />
                </Link>
                <CardTitle>Sailor Moon</CardTitle>
                <CardSubtitle>Naoko Takeuchi</CardSubtitle>
              </Card>

              {/* //card 3 */}

              <Card className="home_cards">
              <CardHeader><h5>Marked for Later</h5></CardHeader>
                <Link to="markedForLaterList">
                  <CardImg
                    src="/images/letdai12.jpg"
                    className="MFLater"
                    alt="Book mark"
                    href="#"
                    id="TooltipExample3"
                  />
                </Link>
                <CardTitle>Let Dai</CardTitle>
                <CardSubtitle>Won Soo-yeon </CardSubtitle>
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
              <CardHeader><h5>Completed</h5></CardHeader>
                <Link to="completedList">
                  <CardImg
                    src="/images/elithien.jpg"
                    className="Completed"
                    alt="Stack of books"
                    href="#"
                    id="TooltipExample4"
                  />
                </Link>
                <CardTitle>Rey and Kylo</CardTitle>
                <CardText>
                  Art by Elithien
                </CardText>
              </Card>
            </CardColumns>
          </Container>
        </CardDeck>
      </div>
    </div>
  );
};

export default Home;
