import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import useContext from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>Swiigy </h1>
        {/* <div>
          LoggedIn User
          <UserContext.Consumer>
            {(loggedInUser) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div> */}
        {/* <h2>This is namste React Web Series</h2> */}
        {/* <User name={"Vishal(function)"} location={"chandigarh"} /> */}
      </div>
    );
  }
}
export default About;
