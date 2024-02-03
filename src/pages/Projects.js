import { useLoaderData } from "react-router-dom";

function Projects(props) {
    //declare variable to use useloaderdata
    const projects = useLoaderData()

    return projects.map((project) => (
        <div className="projects">
            <div className="project">
            <h1>Title: {project.name}</h1>
            <img src={project.image}/>
            <a  className="button" href={project.git}>
                <button>Github</button>
            </a>
            <a className="button" href={project.live}>
                <button>Live Site</button>
            </a>
            </div>
        </div>
    ))
}

export default Projects;