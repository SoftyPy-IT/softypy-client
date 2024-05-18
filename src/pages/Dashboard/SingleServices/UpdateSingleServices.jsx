import { useForm } from "react-hook-form";
import "./SingleServices.css";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleServicesQuery,
  useUpdateSingleServiceMutation,
} from "../../../redux/features/singleServices/singleServicesApi";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const UpdateSingleServices = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const [updateSingleService] = useUpdateSingleServiceMutation();

  const { data: singleServices } = useGetSingleServicesQuery(id);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    const { name, category, title, subtitle, description, priority } = data;

    let imageUrl = singleServices?.image; // Use existing image URL by default

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

    const updatedServices = {
      id,
      data: {
        name,
        category,
        title,
        subtitle,
        description,
        priority,
        image: imageUrl, // Set the image URL
      },
    };

    updateSingleService(updatedServices)
      .unwrap()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Single Service updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/SingleServices");
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
  if (singleServices) {
    setValue("name", singleServices.name);
    setValue("category", singleServices.category);
    setValue("title", singleServices.title);
    setValue("subtitle", singleServices.subtitle);
    setValue("description", singleServices.description);
    setValue("priority", singleServices.priority);
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Single Services</h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Category </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
                autoComplete="off"
              >
                <option value="Development">Development</option>
                <option value="ERP">ERP</option>
                <option value="Wordpress">Wordpress</option>
                <option value="Digital">Digital</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
            <div className="singleForm">
              <label>Service Name </label>
              <input
                {...register("name", { required: true })}
                placeholder="Service Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Title </label>
              <input
                {...register("title", { required: true })}
                placeholder="Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Sub Title </label>
              <input
                {...register("subtitle", { required: true })}
                placeholder="Sub Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Priority </label>
              <input
                {...register("priority", { required: true })}
                placeholder="Priority"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image </label>
              <input
                {...register("image")}
                placeholder="Upload Image"
                type="file"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label> Description </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                cols="30"
                rows="10"
                className="inputField"
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

export default UpdateSingleServices;
