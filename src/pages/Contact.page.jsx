import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { connect } from "react-redux";
import ContactContent from "../contents/Contact.content"
import axios from 'axios';


const Contact = ({ language }) => {
    const content = ContactContent.filter(item => item.lang === language)[0]
    const [info, setInfo] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    })
    function handleChange(e) {
        const { value, name } = e.target
        setInfo(prevState => (
            {
                ...prevState,
                [name]: value,
            }
        ))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const messageBody = { ...info }
        axios.post('harmantepenaturel.com/api/contact-sumeyye', messageBody)
            .then(
                (response) => {
                    console.log(response);
                }
                , (error) => {
                    console.log(error);
                }
            )
    }
    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col xs={11} md={8}>
                    <Form>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label size="sm">{content.email}</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="email"
                                        value={info.email}
                                        name="email"
                                        placeholder={content.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label size="sm">{content.name}</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        value={info.name}
                                        name="name"
                                        placeholder={content.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label size="sm">{content.subject}</Form.Label>
                            <Form.Control
                                size="sm"
                                type="text"
                                value={info.subject}
                                name="subject"
                                placeholder={content.subject}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label size="sm">{content.message}</Form.Label>
                            <Form.Control
                                size="sm"
                                as="textarea"
                                value={info.message}
                                name="message"
                                placeholder={content.message}
                                style={{ height: '100px' }}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="light" type="button" onClick={handleSubmit}>
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