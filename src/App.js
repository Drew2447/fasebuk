import "./Profile.css";
import Profile from "./Profile";


let users = [
  { id: 1, name: "Andrew", about: "He likes to Fish", age: 'Age 35',},
  { id: 2, name: "Kadie", about: "She likes to Swim", age: 'Age 30',},

];

function App() {
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <Profile
          key={user.id}
          name={user.name}
          about={user.about}
          age={user.age}
          Image={user.Image}
        />
      );
    });
  };

  return (
    <div style={{display:'flex',alignItems:"center",flexDirection:"column"}}>
      <h1>People Place</h1>
      {renderUsers()}

    </div>
  );
}



export default App;