import { Description, Header, Hints, List, Step } from "./App.styled";
import React from "react";

const Assignment = () => (
  <>
    <Header>Formula Editor Challenge</Header>
    <Step>General Rules</Step>
    <List>
      <li>You can update / create any file in this repository.</li>
    </List>

    <Step>Step 1</Step>
    <List>
      <li>
        in <strong>/src/App.tsx</strong>
      </li>
      <li>Fetch data structure & enums from /public/structure.json.</li>
      <li>Fetch values from /public/values.json.</li>
    </List>

    <Step>Step 2</Step>
    <Description>
      Now comes the proper challenge. You'll have to transform data structure
      and enums into format that will be accepted by MonacoEditor and will
      appear alongside standard Typescript definitions for Javascript base
      classes and types.
    </Description>
    <List>
      <li>
        in <strong>/src/App.tsx</strong>
      </li>
      <li>
        Parse structure data (with enums) and feed it to the editor via{" "}
        <strong>typeDefinitions</strong> property. Think about how code editor
        are getting type definitions.
      </li>
    </List>
    <Hints>
      Hints: <span>Transform stucture into string.</span>
    </Hints>
    <Step>Step 3</Step>
    <Description>
      Now that we have suggestions for our stuctures we want to take it to
      another level. We would like to see preview of value based on current
      expression in editor.
    </Description>
    <List>
      <li>
        in <strong>/src/IntellisenseEditor/EditorPreview.tsx</strong>
      </li>
      <li>
        Update <strong>getPreview()</strong> to evaluate given expressions based
        on values.
      </li>
      <li>Make sure evaluation works for enum values.</li>
      <li>
        You need to pass non-empty <strong>values</strong> property to the
        FormulaEditor to make it render EditorPreview.
      </li>
    </List>
    <Hints>
      Example: Expression{" "}
      <span>envelope.envelopeHeatCapacityThermalMassType</span> will preview{" "}
      <span>LIGHT</span>.
    </Hints>
    <Hints>
      BONUS:{" "}
      <span>
        Display complete object in preview in case no specific property is
        selected. Use JSON.stringify().
      </span>
    </Hints>
    <br />
    <br />
  </>
);

export default Assignment;
