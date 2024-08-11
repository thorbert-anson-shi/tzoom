"use client";

import { useEffect, useState } from "react";
import { fetchText } from "../app/data";

export default function TestPanel() {
  const [words, setWords] = useState([]);

  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const texts = fetchText();
    console.log(texts);
  }, []);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div id="words" className="m-5 md:m-10">
          {words.map((word, index) => (
            <span key={index} className="inline">
              <h1 className="inline">{word} </h1>
            </span>
          ))}
        </div>
        <input
          type="text"
          className="default-font border-b border-black bg-transparent outline-none hover:outline-1 hover:outline-gray-500"
        />
      </div>
    </>
  );
}
