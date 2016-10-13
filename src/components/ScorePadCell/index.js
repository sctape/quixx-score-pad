import React, { Component } from 'react';

export default class ScorePadCell extends Component {
  constructor() {
    super();

    this.toggleNumber = this.toggleNumber.bind(this);
  }

  render() {
    return (
      <button onClick={this.toggleNumber} className={`${this.props.checked} col-xs score-pad-cell`} disabled={this.props.disabled}>
        {this.renderCell()}
      </button>
    )
  }

  renderCell() {
    if (this.props.checked) {
      return <i className="fa fa-check"/>;
    } else {
      return this.props.num;
    }
  }

  toggleNumber() {
    this.props.onToggle(this.props.color, this.props.num, !this.props.checked)
  }
}