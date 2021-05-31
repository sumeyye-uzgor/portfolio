import React from "react"

function ProjectCard({ project }) {
    return (
        // <div className="col-12 col-md-5 col-lg-5 col-xl-3" style={{ margin: "10px" }} >
        <div className="col-11 col-md-8" style={{ margin: "10px" }} >

            {/* <div className="card" style={{ width: "300px" }}> */}
            <div className="card">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {project.img.map(
                            (pic, idx) =>
                                <div className="carousel-item active" key={idx}>
                                    <img src={pic} className="d-block w-100" alt="site resimleri" />
                                </div>
                        )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                    {/* <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div> */}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.technologies}</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard