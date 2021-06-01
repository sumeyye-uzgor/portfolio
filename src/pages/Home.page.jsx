import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { connect } from "react-redux";
import HomeContent from "../contents/Home.content.js"
import myImg from "../assets/foto.jpg"

const Home = ({ language }) => {
    const content = HomeContent.filter(item => item.lang === language)[0]
    return (
        <Container>
            <Row className="align-items-center justify-content-around mt-4" style={{ minWidth: "80vw" }}>
                <Col xs={11} md={5}>

                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title1}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title2}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title3}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title4}</Row>


                    <Row className="justify-content-end" style={{ fontSize: "15px" }}>
                        <Button variant="light" className="mr-2">{content.hire}</Button>
                        <Button variant="light">{content.website}</Button>
                    </Row>
                </Col>
                <Col xs={11} md={6}>
                    <Card style={{ margin: "10px", width: "250px" }}>
                        <img variant="top" src={myImg} alt="sumeyye uzgor" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
export default connect(mapStateToProps)(Home);
