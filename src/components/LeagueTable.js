import React from 'react';

import axios from 'axios';

export default class LeagueTable extends React.Component {
  state = {
    leagueTable: []
  }

  componentDidMount() {
    axios.get(`http://api.football-data.org/v1/competitions/450/leagueTable`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Auth-Token': 'e7dfe881f80f440a866ff0b384eb9a69'
      }
    })
      .then(res => {
        const leagueTable = res.data.standing;
        this.setState({ leagueTable });
      })
  }

  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Rang</th>
          <th>Equipe</th>
          <th>Matchs</th>
          <th>Points</th>
          <th>Gagnés</th>
          <th>Nuls</th>
          <th>Perdus</th>
          <th>Bp</th>
          <th>Bc</th>          
          <th>Diff</th>          
        </tr>
        </thead>
        <tbody>
        {this.state.leagueTable.map(lt => <tr key={lt.position}> 
          <td>{lt.position}</td>
          <td>{lt.teamName}</td>
          <td>{lt.playedGames}</td>
          <td>{lt.points}</td>
          <td>{lt.wins}</td>
          <td>{lt.draws}</td>
          <td>{lt.losses}</td>
          <td>{lt.goals}</td>
          <td>{lt.goalsAgainst}</td>
          <td>{lt.goalDifference}</td>          
          </tr>)}
          </tbody>
          </table>
        )
      }
  }