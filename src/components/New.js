import {Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import ot7 from '../components/asset/image/other/ot7.jpg'
import new2 from '../components/asset/image/other/new2.jpg'
import new3 from '../components/asset/image/other/new3.jpg'
import new4 from '../components/asset/image/other/new4.jpeg'
import new5 from '../components/asset/image/other/new5.jpg'
import new6 from '../components/asset/image/other/new6.jpg'

const New =()=>{
return(
    <div>
        <Container>
            <br/>
            <h1 id="new" className="text-white">New</h1>
            <Row>
                <Col md={4}className='movieWrapper' >
                        <Card className="movieImage">
            <Image src={ot7} alt="ot9" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Scream</Card.Title>
                <Card.Text className='text-left'>
                Duration: 120 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 3 month ago</Card.Text>
                <Card.Text>Rating: 4.5</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={new2} alt="bg4" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Mulan</Card.Title>
                <Card.Text className='text-left'>
                Duration: 118 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 month ago</Card.Text>
                <Card.Text>Rating: 4.7</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={new3} alt="ot8" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Plane</Card.Title>
                <Card.Text className='text-left'>
                Duration: 80 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 month ago</Card.Text>
                <Card.Text>Rating: 4.8</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="movieImage">
            <Image src={new4} alt="sp3" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>Mindcage</Card.Title>
                <Card.Text className='text-left'>
                Duration: 110 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 month ago</Card.Text>
                <Card.Text>Rating: 4.6</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={new5} alt="sp4" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>The call of The Wind</Card.Title>
                <Card.Text className='text-left'>
                Duration: 97 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 2 month ago</Card.Text>
                <Card.Text>Rating: 4.9</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={new6} alt="sp5" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Alena</Card.Title>
                <Card.Text className='text-left'>
                Duration: 143 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 month ago</Card.Text>
                <Card.Text>Rating: 4.7</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
            </Row><Button variant="dark mt-4 mb-4">See all</Button>
        </Container>
       
    </div>
)
}

export default New