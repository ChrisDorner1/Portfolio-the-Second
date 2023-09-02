import React from 'react'
import "./style.css"
const Project = ({project}) => {
  return (
    <div className='col' >
        <div className="card text-bg-dark">
  <img src={require(`../imgassets/${project.name}.png`)} className="card-img" alt={project.name}/>
  <div className="card-img-overlay">
    <h3 className="card-title">
        <a href={project.link} className="card-text linkColor">{project.name}</a>
        <a href={project.repo} className="card-text linkColor" ><i className="fab fa-github"></i></a>
    </h3>
    <p className="card-text desc">{project.description}</p>
  </div>
</div>
    </div>
  )
}

export default Project