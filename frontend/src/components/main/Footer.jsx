import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-2 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-2">
                        {/* Facebook */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.facebook.com/"
                            role="button"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        {/* Twitter */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://twitter.com/"
                            role="button"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://myaccount.google.com/"
                            role="button"
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.instagram.com"
                            role="button"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://www.linkedin.com/in/anuj-verma-22540124b/"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        {/* Github */}
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="https://github.com/Anuj70078"
                            role="button"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-2"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright:
                    <a className="text-white" href="#">
                        Tussel
                    </a>
                </div>
                {/* Copyright */}
            </footer>

        </div>
    )
}

export default Footer