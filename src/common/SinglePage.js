import { Image } from "react-bootstrap"
import Header from "./Header"
import SinglePageColorBackground from "./SinglePageColorBackground"
import Descriptor from "./Descriptor"
import Footer from "./Footer"
import infoCardGrey from "../assets/info-card-grey.svg"
import infoCardColor from "../assets/info-card-color.svg"
import headshot from "../assets/headshot.png"

const SinglePage = ({colorLeft, colorRight, infoCardUseColor = false, infoCardBody, sectionBody}) => {
    return <div className="d-flex flex-column" style={{height: "100vh"}}>
        <Header/>
        <div className="flex-grow-1" style={{position: "relative"}}>
            <SinglePageColorBackground colorLeft={colorLeft} colorRight={colorRight}/>
            <div className="d-flex" style={{position: "absolute", width: "100%", height: "100%", padding: "0 0%"}}>
                <div style={{width: "40%", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "5em", minWidth:"290px"}}>
                    <div style={{height: "60%", maxWidth: "100%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {infoCardBody}
                        <Image src={infoCardUseColor ? infoCardColor : infoCardGrey} style={{position: "relative", width: "100%", height: "100%"}}/>
                    </div>
                </div>
                <div style={{width: "60%", paddingTop: "5em", paddingLeft: "5em", paddingRight: "5em"}}>
                    <div style={{maxWidth: "35em"}}>
                        {sectionBody}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default SinglePage