import { useForm } from "react-hook-form";
import "./SingleServices.css";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const UpdateSingleServices = () => {
  const { register, reset, handleSubmit } = useForm();
  const singleServices = useLoaderData();
  const { _id } = singleServices;

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
        const category = data.category;
        const title = data.title;
        const subtitle = data.subtitle;
        const description = data.description;
        const updatedServices = {
          category,
          title,
          subtitle,
          image:imageUrl,
          description,
        };

        fetch(`http://localhost:5000/singleservices/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedServices),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Single Services Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
            reset()
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update single Services</h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Category </label>
              <input
                {...register("category")}
                name="category"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Title </label>
              <input
                {...register("title")}
                name="title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Sub Title </label>
              <input
                {...register("subtitle")}
                name="subtitle"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image </label>
              <input
                {...register("image")}
                name="image"
                placeholder=" Descripton "
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

export default UpdateSingleServices;
