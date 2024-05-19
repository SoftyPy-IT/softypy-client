import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSinglePortfolioQuery,
  useUpdatePortfolioMutation,
} from "../../../redux/features/portfolio/portfolioApi";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const UpdateReview = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const [updatePortfolio] = useUpdatePortfolioMutation();

  const { data: singlePortfolio } = useGetSinglePortfolioQuery(id);
  console.log(singlePortfolio);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    console.log(data);
    const { category, title, link, priority, description } = data;

    let imageUrl = singlePortfolio?.image; // Use existing image URL by default

    if (data.image && data.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      try {
        const res = await fetch(img_hosting_url, {
          method: "POST",
          body: formData,
        });
        const imageData = await res.json();
        imageUrl = imageData.data.url; // Update with new image URL if image is uploaded
      } catch (error) {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Image upload failed!",
          showConfirmButton: false,
          timer: 1500,
        });
        return; // Stop submission if image upload fails
      }
    }

    const newPortfolio = {
      id,
      data: {
        category,
        title,
        link,
        priority,
        description,
        image: imageUrl, // Set the image URL
      },
    };

    updatePortfolio(newPortfolio)
      .unwrap()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Portfolio updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/portfolio-list");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Update failed!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Pre-fill form fields with existing data
  if (singlePortfolio) {
    setValue("name", singlePortfolio.category);
    setValue("title", singlePortfolio.title);
    setValue("videoUrl", singlePortfolio.link);
    setValue("videoUrl", singlePortfolio.priority);
    setValue("description", singlePortfolio.description);
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Review </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Category </label>
              <select
                defaultValue={singlePortfolio?.category}
                {...register("category")}
                className="select select-bordered"
                autoComplete="off"
                name="category"
              >
                <option>All </option>
                <option>E-commerce</option>
                <option>Travel Agency</option>
                <option> News Portal</option>
                <option>Non-Profit</option>
                <option>Educations</option>
                <option>Real State</option>
                <option>ERP</option>
              </select>
            </div>
            <div className="singleForm">
              <label>Priority </label>
              <input
                {...register("priority")}
                name="priority"
                placeholder="Priority"
                type="text"
                className="inputField"
                autoComplete="off"
                defaultValue={singlePortfolio?.priority}
              />
            </div>
            <div className="singleForm">
              <label>Title </label>
              <input
                {...register("title")}
                name="title"
                placeholder="Title"
                type="text"
                className="inputField"
                autoComplete="off"
                defaultValue={singlePortfolio?.title}
              />
            </div>

            <div className="singleForm">
              <label>Portfolio Link </label>
              <input
                {...register("link")}
                name="link"
                placeholder="Portfolio Link "
                type="text"
                className="inputField"
                autoComplete="off"
                defaultValue={singlePortfolio?.link}
              />
            </div>
            <div className="singleForm">
              <label>Image </label>
              <input
                {...register("image")}
                name="image"
                placeholder="Products Description "
                type="file"
                className="inputField"
                autoComplete="off"
                defaultValue={singlePortfolio?.image}
              />
            </div>
            <div className="singleForm">
              <label> Description </label>
              <textarea
                {...register("description")}
                name="description"
                placeholder="Description"
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
                defaultValue={singlePortfolio?.description}
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

export default UpdateReview;
