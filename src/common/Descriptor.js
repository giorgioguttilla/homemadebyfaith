import { Button } from "react-bootstrap"

const Descriptor = ({header, body, action, buttonText = "Let's Chat!"}) => {
    return <>
        <h1 style={{fontFamily: "Alegreya", fontWeight: "bold"}}>{header}</h1>
        <br/>
        <h6>{body}</h6>
        <br/>
        <Button variant="outline-success" onClick={action}>{buttonText}</Button>
    </>
}

export default Descriptor