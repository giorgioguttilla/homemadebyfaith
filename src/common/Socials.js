import { Button, Image, Row } from 'react-bootstrap';
import instaDark from '../assets/insta-dark.svg';
import instaLight from '../assets/insta-light.svg';
import mailDark from '../assets/mail-dark.svg';
import mailLight from '../assets/mail-light.svg';

const Socials = ({dark = true}) => {
    return <Row className='d-flex flex-row flex-nowrap'>
        <Button variant='link' className='flex-fill p-1'>
            <Image src={dark ? instaDark : instaLight}/>
        </Button>
        <Button variant='link' className='flex-fill p-1' onClick={() => window.location.href = "mailto:homemadebyfaith@gmail.com"}>
            <Image src={dark ? mailDark : mailLight}/>
        </Button>
    </Row>
    
}

export default Socials