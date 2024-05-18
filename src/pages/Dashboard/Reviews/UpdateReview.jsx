import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
} from "../../../redux/features/review/reviewApi";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const UpdateReview = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const { id } = useParams();
  const [updateSingleReview] = useUpdateReviewMutation();

  const { data: singleReview } = useGetSingleReviewQuery(id);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data) => {
    const { name, description, videoUrl, title } = data;

    let imageUrl = singleReview?.image; // Use existing image URL by default

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

    const updateReview = {
      id,
      data: {
        name,
        title,
        videoUrl,
        description,
        image: imageUrl, // Set the image URL
      },
    };

    updateSingleReview(updateReview)
      .unwrap()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Review updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/reviews");
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
  if (singleReview) {
    setValue("name", singleReview.name);
    setValue("title", singleReview.title);
    setValue("description", singleReview.description);
    setValue("videoUrl", singleReview.videoUrl);
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Review </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label> Name </label>
              <input
                {...register("name")}
                name="name"
                placeholder="Reviewer Name"
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
                placeholder="Designation"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>

            <div className="singleForm">
              <label>Video Url </label>
              <input
                {...register("videoUrl")}
                name="videoUrl"
                placeholder="Video URL "
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
                type="file"
                className="inputField"
                autoComplete="off"
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
