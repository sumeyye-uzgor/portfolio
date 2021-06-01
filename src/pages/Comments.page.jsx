import React, { useState } from "react"
import { Container, Row, Col, Toast, Form, Button } from "react-bootstrap"
import { connect } from "react-redux";
import CommentsContent from "../contents/Comments.content"

const Comments = ({ language }) => {
    const content = CommentsContent.filter(item => item.lang === language)[0]
    const [info, setInfo] = useState({
        username: "",
        comment: "",
    })
    const [comments, setComments] = useState()

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
        console.log(info)
        console.log(comments)
        setComments(prevState => (
            prevState ? [...prevState, info] : [info]
        ))
    }
    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col xs={11} md={5}>
                    <Form>
                        <Row className="align-items-end justify-content-center">
                            <Col xs={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/* <Form.Label size="sm">{content.name}</Form.Label> */}
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        value={info.username}
                                        name="username"
                                        placeholder={content.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12}>
                                {/* <Form.Label size="sm">{content.comment}</Form.Label> */}
                                <Form.Control
                                    size="sm"
                                    as="textarea"
                                    value={info.comment}
                                    name="comment"
                                    placeholder={content.comment}
                                    style={{ height: '80px' }}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col xs={12} className="m-3">
                                <Button variant="light" type="button" onClick={(e) => handleSubmit(e)}>
                                    {content.button}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col xs={11} md={5}>
                    <h1>{content.header}</h1>
                    {comments ?
                        comments.map(
                            (comment, idx) =>
                                <Toast>
                                    <Toast.Header closeButton={false}>
                                        <strong className="me-auto">{comment.username}</strong>
                                    </Toast.Header>
                                    <Toast.Body>{comment.comment}</Toast.Body>
                                </Toast>

                        )
                        :
                        <h3>{content.emptyMessage}</h3>}
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
export default connect(mapStateToProps)(Comments);
