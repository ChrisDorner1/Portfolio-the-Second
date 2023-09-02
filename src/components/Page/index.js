import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact"
import "./style.css"

const Page = ({currentPage}) => {
    const renderPage = (page) => {
        switch (page) {
            case "portfolio":
                return <Portfolio/>;
                case "contact":
                    return <Contact/>;
                    case "resume":
                        return <Resume />;
            default:
                return <About/>
        }
    }
    return <section className="container mt-4" >
        <h2 className="mb-5" >{currentPage}</h2>
        {renderPage(currentPage)}
        </section>
}

export default Page