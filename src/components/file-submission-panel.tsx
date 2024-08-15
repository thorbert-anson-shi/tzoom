export default function FileSubmissionPanel() {
  const handleFormSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      text: formData.get("text"),
      file: formData.get("file"),
    };
    const text = formData.get("text") as string;
    console.log(text);
  };

  return (
    <div
      id="file submission"
      className="flex flex-1 flex-col border border-black p-3 md:p-5"
    >
      <h1 className="text-xl">Submit a text</h1>
      <form
        action={handleFormSubmit}
        className="flex h-full flex-col space-y-3 md:space-y-5"
      >
        <div
          id="preview-box"
          className="flex-[4] border border-black p-3 md:p-5"
        >
          <p>{}</p>
        </div>
        <div id="button-group" className="flex flex-row space-x-3 md:space-x-5">
          <label
            htmlFor="text-submit"
            className="default-font flex-1 cursor-pointer border border-black p-3 text-center hover:bg-neutral-300 md:p-5"
          >
            Browse files
          </label>
          <input
            accept=".txt"
            type="file"
            name="text-submit"
            id="text-submit"
            className="hidden"
          />
          <button
            type="submit"
            className="default-font flex-1 border border-black p-3 hover:bg-neutral-300 md:p-5"
          >
            Submit file for review
          </button>
        </div>
      </form>
    </div>
  );
}
