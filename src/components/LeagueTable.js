import React from 'react';

import axios from 'axios';

export default class LeagueTable extends React.Component {
  state = {
    leagueTable: [],
    league : '',
  }
  
  urlDataLeague(league) {
    return `https://api.football-data.org/v1/competitions/`+league+`/leagueTable`;
  }

  loadLeagueTable() {
    axios.get(this.urlDataLeague(this.props.league), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Auth-Token': 'e7dfe881f80f440a866ff0b384eb9a69'
      }
    })
      .then(res => {
        const leagueTable = res.data.standing;
        this.setState({ leagueTable : leagueTable, league : this.props.league });
    })
  }

  componentDidMount() {    
    this.loadLeagueTable();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.league !== this.props.league) this.loadLeagueTable();
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