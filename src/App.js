import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
let count = 1;
function App() {
  const [change, setchange] = useState([]);
  let causes = [{ cause1: "c1" }, { cause2: "c2" }, { cause3: "c3" }];
  // shouldComponentUpdate
  useEffect(() => {
    causes[1] = { cause2: "c22" };
    console.log("shouldComponentUpdate called ONE, when 'state' changes ");
  }, causes);

  const MyComponent = React.memo(function MyComponent(props) {
    console.log(
      "React.memo===shouldComponentUpdate called ONE, when 'state' changes "
    );
  });

  // componentDidUpdate
  useEffect(() => {
    console.log(" componentDidUpdate called ONE, when 'state' changes ");
  });

  // componentDidMount
  useEffect(() => {
    const newChanges = [...change];
    newChanges.push({ change: "hello" });
    setchange({ newChanges });
    console.log(`componentDidMount called only one at last `);
  }, []);

  console.log("rendered ");
  return (
    <button
      onClick={() => {
        setchange("hi");
      }}
    >
      change
    </button>
  );
}

export default App;
/* CS568 - Assignment 5 - Lifecycle methods
1. Implement and observe lifecycle methods, ```constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount```.
2. Implement methods equivalent to ```componentDidMount, componentDidUpdate, componentWillUnmount``` in a functional component using the ```useEffect``` hook. ```componentWillUnmount``` is triggered when you hide/show the component using conditionals.
3. Trigger the ```componentDidUpdate``` only one of states has been changed by overwriting  ```shouldComponentUpdate```. Practice ```PureComponent``` in a class-based component.
4. [Research] Customize ```componentDidUpdate``` then it is invoked only one of the state has been changed, not every state. Similar to ```useEffect(() => {...}, [state])```. 
5. Practice ```React.memo```.*/
