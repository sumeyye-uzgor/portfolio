import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { connect } from "react-redux";
import AboutMeContent from "../contents/Aboutme.content"
import myImg from "../assets/me2.jpeg"

const AboutMe = ({ language }) => {
    const content = AboutMeContent.filter(item => item.lang === language)[0]
    return (
        <Container>
            <Row className="align-items-center justify-content-center">
                <Col xs={11} md={5}>
                    <Card style={{ margin: "10px", width: "270px" }}>
                        <img variant="top" src={myImg} alt="sumeyye uzgor" />
                    </Card>
                </Col>
                <Col xs={11} md={6} className="m-10">
                    {content.desc}
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
export default connect(mapStateToProps)(AboutMe);
