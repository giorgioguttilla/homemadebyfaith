import SinglePage from "../common/SinglePage"
import instaDark from '../assets/insta-dark.svg';
import instaLight from '../assets/insta-light.svg';
import mailDark from '../assets/mail-dark.svg';
import mailLight from '../assets/mail-light.svg';
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const services = [
    "Cards",
    "Menus",
    "Other",
    "Invitations",
    "gift tags",
    "Place cards",
    "Art"
]

const Contact = () => {
    const shrinkContacts = useMediaQuery({ query: '(max-width: 1020px)' })

    const infoFontSize = shrinkContacts ? "12px" : "16px"

    return <SinglePage
        colorLeft={"#83AFB3"}
        colorRight={"#C4DBE1"}
        infoCardUseColor={true}
        infoCardBody={
            <div style={{ position: "absolute", width: "100%", maxHeight: "100%", zIndex: "1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 1em" }}>
                <h1 style={{ fontFamily: "Alegreya", fontWeight: "bold", fontSize: shrinkContacts == true ? "40px" : "60px" }}>Let's chat!</h1>
                <div className='d-flex flex-row flex-nowrap w-100'>
                    <Button variant='link' style={{ width: "5em" }}>
                        <Image src={mailDark} />
                    </Button>
                    <Col>
                        <h6 style={{ fontSize: infoFontSize }}>Send me an email at</h6>
                        <a href="mailto:homemadebyfaith@gmail.com" style={{ fontWeight: "bold", fontSize: infoFontSize }}>homemadebyfaith@gmail.com</a>
                    </Col>
                </div>
                <br />
                <div className='d-flex flex-row flex-nowrap w-100'>
                    <Button variant='link' style={{ width: "5em" }}>
                        <Image src={instaDark} />
                    </Button>
                    <Col>
                        <h6 style={{ fontSize: infoFontSize }}>Find me on instagram</h6>
                        <a href="" style={{ fontWeight: "bold", fontSize: infoFontSize }}>@homemadebyfaith</a>
                    </Col>
                </div>
            </div>
        }
        sectionBody={
            <Form>
                <Form.Label aria-required={true}>Name*</Form.Label>
                <Form.Control placeholder="Type name" />
                <br/>
                <Form.Label aria-required={true}>Email*</Form.Label>
                <Form.Control type="email" placeholder="Type name" />
                <br/>
                <Form.Label aria-required={true}>Message*</Form.Label>
                <Form.Control placeholder="Type message" as={"textarea"} rows={2} />
                <br/>
                <Form.Label aria-required={true}>Services</Form.Label>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    {[1, 2, 3].map((col) => {
                        return <Col key={col}>
                            {services.slice(3 * (col - 1), 3 * col).map((serviceName, i) => {
                                return <Form.Check
                                    label={serviceName}
                                    name="group1"
                                    type="radio"
                                    id={`inline-radio-${i}`}
                                    key={i}
                                />
                            })}
                        </Col>
                    })}
                </div>
                <br/>
                <Button variant="outline-success" onClick={() => {}} style={{width: "6em"}}>Send</Button>
            </Form>
        }
    />
}

export default Contact