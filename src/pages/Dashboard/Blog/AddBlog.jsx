/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css"; // Import custom CSS for styling
import { useCreateBlogMutation } from "../../../redux/features/Blog/blogApi";
import BlogList from "./BlogList";
import { toast } from "sonner";

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
  ["header"], // Add heading tag
];
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddBlog = () => {
  const navigate = useNavigate();
  const [createBlog,{reset}] = useCreateBlogMutation();
  const [editorValue, setEditorValue] = useState("");
  console.log(editorValue);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image.");
      }

      const imageData = await response.json();
      const imageUrl = imageData.data.url;
      const { name, title, date, description, category, priority } = data;
      const newBlog = {
        name,
        title,
        category,
        priority,
        image: imageUrl,
        description,
        date,
        content: editorValue,
      };

      const res = await createBlog(newBlog).unwrap();

      if (res?.insertedId) {
        toast.success("Blog post created successfully!");
        navigate("/dashboard/blog-list");
        reset()
      } else {
        throw new Error("Failed to create blog post.");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "An error occurred",
      });
    }
  };


  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Blog </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Category </label>
              <select
                defaultValue="Select Category"
                {...register("category", { required: true })}
                className="select select-bordered"
                autoComplete="off"
                name="category"
              >
                <option>All </option>
                <option>E-commerce</option>
                <option>Travel Agency</option>
                <option> News Portal</option>
                <option>ERP</option>
              </select>
            </div>
            <div className="singleForm">
              <label>Title </label>
              <input
                {...register("title", { required: true })}
                name="title"
                placeholder="Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Writer name </label>
              <input
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Priority </label>
              <input
                {...register("priority", { required: true })}
                name="priority"
                placeholder="Priority"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>

            <div className="singleForm">
              <label>Blog publish date </label>
              <input
                {...register("date", { required: true })}
                name="date"
                placeholder="Date"
                type="date"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image </label>
              <input
                {...register("image", { required: true })}
                name="image"
                placeholder="Products Description "
                type="file"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label> Short description </label>
              <textarea
                {...register("description", { required: true })}
                name="description"
                placeholder="Short description"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
              ></textarea>
            </div>

            <div>
              <ReactQuill
                className="quill-editor"
                theme="snow"
                value={editorValue}
                onChange={setEditorValue}
                modules={{ toolbar: toolbarOptions }}
              />
              <input
                type="hidden"
                {...register("content")}
                value={editorValue}
              />
              
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <BlogList />
    </div>
  );
};

export default AddBlog;
