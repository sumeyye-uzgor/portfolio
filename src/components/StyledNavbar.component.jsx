import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { connect } from "react-redux"
import NavbarContent from "../contents/Navbar.content"
import "./StyledNavbar.styles.css"

function StyledNavbar({ language }) {
    const content = NavbarContent.filter(item => item.lang === language)[0]

    return (
        <Navbar sticky="top" expand="sm" className="styledNav">
            <Container>
                <Navbar.Brand href="/">SU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">{content.home}</Nav.Link> */}
                        {/* <Nav.Link href="/">SU</Nav.Link> */}
                        <Nav.Link href="/projects">{content.projects}</Nav.Link>
                        <Nav.Link href="/comments">{content.comments}</Nav.Link>
                        <Nav.Link href="/aboutme">{content.about}</Nav.Link>
                        <Nav.Link href="/contact">{content.contact}</Nav.Link>
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
export default connect(mapStateToProps)(StyledNavbar);
