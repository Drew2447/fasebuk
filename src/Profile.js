import { useState } from "react";
const Profile = (props) => {
  let [votes, setVotes] = useState(props.initialVotes || 0);
  const like = () => {
    setVotes(votes + 1);
  };
  const dislike = () => {
    if (votes == 0) {
      return;
    }
    setVotes(votes - 1);
  };
  return (
    <div className="container">
      <div className="bio">
        <h3 className="user-name">{props.name || "Thumbs Up"}</h3>
        <p>{props.about || "thumbs up"}</p>
        <p>{props.age || 'help'}</p>
        <p>votes: {votes}</p>
        <button onClick={like}>like</button>
        <button onClick={dislike}>dislike</button>
        <p>{props.Image}</p>

      </div>
    </div>
  );
};

export default Profile;