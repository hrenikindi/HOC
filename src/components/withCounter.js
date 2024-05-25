import React, { Component } from "react";

const withCounter = (WrappedComponent, buttonText) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
      this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
          buttonText={buttonText}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
