import { Container } from "react-bootstrap"

const Section = ({children, style}) => {
    return <div className="w-100" style={{...style, padding: '2em 0'}}>
        <Container className="d-flex flex-row" >
            {children}
        </Container>
    </div>
}

export default Section