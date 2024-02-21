import { useForm } from "react-hook-form";
import './SingleServices.css'
import Swal from "sweetalert2";
import { useCreateSingleServicesMutation } from "../../../redux/features/singleServices/singleServicesApi";
import { useNavigate } from "react-router-dom";


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddSingleServices = () => {
  const navigate = useNavigate();
const [createSingleServices,{isSuccess}] = useCreateSingleServicesMutation()

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
        const {title, subtitle, category, name, description} = data
        const newSingleServices = {
          name,
          title,
          subtitle,
          category,
          image: imageUrl,
          description
        
        }
        createSingleServices(newSingleServices)
        if(isSuccess){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Single Service added Successfully !',
            showConfirmButton: false,
            timer: 1500
          })
        }
        navigate('/dashboard/SingleServices')
      
      })
      .catch((error) => {
        console.error(error);
      });

      
   };

   
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Add Services</h2>
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
              name='category'
            >
                
                <option>Development</option>
                <option>ERP</option>
                <option>Design</option>
                <option>Digital</option>
                <option>SEO</option>
            </select>
            </div>
            <div className="singleForm">
            <label>Service Name </label>
            <input
              {...register("name", { required: true })}
              name="name"
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
                name="title"
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
                name="subtitle"
                placeholder="Sub Title  "
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

export default AddSingleServices;
