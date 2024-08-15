import { modes, lengths } from "./test-panel";

interface ChoicesPanelProps {
  mode: string;
  length: number;
  setMode: (mode: string) => void;
  setLength: (length: number) => void;
}

export default function ChoicesPanel({
  mode,
  length,
  setMode,
  setLength,
}: ChoicesPanelProps) {
  return (
    <>
      <div
        id="choice-container"
        className="flex flex-row space-x-3 md:space-x-5"
      >
        <div
          id="mode-container"
          className="flex flex-row justify-between space-x-3 border border-black p-1 md:space-x-5 md:p-3"
        >
          {/* Mode selector */}
          {modes.map((m, index) => {
            return (
              <button
                key={index}
                id={`${m}-mode-selector`}
                onClick={() => setMode(m)}
                className={`default-font px-1 py-1 hover:bg-neutral-300 md:px-3 ${m === mode ? "selected" : ""}`}
              >
                {m.toLowerCase()}
              </button>
            );
          })}
        </div>
        <div
          id="length-container"
          className="flex flex-row justify-between space-x-3 border border-black p-1 md:space-x-5 md:p-3"
        >
          {/* Length selector */}
          {Object.entries(lengths).map(([key, value]) => {
            return (
              <button
                id={`${key}-length-selector`}
                key={`${key}-${value}`}
                onClick={(e) => {
                  setLength(value);
                }}
                className={`default-font px-1 py-1 hover:bg-neutral-300 md:px-3 ${length === value ? "selected" : ""}`}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
