import React from "react";
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="container row">
                <div className="container col">
                    <h1 className="title text-white">
                        {t("greeting")}
                        <br className="hidden" />{t("summary")}
                    </h1>
                    <p>
                        {t("description")}
                    </p>
                    <div className="container">
                        <a href="https://github.com/mboiar" className="link" target="_blank">
                            Github
                        </a>
                        <a href="https://linkedin.com/in/maksym-boiar" className="link" target="_blank">
                            LinkedIn
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