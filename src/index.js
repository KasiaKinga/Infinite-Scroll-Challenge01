import React from "react";
import ReactDOM from "react-dom";
import PinsScreen from "./PinsScreen";
// REPLACE THIS FILE WITH YOUR OWN JSON FILE PATH
import jsonData from "./data/nyc_ttp_pins.json";

const App = () => {
  const data = JSON.parse(JSON.stringify(jsonData));
  return (
    <div >
      <PinsScreen data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
