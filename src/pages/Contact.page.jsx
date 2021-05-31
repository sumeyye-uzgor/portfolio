import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { connect } from "react-redux";
import ContactContent from "../contents/Contact.content"
// import myImg from "../assets/me2.jpeg"

const Contact = ({ language }) => {
    const content = ContactContent.filter(item => item.lang === language)[0]
    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col xs={11} md={8}>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label size="sm">{content.email}</Form.Label>
                                    <Form.Control size="sm" type="email" placeholder={content.email} />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label size="sm">{content.name}</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder={content.name} />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label size="sm">{content.subject}</Form.Label>
                            <Form.Control size="sm" type="text" placeholder={content.subject} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label size="sm">{content.message}</Form.Label>
                            <Form.Control size="sm" as="textarea" placeholder={content.message} style={{ height: '100px' }} />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            {content.button}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
export default connect(mapStateToProps)(Contact);