import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container col">
                <div className="container">
                    <CpuChipIcon className="icon"/>
                    <h1 className="title">
                        Skills
                    </h1>
                    <p>
                        Skills?
                    </p>
                </div>
                <ul className="container">
                    {skills.map((skill) => (
                        <li key={skill}>
                            <span>
                                {skill}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}