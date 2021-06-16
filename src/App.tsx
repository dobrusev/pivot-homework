import FormulaEditor from "./FormulaEditor/FormulaEditor";
import { SimpleEvent } from "./types/SimpleEvent";
import React, { Component } from "react";
import Assignment from "./Assignment";

type AppState = {
  value: string;
  values: string;
  typeDefinitions: string;
};

export default class App extends Component<any, AppState> {
  state = {
    value: "general.aboveGroundStories",
    values: "",
    typeDefinitions: ""
  };

  componentDidMount() {
    this.getStructure();
    this.getValues();
  }

  getStructure = () => {
    // Step 1 - fetch data structure & enums
  };

  getValues = () => {
    // Step 2 - fetch values
  };

  onChange = (e: SimpleEvent) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value, typeDefinitions, values } = this.state;

    return (
      <div className="App">
        <Assignment />
        <FormulaEditor
          value={value}
          onChange={this.onChange}
          name="editor"
          values={values}
          typeDefinitions={typeDefinitions}
        />
      </div>
    );
  }
}
