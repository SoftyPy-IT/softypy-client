import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css"; // Import custom CSS for styling

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["blockquote"],
  ["clean"],
];

const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill
        className="quill-editor"
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{ toolbar: toolbarOptions }}
      />
      
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Content:</h2>
        <div
          className="p-4 bg-gray-100 rounded"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
