import React from "react";
import MonacoEditor, { Monaco } from "@monaco-editor/react";
import EditorPreview from "./EditorPreview";
import { IntellisenseEditorWrapper } from "./IntellisenseEditor.styled";
import FormulaEditorUtil from "../utils/FormulaEditorUtil";

type IntellisenseEditorProps = {
  content: string;
  onChange: (value: string | undefined) => void;
  values?: string;
  definitions?: string;
  theme?: "vs-dark" | "light";
  initializeEditor?: (monaco: Monaco) => void;
};

const IntellisenseEditor = ({
  content,
  initializeEditor,
  onChange,
  values,
  definitions,
  theme
}: IntellisenseEditorProps) => {
  const beforeMount =
    initializeEditor ||
    function (monaco: Monaco) {
      FormulaEditorUtil.initializeEditor(monaco, definitions ?? "");
    };

  return (
    <IntellisenseEditorWrapper>
      <MonacoEditor
        height="197px"
        language="typescript"
        value={content}
        theme={theme}
        defaultLanguage="typescript"
        onChange={onChange}
        beforeMount={beforeMount}
      />
      {values && <EditorPreview expression={content} values={values} />}
    </IntellisenseEditorWrapper>
  );
};

IntellisenseEditor.defautlProps = {
  theme: "light"
};

export default IntellisenseEditor;
