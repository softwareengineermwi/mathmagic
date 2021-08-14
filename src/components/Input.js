/* eslint-disable no-unused-vars */
import React from 'react';
import Key from './Key';

export default class Input extends React.Component {
  render = () => <div className="grid col-12">
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="AC" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="+/-" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="%" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md foo" name="÷" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="7" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="8" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="9" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md foo" name="x" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="4" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="5" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="6" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md foo" name="-" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="1" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="2" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="3" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md foo" name="+" />
    <Key clickHandler={this.props.handler} classes="col-6 btn btn--subtle padding-y-md" name="0" />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md" name="." />
    <Key clickHandler={this.props.handler} classes="col-3 btn btn--subtle padding-y-md foo" name="=" />
  </div>;
}
/* eslint-enable no-unused-vars */