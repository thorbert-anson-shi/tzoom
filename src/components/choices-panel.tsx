import { useState } from "react";

export enum Modes {
  words = 0,
  quotes,
  freetype,
}

export default function ChoicesPanel() {
  const [mode, setMode] = useState("words");
  return (
    <>
      <div
        id="choice-container"
        className="flex flex-row space-x-3 md:space-x-5"
      >
        <div
          id="mode-container"
          className="flex flex-row justify-between space-x-3 border border-black p-3 md:space-x-5 md:p-5"
        >
          <button id="words">Words</button>
          <button id="quotes">Quotes</button>
          <button id="freetype">Freetype</button>
        </div>
        <div
          id="length-container"
          className="flex flex-row justify-between space-x-3 border border-black p-3 md:space-x-5 md:p-5"
        >
          <button id="25">Short</button>
          <button id="50">Medium</button>
          <button id="100">Long</button>
        </div>
      </div>
    </>
  );
}
