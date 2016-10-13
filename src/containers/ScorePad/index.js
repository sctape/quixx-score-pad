import React, { Component } from 'react';
import ScorePadRow from './../ScorePadRow';

export default class ScorePad extends Component {
  constructor() {
    super();

    this.state = {
      checkedBoxes: {
        red: [],
        yellow: [],
        green: [],
        blue: [],
      }
    };

    this.onToggle = this.onToggle.bind(this);
  }

  render() {
    return (
      <div>
        <ScorePadRow color="red" checked={this.state.checkedBoxes.red} onToggle={this.onToggle} reversed={false}/>
        <ScorePadRow color="yellow" checked={this.state.checkedBoxes.yellow} onToggle={this.onToggle} reversed={false}/>
        <ScorePadRow color="green" checked={this.state.checkedBoxes.green} onToggle={this.onToggle} reversed={true}/>
        <ScorePadRow color="blue" checked={this.state.checkedBoxes.blue} onToggle={this.onToggle} reversed={true}/>
      </div>
    )
  }

  onToggle(color, num, toggle) {
    const checkedBoxes = {...this.state.checkedBoxes};

    if (toggle) {
      checkedBoxes[color].push(num);
    } else {
      checkedBoxes[color].splice(checkedBoxes[color].indexOf(num), 1);
    }

    this.setState({ checkedBoxes });
  }
}
