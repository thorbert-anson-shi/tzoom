interface FileSubmissionPanelProps {
  setModalOpen: (isOpen: boolean) => void;
}

export default function FileSubmissionPanel({
  setModalOpen,
}: FileSubmissionPanelProps) {
  return (
    <div
      id="file submission"
      className="flex flex-1 flex-col space-y-3 border border-black p-3 md:space-y-5 md:p-5"
    >
      <h1>Submit a text</h1>
      <div className="flex h-full flex-col space-y-3 md:space-y-5">
        <div
          id="preview-box"
          className="h-64 overflow-scroll border border-black p-3 md:h-56 md:p-5"
        >
          <h2 id="preview">No text to preview</h2>
        </div>
        <div
          id="button-group"
          className="flex flex-1 flex-row space-x-3 md:space-x-5"
        >
          <label
            htmlFor="text-submit"
            className="default-font flex flex-1 cursor-pointer flex-col justify-center border border-black p-3 text-center align-middle hover:bg-neutral-300 md:p-5"
          >
            Browse files
          </label>
          <input
            accept=".txt"
            type="file"
            name="text-submit"
            id="text-submit"
            className="hidden"
            onChange={(e) => {
              let files = e.target.files;

              if (files) {
                let reader = new FileReader();
                reader.readAsText(files[0], "UTF-8");
                reader.onload = () => {
                  console.log(reader.result);
                  document.getElementById("preview")!.innerText =
                    reader.result as string;
                };
              } else {
                console.error("No file selected");
              }
            }}
          />
          <button
            className="default-font flex-1 border border-black p-3 hover:bg-neutral-300 md:p-5"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            Submit file for review
          </button>
        </div>
      </div>
    </div>
  );
}

interface FileSubmissionModalProps {
  modalIsOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

export function FileSubmissionModal({
  modalIsOpen,
  setModalOpen,
}: FileSubmissionModalProps) {
  return (
    <div className={`${modalIsOpen ? "" : "hidden"}`}>
      <div
        id="modal"
        className="fixed left-1/2 top-1/2 z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 border border-black bg-white"
      >
        <div
          id="modal-content"
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <button
            id="close-modal"
            className="default-font border border-black p-3 hover:bg-red-300 md:p-5"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
      <div
        id="blur"
        className="fixed left-0 top-0 z-0 h-screen w-screen backdrop-blur-sm"
      />
    </div>
  );
}
