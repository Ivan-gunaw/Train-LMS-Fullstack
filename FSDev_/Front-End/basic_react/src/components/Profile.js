import React from 'react'

const Profile = (props) => {
    const { name, hobby } = props;
  return (
    <div>
        <h3>ini adalah {name === "" ? "null" : name}</h3>
        <p>hobby saya {hobby}</p>
    </div>
  );
};

export default Profile