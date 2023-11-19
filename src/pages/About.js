import { Col, Container, Image } from "react-bootstrap"
import Footer from "../common/Footer"
import Header from "../common/Header"
import infoCard from "../assets/info-card-grey.svg"
import headshot from "../assets/headshot.png"
import signature from "../assets/faith-signature.svg"
import Descriptor from "../common/Descriptor"
import SinglePageColorBackground from "../common/SinglePageColorBackground"
import SinglePage from "../common/SinglePage"

const About = () => {
    return <SinglePage
        colorLeft={"#E19494"}
        colorRight={"#E4C8CD"}
        infoCardUseColor={false}
        infoCardBody={<Image src={headshot} style={{ position: "absolute", width: "100%", maxHeight: "100%", zIndex: "1", padding: "7.6041666%" }} />}
        sectionBody={
            <Descriptor
                header={<div>Hi, I'm <Image src={signature} /></div>}
                body={"I’m an Austin based Software Engineer by day and designer, artist, and creator whenever else. I’ve been making cards \
                            since I was 8 years old and love to see the joy on people’s face when opening up a personalized note. As my passion is \
                            bringing personalized touches into my designs, custom works are my specialty! Let me know how I can create my hand-painted \
                            work or print for you and your loved ones. "}
                buttonText="Let's brainstorm!"
            />
        }
    />
}

export default About