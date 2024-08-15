"use client";

import { useState } from "react";
import ChoicesPanel from "./choices-panel";
import { fetchWords } from "@/app/data";

export const modes = ["words", "quotes", "freetype"];
export const lengths = {
  short: 25,
  medium: 50,
  long: 100,
};

export default function TestPanel() {
  const [words, setWords] = useState([
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
  ]);
  const [mode, setMode] = useState<string>("words");
  const [length, setLength] = useState<number>(lengths.short);

  return (
    <div
      id="panel"
      className="flex h-full w-full flex-col items-center justify-between p-3 md:p-5"
    >
      <ChoicesPanel
        mode={mode}
        length={length}
        setLength={setLength}
        setMode={setMode}
      />
      <div id="words" className="m-5 md:m-10">
        {words.length > 0 ? (
          words.map((word, index) => (
            <span key={index} className="mx-1 inline">
              <h1 className="inline">{word}</h1>
            </span>
          ))
        ) : (
          <h1>No words found</h1>
        )}
      </div>
      <span className="border border-black p-1 md:space-x-3 md:p-3">
        <input
          type="text"
          className="default-font h-full border-b border-b-black bg-transparent outline-none"
        />
        <button
          id="restart"
          className="default-font border border-black hover:bg-neutral-300 md:p-3"
          onClick={() => {
            fetchWords({ mode, length });
          }}
        >
          Restart
        </button>
      </span>
    </div>
  );
}
