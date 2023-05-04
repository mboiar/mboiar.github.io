import { CodeIcon } from "@heroicons/react/solid"
import React from "react"
import { projects } from "../data"

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <div className="col">
                    <CodeIcon />
                    <h1 className="title">
                        My projects
                    </h1>
                    <p>
                        Will write here something.
                    </p>
                </div>
                <div>
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}>
                            <div>
                                <img
                                    alt="gallery"
                                    className="image-project"
                                    src={project.image}
                                />
                                <div>
                                    <h2>
                                        {project.subtitle}
                                    </h2>
                                    <h1>
                                        {project.title}
                                    </h1>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}