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

const Home = props => {

  return (
    <div>
      <div className="home_img">
        <CardDeck>
          <Container className="home_card_container">
            <CardColumns>
              <Card className="home_cards">
                <CardHeader>
                  <h5>Add New</h5>
                </CardHeader>
                <Link to="newBook ">
                  <CardImg
                    src="/images/lappelduvide.jpeg"
                    className="addNew"
                    alt="Notepad"
                    href="#"
                  />
                </Link>
                <CardTitle>L'Appel Du Vide</CardTitle>
                <CardSubtitle>Persona 5 Fanfiction by Xov</CardSubtitle>
                <CardText>Art by TaiguCafe</CardText>
              </Card>

              {/*  /* //card 2// */}
              <Card className="home_cards">
                <CardHeader>
                  <h5>In-Progress</h5>
                </CardHeader>
                <Link to="inProgressList">
                  <CardImg
                    src="/images/smeternaled.jpg"
                    className="inProgress"
                    alt="Open Book"
                    href="#"
                  />
                </Link>
                <CardTitle>Sailor Moon</CardTitle>
                <CardSubtitle>Naoko Takeuchi</CardSubtitle>
              </Card>

              {/* //card 3 */}

              <Card className="home_cards">
                <CardHeader>
                  <h5>Marked for Later</h5>
                </CardHeader>
                <Link to="markedForLaterList">
                  <CardImg
                    src="/images/letdai10.jpg"
                    className="MFLater"
                    alt="Book mark"
                    href="#"
                  />
                </Link>
                <CardTitle>Let Dai</CardTitle>
                <CardSubtitle>Won Soo-yeon </CardSubtitle>
              </Card>

              {/* //card 4 */}
              <Card className="home_cards">
                <CardHeader>
                  <h5>Completed</h5>
                </CardHeader>
                <Link to="completedList">
                  <CardImg
                    src="/images/elithien.jpg"
                    className="Completed"
                    alt="Stack of books"
                    href="#"
                  />
                </Link>
                <CardTitle>Darkness, Take My Hand</CardTitle>
                <CardSubtitle>
                  {" "}
                  Star Wars Fanfiction by kathyswizards
                </CardSubtitle>
                <CardText> Art by Elithien</CardText>
              </Card>
            </CardColumns>
          </Container>
        </CardDeck>
      </div>
    </div>
  );
};

export default Home;
