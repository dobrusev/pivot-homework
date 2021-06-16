import styled from "styled-components";
import Variables from "../utils/Variables";

export const IntellisenseEditorWrapper = styled.div`
  height: 197px;
  position: relative;
`;

export const PreviewWrapper = styled.div`
  display: block;
  position: absolute;
  left: -1px;
  top: calc(100% + 3px);
  width: calc(100% + 2px);
  background: ${Variables.Colour.light_00};
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid ${Variables.Colour.form_input_border};
  font-size: 16px;
  line-height: 1.4;
  overflow: auto;
  max-height: 250px;

  pre {
    display: inline;
  }
`;
