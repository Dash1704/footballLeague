import React, {Fragment} from "react";
import './App.css';

//components
import InputLeague from "./components/inputLeague";
import ListLeagues from "./components/listLeagues";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputLeague/>
      <ListLeagues/>
      </div>
    </Fragment>
    )
  }

export default App;
