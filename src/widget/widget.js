import './widget.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


function Widgets(props) {
    return (
        <div className="barre">
            <h2>{props.title2}</h2>

            <Container>
                <Col>
                    
                    <Row>
                        <Card  style={{ width: '15rem' }}>
                        <p className="textes">{props.texte}</p>
                            <Card.Img variant="top" src="./image/téléchargement.svg" />
                            <Card.Body>
                                <Card.Text> Rejoins nous sur Facebook</Card.Text>
                                <Button variant="primary">Like Here</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        
                        <Card style={{ width: '15rem' }}>
                        <p className="textes">{props.texte1}</p>
                            <Card.Img variant="top" src="./image/téléchargement.svg" />
                            <Card.Body>
                                <Card.Text> #InstaNow</Card.Text>
                                <Button variant="primary">#InstaLike</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        
                        <Card style={{ width: '15rem' }}>
                        <p className="textes">{props.texte3}</p>
                            <Card.Img variant="top" src="./image/téléchargement.svg" />
                            <Card.Body>
                                <Card.Text> Vois notre Pinterest !</Card.Text>
                                <Button variant="primary">#InstaLike</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </div>
    );

}

export default Widgets;