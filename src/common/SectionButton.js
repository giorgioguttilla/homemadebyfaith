import { Button } from "react-bootstrap"

const color = "#00474D";

const SectionButton = ({children}) => {
    return <Button variant="outline-primary" style={{
        borderColor: color,
        backgroundColor: color
    }}>
        {children}
    </Button>
}

export default SectionButton