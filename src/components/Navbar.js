import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import "../App.css";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
    return (
        <header>
            <nav className="container row">
                <a className="title" href="#about">
                    About
                </a>
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="#skills">
                        Skills
                    </a>
                <a href="#contact">
                    Contact
                    {/* <ArrowRightIcon className="icon"/> */}
                </a>
                <LanguageSwitch language="en" />
            </nav>
        </header>
    )
}