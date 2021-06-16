import React from "react";
import { PreviewWrapper } from "./IntellisenseEditor.styled";

type EditorPreviewProps = {
  expression?: any;
  values?: any;
};

const EditorPreview = ({ expression, values }: EditorPreviewProps) => {
  const getPreview = () => {
    return "preview";
  };

  return (
    <PreviewWrapper>
      <i className="far fa-function" />
      &nbsp;
      <span>
        =&nbsp;<pre>{getPreview()}</pre>
      </span>
    </PreviewWrapper>
  );
};

export default EditorPreview;
