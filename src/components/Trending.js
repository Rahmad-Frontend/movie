import {Card, Container, Row, Col, Image, Button} from "react-bootstrap"
import ot9 from '../components/asset/image/other/ot9.jpg'
import bg4 from '../components/asset/image/bg/bg4.jpg'
import ot8 from '../components/asset/image/other/ot8.jpg'
import sp3 from '../components/asset/image/superhero/sp3.jpg'
import sp4 from '../components/asset/image/superhero/sp4.jpg'
import sp5 from '../components/asset/image/superhero/sp5.jpg'

const Trending =()=>{
return(
    <div>
        <Container>
            <br/>
            <h1 id="trending" className="text-white font-size-15">Trending</h1>
            <Row>
                <Col md={4}className='movieWrapper'>
                        <Card className="movieImage">
            <Image src={ot9} alt="ot9" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>The Conjuring 2</Card.Title>
                <Card.Text className='text-left'>
                Duration: 120 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 3 month ago</Card.Text>
                <Card.Text>Rating: 4.8</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={bg4} alt="bg4" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Spiderman</Card.Title>
                <Card.Text className='text-left'>
                Duration: 118 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 5 month ago</Card.Text>
                <Card.Text>Rating: 4.9</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={ot8} alt="ot8" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Tarzan</Card.Title>
                <Card.Text className='text-left'>
                Duration: 80 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 years ago</Card.Text>
                <Card.Text>Rating: 4.7</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="movieImage">
            <Image src={sp3} alt="sp3" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1 text-white'>
                <Card.Title className='text-center'>KKN di desa penari</Card.Title>
                <Card.Text className='text-left'>
                Duration: 110 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 years ago</Card.Text>
                <Card.Text>Rating: 4.5</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={sp4} alt="sp4" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Hacker</Card.Title>
                <Card.Text className='text-left'>
                Duration: 97 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 2 years ago</Card.Text>
                <Card.Text>Rating: 4.9</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
                <Col md={4}className='movieWrapper'>
                        <Card className="text-white movieImage">
            <Image src={sp5} alt="sp5" className='Image'/>
            <div className='bg-dark'>
            <div className='p-2 m-1'>
                <Card.Title className='text-center'>Joker 4</Card.Title>
                <Card.Text className='text-left'>
                Duration: 143 minute
                </Card.Text>
                <Card.Text className='text-left'>Release: 1 month ago</Card.Text>
                <Card.Text>Rating: 4.5</Card.Text>
                </div>
                </div>
            </Card>
                </Col>
            </Row><Button variant="dark mt-4 mb-4">See all</Button>
        </Container>
        
       
    </div>
)
}

export default Trending