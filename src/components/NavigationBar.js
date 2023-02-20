import { Navbar, Container, Nav} from "react-bootstrap"
function NavigationBar() {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand className="logo">CINEMA</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending" className="navbar">Trending</Nav.Link>
                        <Nav.Link href="#new" className="navbar">New</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavigationBar;