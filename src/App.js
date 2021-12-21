import "./styles.css";
import { useState } from "react";
import users from "./users.json";
import User from "./components/User";

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

function App() {

  const [user, setUser] = useState(users[getNumber(users.length)]);
  const [ background, setBackground ] = useState(colors[getNumber(colors.length)]);

  const handleUser = () => {
    const index = getNumber(users.length);
    setUser(users[index]);
    setBackground(colors[getNumber(colors.length)]);
  };


  return (
    <div className="app" style={{background}}>
      <User
        name={user.name.first + " " + user.name.last}
        photo={user.picture.large}
        address={`${user.location.country}, ${user.location.state}`}
        phone={user.phone}
        email={user.email}
        changeUser={handleUser}
        background={background}
      />
    </div>
  );
}

const getNumber = (max) => Math.floor(Math.random() * max);

export default App;
