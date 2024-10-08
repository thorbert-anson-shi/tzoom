"use client";

import FileSubmissionPanel, {
  FileSubmissionModal,
} from "@/components/file-submission-panel";
import StatisticsPanel from "@/components/statistics-panel";
import TestArea from "@/components/test-panel";
import { useState } from "react";

export default function Home() {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="z-0 flex h-screen w-screen flex-col space-y-5 p-3 md:p-5">
        <div id="typing-area" className="flex h-1/2 border border-black">
          <TestArea />
        </div>
        <div id="bottom" className="flex h-1/2 flex-row space-x-3 md:space-x-5">
          <StatisticsPanel />
          <FileSubmissionPanel setModalOpen={setModalOpen} />
        </div>
      </div>
      <FileSubmissionModal
        setModalOpen={setModalOpen}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
}
