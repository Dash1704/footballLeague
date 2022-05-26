import React, {Fragment, useEffect, useState} from "react";

const ListLeagues = () => {
  const [leagues, setLeagues] = useState([])
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
       {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        </tr>*/}
      {leagues.map(league => (
        <tr>
          <td>{league.name}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>
  )
};

export default ListLeagues;