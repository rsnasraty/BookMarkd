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
        <Link to="src/Completed/AddNew/AddNewCard.js">
  <img src="/images/book.svg" max-width="50%" className="addNew" />
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
        <img max-width="50%" src="/images/bookmark.svg" alt="Card image cap" />
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
        <img max-width="50%" src="/images/completedbooks.svg" alt="Card image cap" />
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
        <img max-width="50%" src="/images/inprogress.svg" alt="Card image cap" />
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