import styled, { css } from "styled-components";
import Variables from "../utils/Variables";
import { PreviewWrapper } from "../IntellisenseEditor/IntellisenseEditor.styled";

export const FormulaPreview = styled.div`
  width: 100%;
  height: 36px;
  font-size: 12px;
  line-height: 36px;
  padding: 0 10px;
  margin-right: 5px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${Variables.Colour.dark_02};
  background-color: ${Variables.Colour.light_00};
  border: 1px solid ${Variables.Colour.form_input_border};
  box-shadow: 0 2px 0 0 ${Variables.Colour.form_input_shadow};
`;

export const FormulaButtonWrapper = styled.div`
  position: relative;

  > i,
  .apex-tooltip i {
    height: 36px;
    line-height: 36px;
    border: 1px solid ${Variables.Colour.form_input_border};
    border-radius: 4px;
    background-color: ${Variables.Colour.light_00};
    box-shadow: 0 2px 0 0 ${Variables.Colour.form_input_shadow};
    width: 38px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
  }
`;

export const TextEditorWrapper = styled.div`
  height: 197px;
  position: relative;
  overflow: auto;

  .editor {
    outline: none;
    width: 100%;
    font-size: 1rem;
    font-family: monospace;
    line-height: 19px;
    position: relative;
    counter-reset: line;
    border-radius: 4px 4px 0 0;
    background: ${Variables.Colour.light_00};

    &:before {
      width: 21px;
      left: 0;
      top: 0;
      height: 5px;
      content: "";
      display: block;
      position: absolute;
      background: ${Variables.Colour.light_01};
    }

    textarea {
      outline: none;
      padding-left: 27px !important;
      overflow: auto;
    }

    pre {
      padding-left: 27px !important;
      overflow: auto;
      width: 100%;
    }

    &-line-number {
      left: 0;
      width: 21px;
      position: absolute;
      text-align: center;
      color: ${Variables.Colour.dark_03};
      background: ${Variables.Colour.light_01};
    }
  }
`;

export const EditorHeader = styled.div`
  height: 38px;
  padding: 0 13px;
  line-height: 38px;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  span,
  i {
    opacity: 0.5;
  }

  i {
    font-size: 18px;
    display: block;
    padding-right: 5px;
  }
`;

export const EditorWrapper = styled.div`
  width: 510px;
  height: 237px;
  position: absolute;
  right: -1px;
  bottom: calc(100% + 8px);
  border-radius: 4px;
  border: 1px solid rgba(144, 144, 144, 0.25);
  background-color: ${Variables.Colour.light_00};
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    display: block;
    right: 0;
    bottom: -9px;
    height: 7px;
    width: 38px;
    border-left: 1px solid ${Variables.Colour.form_input_border};
    border-right: 1px solid ${Variables.Colour.form_input_border};
  }
`;

type StyledFormulaEditorProps = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  direction: "up" | "down";
  open: boolean;
  disabled: boolean;
};

export const StyledFormulaEditor = styled.div<StyledFormulaEditorProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${({ open, backgroundColor, borderColor, textColor }) =>
    open &&
    css`
      z-index: 3;

      ${FormulaButtonWrapper} {
        > i {
          background-color: ${backgroundColor};
          box-shadow: 0 2px 0 0 ${borderColor};
          color: ${textColor};
        }
      }

      ${EditorWrapper}:before {
        background-color: ${backgroundColor};
      }

      ${EditorHeader} {
        background-color: ${backgroundColor};
        color: ${textColor};
      }
    `};

  ${({ direction, open }) =>
    direction === "down" &&
    open &&
    css`
      ${EditorWrapper} {
        bottom: auto;
        top: calc(100% + 8px);

        &:before {
          top: -9px;
          bottom: auto;
          height: 9px;
        }
      }

      ${EditorHeader} {
        border-radius: 4px 0 0 0;
      }

      ${FormulaButtonWrapper} > i {
        border-bottom: none;
        box-shadow: none;
        border-radius: 4px 4px 0 0;
      }

      .overflow-guard,
      .monaco-editor {
        border-radius: 0 0 4px 4px;
      }
    `};

  ${({ direction, open }) =>
    direction === "up" &&
    open &&
    css`
      ${EditorHeader} {
        border-radius: 0 0 0 4px;
      }

      ${EditorWrapper} {
        height: 235px;
      }

      ${FormulaButtonWrapper} > i {
        border-radius: 0 0 4px 4px;
        border-top: none;
      }

      ${PreviewWrapper} {
        top: calc(100% + 40px);
        width: calc(100% - 39px);
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;

      i {
        cursor: initial;
      }
    `};
`;

export const FormulaEditorOverlay = styled.div`
  cursor: not-allowed;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: transparent;
  opacity: 0.5;
  z-index: 1;
`;
