import React from "react";

const User = ({
  name,
  photo,
  address,
  phone,
  email,
  changeUser,
  background
}) => {
  return (
    <div className="user">
      <h3 style={{ color: background }}>{name}</h3>
      <img src={photo} alt="" />
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i> {address}
        </li>
        <li>
          <i className="fas fa-phone"></i> {phone}
        </li>
        <li>
          <i className="fas fa-envelope"></i> {email}
        </li>
      </ul>
      <button onClick={changeUser}>
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};

export default User;
