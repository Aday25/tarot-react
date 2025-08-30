import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <img src="/logo.png" alt="Logo personal" className="footer-logo" />

            <p>
                © 2025 Tarot-React | Proyecto formativo del Bootcamp{" "}
                <a
                    href="https://factoriaf5.org/?gad_source=1&gad_campaignid=22402204206&gbraid=0AAAAAoJX4sf7x39EUj13w3SqBaWcWiuOj&gclid=Cj0KCQjwwsrFBhD6ARIsAPnUFD1-_bS20cfExgJB_PHoxtYySpMvCKwnVsy_hHor-58lWmnvsD56r4gaAh_dEALw_wcB"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#cc8500ff", textDecoration: "none" }}
                >
                    Factoría F5
                </a>{" "}
                Fem Coders 4
            </p>

            <div className="footer-contacts">
                <a href="mailto:aday.it25@gmail.com" className="contact-link">
                    <span className="icon-circle">@</span> Contacto
                </a>
                <a
                    href="https://github.com/Aday25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="GitHub"
                >
                    {/* SVG GitHub */}
                    <svg
                        className="github-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.082-.729.082-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.776.42-1.305.763-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.046.138 3 .404 2.292-1.554 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.475 5.922.431.372.816 1.104.816 2.227v3.301c0 .32.217.694.825.576C20.565 22.092 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z" />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/adayasc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="LinkedIn"
                >
                    {/* SVG LinkedIn */}
                    <svg
                        className="linkedin-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.546C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.727V1.727C24 .774 23.21 0 22.23 0zM7.08 20.452H3.54V9h3.54v11.452zM5.31 7.63a2.055 2.055 0 1 1 0-4.11 2.055 2.055 0 0 1 0 4.11zM20.452 20.452h-3.54v-5.555c0-1.324-.024-3.027-1.845-3.027-1.846 0-2.128 1.44-2.128 2.927v5.655H9.922V9h3.4v1.561h.047c.472-.893 1.625-1.833 3.344-1.833 3.575 0 4.235 2.354 4.235 5.412v6.312z" />
                    </svg>
                </a>
            </div>
        </footer>
    );
}
