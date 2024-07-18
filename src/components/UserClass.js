import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // console.log("Parent Constructor ");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // console.log("Child Component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    // console.log("Parent Render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>

        <h2>Name:{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
