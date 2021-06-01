import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import HomeContent from "../contents/Home.content.js"
import myImg from "../assets/foto.jpg"
import { setSubject } from "../redux/actions"

const Home = ({ language, history, setSub }) => {
    const content = HomeContent.filter(item => item.lang === language)[0]
    const handleHireClick = () => {
        setSub(content.hire)
        history.push("/contact")
    }
    const handleWebsiteClick = () => {
        setSub(content.website)
        history.push('/contact')

    }
    return (
        <Container>
            <Row className="align-items-center justify-content-around mt-4" style={{ minWidth: "80vw" }}>
                <Col xs={11} md={5}>

                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title1}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title2}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title3}</Row>
                    <Row className="justify-content-end" style={{ fontSize: "45px" }}>{content.title4}</Row>


                    <Row className="justify-content-end" style={{ fontSize: "15px" }}>
                        <Button variant="light" className="mr-2" onClick={() => handleHireClick()}>{content.hire}</Button>
                        <Button variant="light" onClick={() => handleWebsiteClick()}>{content.website}</Button>
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
const mapDispatchToProps = (dispatch) => {
    return {
        setSub: (subject) => dispatch(setSubject(subject))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
