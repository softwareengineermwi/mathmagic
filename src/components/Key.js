import React from 'react';

class Key extends React.Component {
  render() {
    return <button onClick={this.props.handler} type="button" className={this.props.classes}>{this.props.name}</button>;
  }
}

export default Key
