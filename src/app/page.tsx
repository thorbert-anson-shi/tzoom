import FileSubmissionPanel from "@/components/file-submission-panel";
import StatisticsPanel from "@/components/statistics-panel";
import TestArea from "@/components/test-panel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="z-0 flex h-screen w-screen flex-col space-y-5 p-3 md:p-5">
        <div id="typing-area" className="flex h-1/2 border border-black">
          <TestArea />
        </div>
        <div id="bottom" className="flex h-1/2 flex-row space-x-3 md:space-x-5">
          <StatisticsPanel />
          <FileSubmissionPanel />
        </div>
      </div>
    </>
  );
}
