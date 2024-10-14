import React, { Component } from "react";

class Counter extends Component {


  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.OnIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-dangerous btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.coutner.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.coutner;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
