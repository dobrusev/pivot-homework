import { Monaco } from "@monaco-editor/react";

export default class FormulaEditorUtil {
  static initializeEditor = (monaco: Monaco, definitions: string): void => {
    monaco.editor.getModels().forEach((model: any) => model.dispose());
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    monaco.languages.typescript.javascriptDefaults.addExtraLib(definitions);
    monaco.editor.createModel(definitions, "typescript");
  };
}
