import React from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { connect } from "react-redux"
import NavbarContent from "../contents/Navbar.content"
import "./StyledNavbar.styles.css"

import { setLanguage } from "../redux/actions"
import { ReactComponent as Turkish } from "../assets/tr.svg"
import { ReactComponent as English } from "../assets/usa.svg"


function StyledNavbar({ language, setLanguage }) {
    const content = NavbarContent.filter(item => item.lang === language)[0]
    const handleChange = (inputLang) => {
        setLanguage(inputLang)
    }
    return (
        <Navbar sticky="top" expand="sm" className="styledNav">
            <Container>
                <Navbar.Brand href="/">SU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/projects">{content.projects}</Nav.Link>
                        <Nav.Link href="/comments">{content.comments}</Nav.Link>
                        <Nav.Link href="/aboutme">{content.about}</Nav.Link>
                        <Nav.Link href="/contact">{content.contact}</Nav.Link>
                        <Nav.Link href="/contact">{content.contact}</Nav.Link>
                        <Button className="p-0 customButton" onClick={() => handleChange("TR")}><Turkish width="30px" height="20px" /></Button>
                        <Button className="p-0 customButton" onClick={() => handleChange("EN")}><English width="30px" height="20px" /></Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
const mapDispatchToProps = dispatch => {
    return {
        setLanguage: (lang) => dispatch(setLanguage(lang))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StyledNavbar);
