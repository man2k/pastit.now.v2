"use client";
import { useEffect, useRef, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

type Props = {};

const TextField = (props: Props) => {
  const [language, setLanguage] = useState("plaintext");
  const paste = useRef("");
  const handleInputChange = (e) => {
    paste.current = e;
    // console.log(paste.current.getvalue);
  };
  //   function showValue() {
  //     console.log(paste.current.getValue());
  //   }
  const languages = [
    { value: "plaintext", name: "Plaintext" },
    { value: "javascript", name: "Javascript" },
    { value: "rust", name: "Rust" },
  ];
  return (
    <div className="w-full border-2 px-5">
      {/* <button onClick={showValue}>Show value</button> */}
      <select
        name={language}
        id="Language"
        onChange={(e) => {
          //   console.log(e.target.value);
          setLanguage(e.target.value);
        }}
      >
        {languages.map((e, key) => {
          return (
            <option value={e.value} key={key}>
              {e.name}
            </option>
          );
        })}
      </select>
      <Editor
        height="50vh"
        width="auto"
        defaultLanguage="plaintext"
        defaultValue=""
        theme="vs-dark"
        onMount={handleInputChange}
        options={{
          wordWrap: "on",
          wrappingIndent: "indent",
          readOnly: false,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default TextField;
