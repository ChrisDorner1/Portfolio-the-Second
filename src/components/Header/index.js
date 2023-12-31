import React from "react";
import Nav from "../Nav";
import "./style.css"
import headerImg from "../imgassets/cover/pixel-art-town-city-waneella-hd-wallpaper-thumb.jpg"

const Header = ({pages, currentPage, setCurrentPage}) => {

    const ghost = [
        {
            name: "ghosty",
            icon:"fa fa-ghost ghost",
            link: "https://chrisdorner1.github.io/Portfolio/"
        }
    ]

    return <header className="container-fluid" > 
    <img src={headerImg} alt="Japanese cherry trees in the city"/>
    <div className="container d-lg-flex justify-content-lg-between">
<h1 className="text-center" > Christian Dorner {ghost.map(ghost => (<a className={ghost.icon} href={ghost.link} key={ghost.link} target="_blank" rel="noreferrer" ></a>))}  </h1>
<Nav pages={pages}
currentPage={currentPage}
setCurrentPage={setCurrentPage} />
</div>
    </header>
}

export default Header