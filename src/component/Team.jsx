import React from "react";
const Team = (props) => {
  console.log(props);

  return (
    <div className={`team ${props.className}`} id={props.data.id}>
      <img src={props.data.src} />
      <h1>{props.data.name}</h1>
      <button
        value={props.data.id}
        onClick={() => props.onClick(props.data.name)}
      >
        Vote
      </button>
      <p>Vote count : {props.data.voteCount}</p>
    </div>
  );
};
export default Team;
