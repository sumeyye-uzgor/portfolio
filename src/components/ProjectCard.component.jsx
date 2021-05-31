import React from "react"
import { Card, Button, Col } from 'react-bootstrap';
import CarouselItem from "./CarouselItem.component";

function ProjectCard({ project }) {
    return (
        // <div className="col-12 col-md-5 col-lg-5 col-xl-3" style={{ margin: "10px" }} >
        <Col sm={11} xs={11} md={5} style={{ margin: "5px" }}>
            <Card color="white" height={500}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <CarouselItem imgs={project.imgs} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                        {project.technologies}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default ProjectCard