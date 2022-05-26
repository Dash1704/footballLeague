import React, {Fragment, useState} from "react";

const InputLeague = () => {
  const [name, setName] = useState("")
  const onSubmitForm = async(e) => {
    try {
      e.preventDefault();
      const body = {name}
      const response = await fetch("http://localhost:5000/leagues", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
  <Fragment>
    <h1 className="text-center mt-5">Input League</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input 
        type="text" 
        className="form-control" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <button className="btn btn-success">Add League</button>
    </form>
  </Fragment>
  )
}

export default InputLeague;