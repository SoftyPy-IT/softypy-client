import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCreateReviewsMutation } from "../../../redux/features/review/reviewApi";


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddReviews = () => {
const [createReviews,{isSuccess}] = useCreateReviewsMutation()

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
        const imageUrl = imageData?.data?.url;
        const {title, videoUrl, name, description} = data
        const newSingleServices = {
          name,
          title,
          videoUrl,
          image: imageUrl,
          description
        
        }
        createReviews(newSingleServices)
        if(isSuccess){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Review added Successfully !',
            showConfirmButton: false,
            timer: 1500
          })
        }
      
      })
      .catch((error) => {
        console.error(error);
      });

      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Reviews </h2>
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
                placeholder="Title"
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
                placeholder="Products Descripton "
                type="file"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
                <label> Description </label> 
                <textarea
                 {...register("description", { required: true })}
                name="description" placeholder="Description" id="" cols="30" rows="10"  autoComplete="off"></textarea>
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

export default AddReviews;
