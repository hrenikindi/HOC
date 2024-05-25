import React from "react";
import withCounter from "./withCounter";

class LikeImage extends React.Component {
  render() {
    const { counter, handleIncrement, buttonText } = this.props;
    return (
      <div>
        <button onClick={handleIncrement}>
          {buttonText} {counter}
        </button>
      </div>
    );
  }
}

export default withCounter(LikeImage, "LikeImage");
