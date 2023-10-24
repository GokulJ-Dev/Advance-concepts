import React from "react";

class AboutC extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      maxValue: 10,
    };
  }

  render() {
    const { name, details } = this.props;
    const { location, id } = details;
    return (
      <>
        <h1>About Page</h1>
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.maxValue}</h2>
        <button
          onClick={() => {
            if (this.state.count < this.state.maxValue) {
              this.setState({
                count: this.state.count + 1,
              });
            } else {
              alert("Maximum Limit Reached");
            }

            // this.state.count = this.state.count + 1;
            // console.log(this.state.count);
          }}
        >
          Click me
        </button>
      </>
    );
  }
}

export default AboutC;
