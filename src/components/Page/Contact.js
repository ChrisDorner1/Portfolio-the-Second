import React, {useState} from 'react'



const Contact = () => { 
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.name)
    setFormState({...formState, [e.target.name]: e.target.value})

  }
  const [formState, setFormState] = useState({name: "", email: "", message:""})
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formState)
  
}

  return (
    <form onSubmit={handleSubmit}>
            <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" placeholder="Paul the Placeholder" defaultValue={formState.name} onChange={handleChange}/> </div>
      <div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" name="email" className="form-control" placeholder="example@example.com" defaultValue={formState.email} onChange={handleChange}/>
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label" >Message</label>
  <textarea name="message" className="form-control" rows="3" placeholder="Enter message" defaultValue={formState.message} onChange={handleChange}></textarea>
</div>
<button type="submit" className="btn btn-danger">Submit</button>
    </form>
  )
}

export default Contact