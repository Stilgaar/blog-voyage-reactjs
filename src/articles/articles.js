import './articles.css';
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';


function Articles(props) {
    const [likes, setLikes] = useState(0)

    return (

        <div className="body">

            <section className="corpsdumessage">

                <h2>{props.title2}</h2>

                <p >{props.corpstexte}</p>

                <Container>
                    <Row>
                        <Col>
                            <p class="laboitealike">Vous avez {likes} like</p></Col>
                        <Col>
                            <button className="bouton" onClick={() => setLikes(likes + 1)} > Lache moi un like ! </button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>

    );
}

export default Articles;