import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

//Import Components
import Profile from "./components/Profile";
import TableData from "./components/TableData";
import Event from "./components/Event";
import FormSubmit from "./components/FormSubmit";

function App() {
  const profiles = [
    {
      id: 1,
      name: "Vincent",
      hobby: "coding",
    },
    {
      id: 2,
      name: "Ncent",
      hobby: "design",
    },
    {
      id: 3,
      name: "Admin",
      hobby: "makan",
    },
    {
      id: 4,
      name: "Jane",
      hobby: "travelling",
    },
    {
      id: 5,
      name: "tests",
      hobby: "testing",
    },
  ];


  return (
    //react Fragment
    <> 
    <div className="banner w-100 text-center">
      <h1 className="fw-bold">React Basic</h1>
      <p>Belajar React Fundamental</p>
      <hr/>
    </div>
    <div className="container-fluid">
      <div className="main-content container">
      {/*profiles.map((profile) => {
        const { name, hobby } = profile;
        return <Profile name= {name} hobby= {hobby} />
      })*/}
      {/* <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => {
                return <TableData profile={profile}></TableData>;
              })}
            </tbody>
            </table> */}
      {/* <Event/> */}
      <FormSubmit/>
      </div>
    </div>
    </>
    //react Fragment
  );
}

export default App;
