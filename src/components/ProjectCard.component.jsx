import React from "react"
import { Card, Col, Row } from 'react-bootstrap';

import CarouselItem from "./CarouselItem.component";
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Live } from "../assets/live.svg"

function ProjectCard({ project }) {
    function goToRoute(url) {
        console.log(url)
        window.open(url, '_blank');
    }
    return (
        <Col sm={11} xs={11} md={5} style={{ margin: "5px" }}>
            <Card color="white" height={500}>
                <CarouselItem imgs={project.imgs} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                        {project.technologies}
                    </Card.Text>
                    <Row className="justify-content-end mr-2">
                        <Github onClick={() => goToRoute(project.githubLink)} color="black" width="20px" height="20px" className="mr-2" style={{ cursor: "pointer" }} />
                        {
                            project.isLive ?
                                <Live onClick={() => goToRoute(project.liveLink)} color="black" width="20px" height="20px" style={{ cursor: "pointer" }} />
                                :
                                null
                        }
                    </Row>
                </Card.Body>


            </Card>
        </Col >
    )
}

export default ProjectCard