import React, { Component } from 'react';
import ScorePadCell from './../../components/ScorePadCell';

export default class ScorePadRow extends Component {
  render() {
    const rawNumbers = [...Array(12).keys()];
    rawNumbers.shift();
    const numbers = this.props.reversed ? rawNumbers.reverse() : rawNumbers;

    return (
      <div className={`${this.props.color} row`}>
        {numbers.map((num) => {
          const number = ++num;
          const isChecked = this.props.checked.includes(number);
          const isDisabled = (Math.max(...this.props.checked) > number) && !isChecked;

          return (
            <ScorePadCell
              key={num}
              checked={isChecked}
              disabled={isDisabled}
              color={this.props.color}
              num={number}
              onToggle={this.props.onToggle}
            />
          )
          }
        )}
      </div>
    )
  }
}