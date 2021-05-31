import React, { useState } from "react"
import { Row, Col, Toast, Button } from "react-bootstrap"

function ToastNotify() {
    const [showA, setShowA] = useState(true);
    // const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    // const toggleShowB = () => setShowB(!showB);

    return (
        <Row>
            <Col xs={6}>
                <Toast show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button onClick={toggleShowA}>
                    Toggle Toast <strong>with</strong> Animation
        </Button>
            </Col>
        </Row>
    );
}

export default ToastNotify