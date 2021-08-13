import React from 'react';

export class Output extends React.Component {
  render() {
    return (
      <div className="col-12 bg-contrast-low text-right padding-md">
        <h4>{this.props.value}</h4>
      </div>
    );
  }
}
