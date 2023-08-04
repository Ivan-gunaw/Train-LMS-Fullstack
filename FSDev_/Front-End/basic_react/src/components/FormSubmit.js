import React, { useState } from "react";

import TableData from "./TableData";

const FormSubmit = () => {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [profiles, setProfiles] = useState([
    {
      name: "tes",
      hobby: "1",
    },
    {
      name: "tes1",
      hobby: "2",
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault(); // untuk mencegah refresh

    let tempObj = { name, hobby };
    let tempProfiles = [...profiles, tempObj];
    setProfiles(tempProfiles);

    console.log(profiles);
  };

  return (
    <div className="row">
      <div className="col-12 text-center p-2">
        <h3>Profiles Form</h3>
        <hr />
      </div>
      <div className="col-4">
        <h3 className="p-2">Submit Form</h3>
        <hr />
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">#</span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              onChange={(e) => setHobby(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Hobby"
            />
          </div>
          <div className="mb-3">
            <button onClick={submitHandler} className="btn btn-success w-100">
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <div className="col-8">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => {
              return <TableData profile={profile} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormSubmit;