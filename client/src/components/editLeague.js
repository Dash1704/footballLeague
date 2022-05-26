import React, {Fragment, useState} from "react";

const EditLeague = ({ league }) => {
  const [name, setName] = useState(league.name)

  const updateName = async e => {
    e.preventDefault();
    try {
      const body = { name }
      const response = await fetch(`http://localhost:5000/leagues/${league.leagues_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)  
      })
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  } 
  return (
    <Fragment>

<button 
  type="button" 
  className="btn btn-warning" 
  data-toggle="modal" 
  data-target={`#id${league.leagues_id}`}>
  Edit
</button>

<div className="modal" id={`id${league.leagues_id}`} onClick={() => setName(league.name)}>
  <div className="modal-dialog">
    <div className="modal-content">

 
      <div className="modal-header">
        <h4 className="modal-title">Edit League name</h4>
        <button type="button" className="close" data-dismiss="modal" 
          onClick={() => setName(league.name)}>
          &times;
        </button>
      </div>

  
      <div className="modal-body"><input type="text" className="form-control" value={name} onChange={e =>
        setName(e.target.value)}/>
        
      </div>

      <div className="modal-footer">
        <button 
          type="button" 
          className="btn btn-warning" 
          data-dismiss="modal"
          onClick = {e => updateName(e)}>
          Edit
          </button>
        
        <button type="button" 
          className="btn btn-danger" 
          data-dismiss="modal"
          onClick={() => setName(league.name)}>
            Close
        </button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}
export default EditLeague;