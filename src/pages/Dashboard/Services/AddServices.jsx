import { useForm } from "react-hook-form";
import "./ServiceData.css";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
const AddServices = () => {
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
        const {name, title, subtitle, topserviceDescription, topservicetitle,whatWedoDescription, productsDescription,description, } = data
        const newServices = {
          name,
          title,
          subtitle,
          topservicetitle,
          topserviceDescription,
          whatWedoDescription,
          productsDescription,
          image: imageUrl,
          description,
        
        }
        console.log(newServices)
        fetch('http://localhost:5000/services', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newServices)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Service added Successfully !',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      
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
              <label>Name </label>
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
              <label> Title </label>
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
              <label> Sub Title </label>
              <input
               {...register("subtitle", { required: true })}
                name="subtitle"
                placeholder="Sub Title"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Top Service Title </label>
              <input
               {...register("topservicetitle", { required: true })}
                name="topservicetitle"
                placeholder="Top Service Title"
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Top Service Description </label>
              <input
                {...register("topserviceDescription", { required: true })}
                name="topserviceDescription"
                placeholder="Top Service Description "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>What we do Descripton </label>
              <input
                 {...register("whatWedoDescription", { required: true })}
                name="whatWedoDescription"
                placeholder="What we do Descripton "
                type="text"
                className="inputField"
                 autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Products Descripton </label>
              <input
                {...register("productsDescription", { required: true })}
                name="productsDescription"
                placeholder="Products Descripton "
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

export default AddServices;
