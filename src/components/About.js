import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container row">
                <div className="container col">
                    <h1 className="title text-white">
                        Hi, I'm Max.
                        <br className="hidden" />I do some stuff.
                    </h1>
                    <p>
                        Here are some of my projects.
                    </p>
                    <div className="links">
                        <a href="#contact" className="link-active">
                            Contact me
                        </a>
                        <a href="#projects" className="link">
                            My projects
                        </a>
                    </div>
                </div>
                <div className="hero-container">
                    <img
                        className="image-cover"
                        alt="hero"
                        src="./profile.jpg"
                    />
                </div>
            </div>
        </section>
    );
}