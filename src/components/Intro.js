import {Col, Container, Row, Button} from "react-bootstrap"

const Intro =()=>{
  return(
    <div className="intro">
      <Container className="text-white d-flex justify-content-left align-item-center text-left">
        <Row>
          <Col>
          <div className="title">Nonton Bareng</div>
          <div className="title">Dimana Aja!</div>
          <div className="introButton mt-4 text-center"><Button variant="dark">See all movies</Button>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro