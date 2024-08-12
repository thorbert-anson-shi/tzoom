"use client";

import { useState } from "react";
import { fetchText } from "../app/data";

export default function TestPanel() {
  const [words, setWords] = useState([]);

  return (
    <div
      id="panel"
      className="flex h-full w-full flex-col items-center justify-between p-3 md:p-5"
    >
      <div id="words" className="m-5 md:m-10">
        {words.length > 0 ? (
          words.map((word, index) => (
            <span key={index} className="inline">
              <h1 className="inline">{word}</h1>
            </span>
          ))
        ) : (
          <h1>No words found</h1>
        )}
      </div>
      <span className="border border-black p-3 md:space-x-3 md:p-5">
        <input
          type="text"
          className="default-font h-full border-b border-b-black bg-transparent outline-none"
        />
        <button
          id="restart"
          className="default-font border border-black hover:bg-neutral-300 md:p-3"
        >
          Restart
        </button>
      </span>
    </div>
  );
}
