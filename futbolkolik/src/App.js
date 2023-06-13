import React from "react";
import Header from "./Header"
import Fixtures from "./Fixtures"
import Scorboard from "./Scorboard";
import News from "./News";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";



function App() {
  const teams = [
    { name: 'Galatasaray', matches: '33', points: '79', avarage: '47' },
    { name: 'Fenerbahçe', matches: '33', points: '74', avarage: '43' },
    { name: 'Beşiktaş', matches: '34', points: '74', avarage: '39' },
    { name: 'Adana Demir', matches: '33', points: '63', avarage: '29' },
    { name: 'Başakşehir', matches: '33', points: '53', avarage: '11' },
    { name: '...', matches: '...', points: '...', avarage: '...' },
  ];
  const matches = [    
    { home: 'Hatay', versus: "vs" , away: 'Ümraniye' },
    { home: 'Başakşehir', versus: "vs" , away: 'Gaziantep FK' },
    { home: 'Fenerbahçe', versus: "vs" , away: 'Antalyaspor' },
    { home: 'Ankaragücü', versus: "vs" , away: 'Galatasaray' },
    { home: 'Giresunspor', versus: "vs" , away: 'Trabzonspor' },
    { home: '...', versus: "vs", away: '...', },
  ];

  return (
    <Container>
      <Row>

          <Header />

        <Col xs="5">
          <Fixtures matches={matches} />
        </Col>
        <Col xs="7">
          <Scorboard teams={teams} />
        </Col>
        <News />
        <Footer/>
      </Row>
    </Container>
  );
}

export default App;
