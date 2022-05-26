import React, {Fragment, useEffect, useState} from "react";
import EditLeague from "./editLeague";

const ListLeagues = () => {
  const [leagues, setLeagues] = useState([])

  const deleteLeague = async (id) => {
    try {
      const binLeague = await fetch(`http://localhost:5000/leagues/${id}`, {
        method: "DELETE"
      })
    setLeagues(leagues.filter(league => league.leagues_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getLeagues = async () => {
    try {
      const response = await fetch("http://localhost:5000/leagues") 
      const jsonData = await response.json()
      setLeagues(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getLeagues();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {leagues.map(league => (
        <tr key={league.leagues_id}>
          <td>{league.name}</td>
          <td>
            <EditLeague league={league}/>
            </td>
          <td>
            <button className="btn btn-danger" onClick={() => deleteLeague(league.leagues_id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>
  )
};

export default ListLeagues;