import { StreamLanguage } from "@codemirror/language";
import { go } from "@codemirror/legacy-modes/mode/go";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import { EditorView } from "@codemirror/view";
import { eclipse } from "@uiw/codemirror-theme-eclipse";

// Define the props type for the component
interface CodeEditorProps {
  code?: string;
  editable?: boolean;
  setCode: (code: string) => void;
  language?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code = "",
  editable = false,
  setCode,
  language,
}) => {
  const [copyText, setCopyText] = useState("Copy");

  // Reset the copyText back to "Copy" after 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyText("Copy");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [copyText]);

  // Configuration options for CodeMirror
  const config = {
    lineNumbers: true,
    mode: language, // Programming language mode
    indentUnit: 4, // Number of spaces per indent
    smartIndent: true, // Smart indentation
    indentWithTabs: false, // Use spaces instead of tabs
    electricChars: true, // Auto-close brackets, quotes, etc.
    autoCloseBrackets: true, // Enable auto-closing brackets
    matchBrackets: true, // Highlight matching brackets
    extraKeys: { "Ctrl-Space": "autocomplete" }, // Autocomplete shortcut
  };

  return (
    <div className="relative">
      {/* Copy Button */}

      {/* CodeMirror Editor */}
      <CodeMirror
        value={code}
        minHeight="350px"
        maxHeight="300px"
        editable={editable}
        extensions={[StreamLanguage.define(go), EditorView.lineWrapping]}
        theme={eclipse}
        basicSetup={{
          ...config,
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          indentOnInput: true,
        }}
        onChange={(value: string) => setCode(value)}
      />
      <button
        className="absolute right-1 bottom-1 z-10 rounded bg-indigo-400 p-1 text-xs text-white hover:bg-indigo-700 active:bg-indigo-700 duration-300"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopyText("Copied!");
        }}
      >
        {copyText}
      </button>
    </div>
  );
};

export default CodeEditor;
