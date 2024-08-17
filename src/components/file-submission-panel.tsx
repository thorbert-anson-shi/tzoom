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
            className="default-font flex flex-1 cursor-pointer flex-col items-center justify-center border border-black p-3 text-center hover:bg-neutral-300 md:p-5"
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
  async function submitText(formData: FormData) {
    const rawFormData = {
      title: formData.get("title"),
      description: formData.get("description"),
      anonymous: formData.get("anonymous"),
    };
  }

  return (
    <div className={`${modalIsOpen ? "" : "hidden"}`}>
      <div
        id="modal"
        className="fixed left-1/2 top-1/2 z-10 h-fit w-1/2 -translate-x-1/2 -translate-y-1/2 border border-black bg-white"
      >
        <form
          action={submitText}
          id="modal-content"
          className="default-font flex h-full flex-col justify-end space-y-3 p-3 md:space-y-5 md:p-5"
        >
          <span className="flex flex-row space-x-3 border border-black p-3 md:space-x-5 md:p-5">
            <label htmlFor="title" className="flex-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title-input"
              className="flex-[5] border-b border-black pb-1 outline-none"
              autoComplete="off"
            />
          </span>
          <span className="flex flex-row space-x-3 border border-black p-3 md:space-x-5 md:p-5">
            <label htmlFor="author" className="flex-1">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author-input"
              className="flex-[5] border-b border-black pb-1 outline-none"
              autoComplete="off"
            />
          </span>
          <span className="flex flex-row space-x-3 border border-black p-3 md:space-x-5 md:p-5">
            <label htmlFor="description" className="flex-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description-input"
              className="flex-[5] border-b border-black pb-1 outline-none"
              autoComplete="off"
            />
          </span>
          <span className="flex flex-row items-center justify-start space-x-3">
            <p>Anonymous</p>
            <label htmlFor="anonymous" />
            <input type="checkbox" name="anonymous" id="anonymous-toggle" />
          </span>
          <button
            id="submit-text"
            className="default-font border border-black p-3 hover:bg-green-300 md:p-5"
            type="submit"
          >
            Submit text
          </button>
          <button
            id="close-modal"
            className="default-font border border-black p-3 hover:bg-red-300 md:p-5"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </form>
      </div>
      <div
        id="blur"
        className="fixed left-0 top-0 z-0 h-screen w-screen backdrop-blur-sm"
      />
    </div>
  );
}
