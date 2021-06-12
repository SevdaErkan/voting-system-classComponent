import React from "react";
import "./styles.css";
import Team from "./component/Team";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [
        {
          name: "Manchester",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0XD1K7CisJLo9mgoDDKBSLAcvpyvuiRX3aFmSFCHXeoGrqc9NcwAwcA7mMRjj7CPdjy4&usqp=CAU",
          voteCount: 0,
          id: 1,
          isWinner: false
        },
        {
          name: "Juventus",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d-gGxaFm2gKKH7QkIWI8e92R8TyZ0sKYMQ&usqp=CAU",
          voteCount: 0,
          id: 2,
          isWinner: false
        },
        {
          name: "FC Barcelona",
          src:
            "https://i.pinimg.com/originals/8f/6d/73/8f6d733872856c6f1fd9452d6ee6e896.jpg",
          voteCount: 0,
          id: 3,
          isWinner: false
        }
      ],
      currentTeam: []
    };
  }
  counter = (name) => {
    const newTeam = this.state.teams.map((team) => {
      if (name === team.name) {
        team.voteCount += 1;
      }
      return team;
    });
    this.setState({ teams: newTeam }, () => {
      this.getWinner();
    });
  };
  getWinner = () => {
    const winnerCount = this.state.teams.reduce((accum, currentTeam) => {
      if (currentTeam.voteCount > accum) {
        accum = currentTeam.voteCount;
      }
      return accum;
    }, 0);
    const winner = this.state.teams.map((team) => {
      if (team.voteCount === winnerCount) {
        team.isWinner = true;
      } else {
        team.isWinner = false;
      }
      return team;
    });
    this.setState({ team: winner });
  };
  render() {
    const content = this.state.teams.map((team) => {
      return (
        <Team
          data={team}
          onClick={this.counter}
          className={team.isWinner ? "winner" : null}
        />
      );
    });
    return <div>{content}</div>;
  }
}
export default App;
