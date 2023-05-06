import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container col">
                <div className="container">
                    <CodeBracketIcon className="icon"/>
                    <h1 className="title">
                        My projects
                    </h1>
                    <p>
                        Will write here something.
                    </p>
                </div>
                <ul className="container">
                    {projects.map((project) => (
                        <li className="container col project-card">
                        <a
                            href={project.link}
                            key={project.image}>
                            <div>
                                <img
                                    alt={project.title}
                                    className="image-project"
                                    src={project.image}
                                />
                                <div>
                                    <h2 className="suptitle">
                                        {project.subtitle}
                                    </h2>
                                    <h1>
                                        {project.title}
                                    </h1>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}