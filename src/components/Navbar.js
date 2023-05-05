import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import "../App.css"

export default function Navbar() {
    return (
        <header>
            <div className="container row">
                <a className="title App-logo" href="#about">
                    Maksym Boiar
                </a>
                <nav>
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="#skills">
                        Skills
                    </a>
                </nav>
                <a href="contact">
                    Contact
                    <ArrowRightIcon/>
                </a>
            </div>
        </header>
    )
}