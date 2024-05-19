import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCreatePortfolioMutation } from "../../../redux/features/portfolio/portfolioApi";
import { useNavigate } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddPortfolio = () => {
  const navigate = useNavigate();
  const [createPortfolio, { isSuccess }] = useCreatePortfolioMutation();

  const { register, handleSubmit } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.url;
        const { title, link, description, category, priority } = data;
        const newPortfolio = {
          title,
          link,
          category,
          priority,
          image: imageUrl,
          description,
        };
        createPortfolio(newPortfolio);
        if (isSuccess) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Portfolio create Successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/portfolio-list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Portfolio </h2>
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
                <option>Non-Profit</option>
                <option>Education</option>
                <option>ERP</option>
              </select>
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
              <label>Portfolio Link </label>
              <input
                {...register("link", { required: true })}
                name="link"
                placeholder="Portfolio Link "
                type="text"
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
              <label> Description </label>
              <textarea
                {...register("description", { required: true })}
                name="description"
                placeholder="Description"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
              ></textarea>
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPortfolio;
