import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header>
            <div className="container row">
                <a className="title" href="#about">
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