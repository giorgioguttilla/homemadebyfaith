import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Logo from "../assets/logo-dark.svg"
import Socials from "./Socials"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='m-4'>
            <Row className="flex-nowrap justify-content-between align-items-center w-100">
                <Col xs={3}>
                    <Row>
                        <Image width={"100%"} src={Logo}/>
                    </Row>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Row className="d-flex justify-content-around flex-nowrap">
                        <Col><Button onClick={() => navigate('/')} variant="link">Services</Button></Col>
                        <Col><Button onClick={() => navigate('/about')} variant="link">About</Button></Col>
                        <Col><Button onClick={() => navigate('/contact')} variant="link">Contact</Button></Col>
                        <Col><Socials/></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Header