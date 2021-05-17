import "./App.css";
import Profile from "./profile/profile";
import ProfileImg from "../src/profile/images/profile.jpg";
function App() {
  const handleName = (props) => alert(fullName);

  const fullName = "Ghada Ghedir";
  const bio = "La vie est courte, Souriez tant que vous avez toutes vos dents";
  const profession = "Telecom Enginner";

  return (
    <div className="App">
      <div className="card-container">
        <Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          handleName={handleName}
        >
          <img
            src={ProfileImg}
            alt=""
            style={{ height: "100px", width: "100px" }}
          />
        </Profile>
      </div>
    </div>
  );
}

export default App;
