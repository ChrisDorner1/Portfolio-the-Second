import React from "react";
import "./style.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    const icons = [
        {
            name: "fab fa-github-alt",
            link: "https://github.com/ChrisDorner1"
        },
        {
            name: "fab fa-linkedin-in ",
            link: "https://www.linkedin.com/in/chris-dorner-27b063284/"
        },
        {
            name: "fab fa-discord",
            link: "https://discordapp.com/users/%E7%A7%81%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84#6088"
        }
    ]
    return (
    <footer className="d-flex justify-content-center align-item-center">
        {icons.map(icon => (
            <a href={icon.link} key={icon.name} target="_blank" rel="noreferrer" className="mx-2"><i className={icon.name} ></i></a>
        ))}
    </footer>
)};

export default Footer