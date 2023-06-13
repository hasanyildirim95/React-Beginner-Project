import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from "reactstrap";


function Footer() {
    return (
        <Row>
            <Col xs="3" className="Card">
                <Card
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <img src="/Images/logo.jpg" alt="resim" />

                    <CardBody>
                        <CardTitle tag="h5">
                            Galatasaray, Ankara'da Tam Kadro!
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>,
            </Col>
            <Col xs="3" className="Card">
                <Card
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <img src="/Images/logo.jpg" alt="resim" />

                    <CardBody>
                        <CardTitle tag="h5">
                            Chelsea'de Pochettino Dönemi
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>,
            </Col>
            <Col xs="3" className="Card">
                <Card
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <img src="/Images/logo.jpg" alt="resim" />

                    <CardBody>
                        <CardTitle tag="h5">
                            Haftanın Hakemleri Açıklandı
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xs="3" className="Card">
                <Card
                    color="dark"
                    outline
                    style={{
                        width: '18rem'
                    }}
                >
                    <img src="/Images/logo.jpg" alt="resim" />

                    <CardBody>
                        <CardTitle tag="h5">
                            Haftanın Hakemleri Açıklandı
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the cards content.
                        </CardText>
                        <Button>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
export default Footer;