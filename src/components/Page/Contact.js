import React from 'react'

const Contact = () => {
  return (
    <form>
            <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" placeholder="Paul the Placeholder"/> </div>
      <div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" name="email" className="form-control" placeholder="example@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="message" class="form-label" placeholder="Enter message">Message</label>
  <textarea name="message" className="form-control" rows="3"></textarea>
</div>
<button type="submit" className="btn btn-danger">Submit</button>
    </form>
  )
}

export default Contact