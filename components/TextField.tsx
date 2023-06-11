"use client";
import { useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import languages from "../assets/languages.json";
// import type { LineNumbersType } from "monaco-editor/esm/vs/editor/editor.api";
type Props = {};

const TextField = (props: Props) => {
  const [language, setLanguage] = useState("plaintext");
  const [lineNumbers, setlineNumbers] = useState<any>("on");
  const [minimap, setMinimap] = useState(false);

  const paste = useRef<any>(null);

  const handleLineNumbers = () => {
    if (lineNumbers === "on") {
      setlineNumbers("off");
    } else {
      setlineNumbers("on");
    }
  };

  const handleInputChange = (e: object) => {
    paste.current = e;
    // console.log(paste.current.getvalue());
  };

  const toggleMinimap = () => {
    console.log("minimap toggle");
    setMinimap(!minimap);
  };

  // const showValue = () => {
  //   console.log(paste.current.getValue());

  // };

  return (
    <div className="flex-col w-full p-5 px-12">
      <div className="flex border-1 mb-3">
        {/* <button onClick={showValue}>Show value</button> */}
        <select
          name={language}
          id="Language"
          onChange={(e) => {
            //   console.log(e.target.value);
            setLanguage(e.target.value);
          }}
          className="flex bg-slate-800 rounded-xl text-white text-center"
        >
          {languages.map((e, key) => {
            return (
              <option value={e.value} key={key} className="m-0 w-auto">
                {e.name}
              </option>
            );
          })}
        </select>
        <div className="flex-col bg-slate-800 ml-6 rounded-xl text-center">
          <label className="p-3 text-white">Minimap</label>
          <br />
          <input
            type="checkbox"
            className="rounded-2xl"
            onChange={toggleMinimap}
          />
        </div>
        <div className="flex-col bg-slate-800 ml-6 rounded-xl text-center">
          <label className="text-white rounded-xl p-3">Line Numbers</label>
          <br />
          <input type="checkbox" defaultChecked onChange={handleLineNumbers} />
        </div>
      </div>
      <Editor
        height="50vh"
        width="auto"
        defaultLanguage="plaintext"
        language={language}
        defaultValue=""
        theme="hc-black"
        onMount={handleInputChange}
        options={{
          readOnly: false,
          wordWrap: "on",
          wrappingIndent: "none",
          autoIndent: "advanced",
          fontFamily: "Inconsolata, Consolas, 'Courier New', monospace",
          fontSize: 17,
          minimap: {
            enabled: minimap,
          },
          lineNumbers: lineNumbers,
          lineDecorationsWidth: 10,
          glyphMargin: false,
          roundedSelection: true,
          occurrencesHighlight: true,
          folding: true,
          renderWhitespace: "selection",
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          links: true,
          codeLens: true,
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
      />
    </div>
  );
};

export default TextField;
