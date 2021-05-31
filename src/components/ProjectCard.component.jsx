import React from "react"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Card"
import CarouselItem from "./CarouselItem.component";

function ProjectCard({ project }) {
    return (
        // <div className="col-12 col-md-5 col-lg-5 col-xl-3" style={{ margin: "10px" }} >
        <div className="col-11 col-md-8" style={{ margin: "10px" }} >
            <Card color="white">
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <CarouselItem imgs={project.imgs} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                        {project.technologies}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard