import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data).map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        ).join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        }).then(() => alert("Thank you for contacting me!")).catch((error) => alert(error));
    }

    return (
        <section id="contact">
            <div className="container">
                <div>
                    <div>
                        <div>
                            <h2>
                                ADDRESS
                            </h2>
                            <p>
                                Cracow, Poland
                            </p>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    name="contact"
                    className="col">
                    <h2>
                        Get in touch
                    </h2>
                    <p>
                        If you want to collaborate!
                    </p>
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                        />
                    </div>
                    <button
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}