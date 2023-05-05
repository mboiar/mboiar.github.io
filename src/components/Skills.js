import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div>
                    <CpuChipIcon />
                    <h1 className="title">
                        Skills
                    </h1>
                    <p>
                        Skills?
                    </p>
                </div>
                <div>
                    {skills.map((skill) => (
                        <div key={skill}>
                            <span>
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}