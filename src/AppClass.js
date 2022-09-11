import { useState } from "react";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: "change",
    };
    console.log(" constructor called");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.change !== nextState) return false;
    console.log(" shouldComponentUpdate called ONE, when 'state' changes");
    return false;
  }
  componentDidUpdate() {
    console.log(" componentDidUpdate called ONE, when 'state' changes");
  }
  componentDidMount() {
    // const newChanges = (this.state.change = "new changes");
    // this.setState({ newChanges });
    console.log(`componentDidMount called only one at last`);
  }

  render() {
    console.log(`Render is rendered here`);

    return (
      <button
        onClick={() => this.setState({ change: "changed by click button" })}
      >
        {this.state.change}
      </button>
    );
  }
}

export default App;
/* CS568 - Assignment 5 - Lifecycle methods
1. Implement and observe lifecycle methods, ```constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount```.
2. Implement methods equivalent to ```componentDidMount, componentDidUpdate, componentWillUnmount``` in a functional component using the ```useEffect``` hook. ```componentWillUnmount``` is triggered when you hide/show the component using conditionals.
3. Trigger the ```componentDidUpdate``` only one of states has been changed by overwriting  ```shouldComponentUpdate```. Practice ```PureComponent``` in a class-based component.
4. [Research] Customize ```componentDidUpdate``` then it is invoked only one of the state has been changed, not every state. Similar to ```useEffect(() => {...}, [state])```. 
5. Practice ```React.memo```.*/
