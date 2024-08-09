import TestArea from "@/components/test-area";
import Image from "next/image";

export default function Home() {
  const handleFormSubmit = (formData: FormData) => {
    const rawFormData = {
      text: formData.get("text"),
      file: formData.get("file"),
    };
    const text = formData.get("text") as string;
    console.log(text);
  };

  return (
    <>
      <div className="z-0 flex w-screen flex-grow-[1] flex-col space-y-5 p-3 md:p-5">
        <div id="typing-area" className="flex-grow-[1] border border-black">
          <TestArea />
        </div>
        <div className="flex flex-grow-[1] flex-row">
          <div
            id="statistics"
            className="flex-grow-[2] border border-black"
          ></div>
          <div
            id="file submission"
            className="flex flex-grow-[1] flex-col border border-black p-3 md:p-5"
          >
            <form action={handleFormSubmit}>
              <input accept=".txt" type="file" name="text" id="text-submit" />
              <button type="submit">Submit file for analysis</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
