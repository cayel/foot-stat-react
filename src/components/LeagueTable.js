import React from 'react';

import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styleTable = {
  width: 200,
}

const style = {
  height: 100,
  width: 800,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class LeagueTable extends React.Component {
  state = {
    leagueTable: []
  }

  componentDidMount() {
    axios.get(`https://api.football-data.org/v1/competitions/450/leagueTable`, {
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
<div>
  <Paper style={style} zDepth={1}>
      <Table
        selectable={false}>
        <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Rang</TableHeaderColumn>
          <TableHeaderColumn style={styleTable} >Equipe</TableHeaderColumn>
          <TableHeaderColumn>Matchs</TableHeaderColumn>
          <TableHeaderColumn>Points</TableHeaderColumn>
          <TableHeaderColumn>Gagnés</TableHeaderColumn>
          <TableHeaderColumn>Nuls</TableHeaderColumn>
          <TableHeaderColumn>Perdus</TableHeaderColumn>
          <TableHeaderColumn>Bp</TableHeaderColumn>
          <TableHeaderColumn>Bc</TableHeaderColumn>          
          <TableHeaderColumn>Diff</TableHeaderColumn>          
        </TableRow>
        </TableHeader>
        <TableBody
        displayRowCheckbox={false}
          showRowHover={true}>
        {this.state.leagueTable.map(lt => <TableRow key={lt.position}> 
          <TableRowColumn>{lt.position}</TableRowColumn>
          <TableRowColumn style={styleTable}>{lt.teamName}</TableRowColumn>
          <TableRowColumn>{lt.playedGames}</TableRowColumn>
          <TableRowColumn>{lt.points}</TableRowColumn>
          <TableRowColumn>{lt.wins}</TableRowColumn>
          <TableRowColumn>{lt.draws}</TableRowColumn>
          <TableRowColumn>{lt.losses}</TableRowColumn>
          <TableRowColumn>{lt.goals}</TableRowColumn>
          <TableRowColumn>{lt.goalsAgainst}</TableRowColumn>
          <TableRowColumn>{lt.goalDifference}</TableRowColumn>          
          </TableRow>)}
          </TableBody>
          </Table>
          </Paper>
</div>          
        )
      }
  }