import React from 'react'

const Resume = () => {
  return (
    <div className="skills">
      <p>
        Download Link for My <a href="https://www.linkedin.com" className='resume'> Resume </a>
      </p>
    <div className="row mt-4">
      <div className="col-12 col-md-6 pt-4 pt-md-0 d-flex flex-column align-items-center mb-3"> 
      <h3>Front-end</h3>
      <ul class="list-group list-group-flush mt-2">
  <li className="list-group-item">Html</li>
  <li className="list-group-item">css</li>
  <li className="list-group-item">Javascript</li>
  <li className="list-group-item">bootstrap</li>
  <li className="list-group-item">React</li>
  <li className="list-group-item">jQuery</li>
          </ul>
      </div>
      <div className="col-12 col-md-6 pt-4 pt-md-0 d-flex flex-column align-items-center mb-3"> 
      <h3>Back-End </h3>
      <ul class="list-group list-group-flush mt-2">
  <li className="list-group-item">API's</li>
  <li className="list-group-item">Node</li>
  <li className="list-group-item">Express</li>
  <li className="list-group-item">Node</li>
  <li className="list-group-item">MySQL, Sequelize</li>
  <li className="list-group-item">MongoDB, Mongoose</li>
  <li className="list-group-item">GraphQL</li>
          </ul>
      </div>
    </div>

    </div>
  )
}

export default Resume