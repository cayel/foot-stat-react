import React, { Component } from 'react';

import LeagueTable from './LeagueTable'
import SelectLeague from './SelectLeague'

export default class StatFoot extends Component {
    constructor(props) {
      super(props);
      this.state = {selectedLeague: '450'};
    }
  
    saveChange = (field) => (newValue) => {
      // do something with this field's newValue
      // newValue is whatever is typed into input
      this.setState({selectedLeague: newValue});
    }
  
    render() {
      return (
        <div>
          <SelectLeague updateParent={this.saveChange("league")}/>
          <LeagueTable league={this.state.selectedLeague}/>
        </div>
      );
    }
  }
  