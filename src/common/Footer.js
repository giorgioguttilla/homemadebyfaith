import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Logo from "../assets/logo-light.svg"
import Socials from "./Socials"

const Footer = () => {
    return (
        <div style={{padding: "1em 2em", backgroundColor: "#00474D", height: "5em"}}>
            <Row className="flex-nowrap justify-content-end align-items-center mb-2" style={{height: "100%"}}>
                <Image style={{width: "auto", height: "100%"}} color="#ffffff" src={Logo}/>
                <Col xs={1}><Socials dark={false}/></Col>
            </Row>
        </div>
    )
}

export default Footer