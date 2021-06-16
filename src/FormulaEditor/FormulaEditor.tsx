import React, { PureComponent } from "react";
import {
  EditorHeader,
  EditorWrapper,
  FormulaButtonWrapper,
  FormulaEditorOverlay,
  FormulaPreview,
  StyledFormulaEditor
} from "./FormulaEditor.styled";
import Variables from "../utils/Variables";
import IntellisenseEditor from "../IntellisenseEditor/IntellisenseEditor";
import { Monaco } from "@monaco-editor/react";
import { SimpleEvent } from "../types/SimpleEvent";

type FormulaEditorProps = {
  name: string;
  value: string;
  textColor: string;
  borderColor: string;
  backgroundColor: string;
  direction: "up" | "down";
  typeDefinitions?: string;
  values?: string;
  theme?: "light" | "vs-dark";
  initializeEditor?: (monaco: Monaco) => void;
  onChange(e: SimpleEvent): void;
};

type FormulaEditorState = {
  editorVisible: boolean;
};

export default class FormulaEditor extends PureComponent<
  FormulaEditorProps,
  FormulaEditorState
> {
  static defaultProps = {
    backgroundColor: Variables.Colour.accent_alt,
    borderColor: Variables.Colour.accent_dark,
    textColor: Variables.Colour.light_00,
    direction: "up",
    theme: "vs-dark",
    disabled: false
  };

  state = { editorVisible: false };

  toggleEditor = () => {
    this.setState({ editorVisible: !this.state.editorVisible });
  };

  onEditorChange = (value: string | undefined) => {
    this.props.onChange({ target: { name: this.props.name, value } });
  };

  renderEditorHeader = () => (
    <EditorHeader>
      <i className="far fa-function" />
      <span>Formula Editor - enter static value or JS formula</span>
    </EditorHeader>
  );

  renderEditor = () => (
    <EditorWrapper>
      {this.props.direction === "down" && this.renderEditorHeader()}
      {this.renderEditorWithSuggestions()}
      {this.props.direction === "up" && this.renderEditorHeader()}
    </EditorWrapper>
  );

  renderEditorWithSuggestions = () => {
    const {
      values,
      value,
      theme,
      initializeEditor,
      typeDefinitions
    } = this.props;

    return (
      <IntellisenseEditor
        content={value}
        onChange={this.onEditorChange}
        initializeEditor={initializeEditor}
        values={values}
        theme={theme}
        definitions={typeDefinitions}
      />
    );
  };

  render() {
    const { editorVisible } = this.state;
    const {
      value,
      backgroundColor,
      borderColor,
      textColor,
      direction
    } = this.props;

    return (
      <StyledFormulaEditor
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        open={editorVisible}
        textColor={textColor}
        direction={direction}
        disabled={false}
      >
        <FormulaPreview>{value}</FormulaPreview>
        <FormulaButtonWrapper>
          <i
            onClick={this.toggleEditor}
            className={`far fa-${editorVisible ? "times" : "function"}`}
          />
          {editorVisible && this.renderEditor()}
        </FormulaButtonWrapper>
        {editorVisible && <FormulaEditorOverlay onClick={this.toggleEditor} />}
      </StyledFormulaEditor>
    );
  }
}
