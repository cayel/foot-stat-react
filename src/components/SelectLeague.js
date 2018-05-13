import React from 'react';

export default class SelectLeague extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '450'};
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.updateParent(event.target.value);
    }

    render() {
      return (
      <select id="selectLeague" value={this.state.value} onChange={this.handleChange}>
        <option value="445">Premier League</option> 
        <option value="450">Ligue 1</option> 
        <option value="451">Ligue 2</option>
        <option value="452">Bundesliga</option>
        <option value="456">Serie A</option>
        </select>)
    }
  }
  
  