import React from 'react';
import {
  Card, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row
} from 'reactstrap';
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = (props) => {
  return (
    <div>
    <Container>
    <Row>
      <Card className="home_cards">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <Link to="src/AddNew/AddNewCard.js">
  <img src="/images/notepad.svg" max-width="50%" className="addNew" alt="Notepad" />
</Link>
        <CardBody>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
     {/*  /* //card 2// */ }
     <Card className="home_cards">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <Link to="src/inProgress/InProgressCard.js">
  <img src="/images/inprogress.svg" max-width="50%" className="inProgress" alt="Open Book" />
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
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <Link to="src/markedForLater/MarkedForLaterCard.js">
  <img src="/images/bookmark.svg" max-width="50%" className="MFLater" alt="Book mark" />
</Link>
        <CardBody>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>

      {/* //card 4 */}
      <Card className="home_cards">
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <Link to="src/Completed/CompletedCard.js">
  <img src="/images/completedbooks.svg" max-width="50%" className="Completed" alt="Stack of books" />
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