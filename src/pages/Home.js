import { Button, Col, Container, Image, Row } from "react-bootstrap"
import Section from "../common/Section"
import Descriptor from "../common/Descriptor"
import titleBannerImage from "../assets/title-banner-img.png"

import sectionImg1 from '../assets/section-img-1.png'
import sectionImg2 from '../assets/section-img-2.png'
import sectionImg3 from '../assets/section-img-3.png'
import sectionImg4 from '../assets/section-img-4.png'
import Header from "../common/Header"
import Footer from "../common/Footer"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            <div>
                <div className="w-100" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "20em", position: "relative" }}>
                    <Image style={{ height: "100%", padding: "2em 0", width: "auto" }} src={titleBannerImage} />
                    <div style={{ position: "absolute", backgroundColor: "#00474D", width: "100%", height: "100%", opacity: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <h2 className="w-50" style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', padding: '4em 0' }}>
                            Your one stop shop for custom paper products
                        </h2>
                    </div>
                </div>

                <Section style={{ backgroundColor: "#F4F4F4" }}>
                    <Col>
                        <Image width={"100%"} style={{ padding: "0 3em" }} src={sectionImg1} />
                    </Col>
                    <Col xs={4}>
                        <Descriptor
                            header={"Cards"}
                            body={<>
                                Have a special someone that loves cowboy boots and frogs? No problem! I’ll make a custom hand-painted design just for you.
                                <br /><br />
                                I make:
                                <ul>
                                    <li>Christmas cards</li>
                                    <li>Birthday cards</li>
                                    <li>Thank you cards</li>
                                    <li>and more! </li>
                                </ul>
                            </>}
                            action={() => navigate('/contact')}
                        />
                    </Col>
                </Section>
                <Section style={{ backgroundColor: "#E4C8D0" }}>
                    <Col xs={4} style={{ paddingLeft: "4em" }}>
                        <Descriptor
                            header={"Invitations, place cards & menus"}
                            body={<>
                                Let’s throw a party! I make custom hand-painted paper products for your:
                                <ul>
                                    <li>Wedding</li>
                                    <li>Bridal shower</li>
                                    <li>Baby shower</li>
                                    <li>Dinner party </li>
                                    <li>Holiday party</li>
                                </ul>
                            </>}
                            action={() => navigate('/contact')}
                        />
                    </Col>
                    <Col>
                        <Image width={"100%"} style={{ padding: "0 1em" }} src={sectionImg2} />
                    </Col>
                </Section>
                <Section style={{ backgroundColor: "#F4F4F4" }}>
                    <Col>
                        <Image width={"100%"} style={{ padding: "0 3em" }} src={sectionImg3} />
                    </Col>
                    <Col xs={4}>
                        <Descriptor
                            header={"Gift tags"}
                            body={<>
                                I make front and back custom gift tags for your:
                                <ul>
                                    <li>Party favors</li>
                                    <li>Christmas gifts</li>
                                    <li>Birthday gifts</li>
                                    <li>Wedding gifts</li>
                                    <li>Hostess gifts</li>
                                </ul>
                            </>}
                            action={() => navigate('/contact')}
                        />
                    </Col>
                </Section>
                <Section style={{ backgroundColor: "#C8DFE4" }}>
                    <Col xs={7.5} style={{ paddingLeft: "4em" }}>
                        <Descriptor
                            header={"Got more ideas? "}
                            body={<>
                                I’ll work with you to create your exact vision.
                            </>}
                            action={() => navigate('/contact')}
                            buttonText="Contact me!"
                        />
                    </Col>
                    <Col xs={6} className="d-flex justify-content-end">
                        <div style={{ width: "60%" }}>
                            <Image width={"100%"} style={{ padding: "0 1em" }} src={sectionImg4} />
                        </div>
                    </Col>
                </Section>
            </div>
            <Footer/>
        </>
    )
}

export default Home