import React from "react"
import { connect } from "react-redux"
import { Container, Row } from "react-bootstrap"

import ProjectCard from "../../components/ProjectCard.component"
import ProjectsContent from "../../contents/pages/Projects.content"

function Projects({ language }) {
    const content = ProjectsContent.filter(item => item.lang === language)[0]
    return (
        <Container>
            <Row className="align-items-center justify-content-around">
                {content.projects.map(
                    project => <ProjectCard project={project} key={project.id} />
                )}
                {content.projects.map(
                    project => <ProjectCard project={project} key={project.id} />
                )}

            </Row>
        </Container>
    );
}
const mapStateToProps = (state) => {
    const language = state.lang
    return { language }
}
export default connect(mapStateToProps)(Projects);
