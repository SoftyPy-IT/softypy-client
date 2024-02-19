import { useForm } from "react-hook-form";
import "./SingleServices.css";
import { useParams } from "react-router-dom";
import { useGetSingleServicesQuery, useUpdateSingleServiceMutation } from "../../../redux/features/singleServices/singleServicesApi";

const UpdateSingleServices = () => {
  const { register, handleSubmit } = useForm();
const {id} = useParams()
const [updateSingleService] = useUpdateSingleServiceMutation()

const {data:singleServices} = useGetSingleServicesQuery(id)

  
  const onSubmit = (data) => {
    const {name, category, title, subtitle,description } = data;
    const updatedServices = {
     id,
     data: {
      name,
      category,
      title,
      subtitle,
      description,
     }
    };
  
    console.log(updateSingleService)
    updateSingleService(updatedServices)
 
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update single Services</h2>
      <div className="w-full mx-auto addServicesWrap">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formControl">
        <div className="singleForm">
          <label>Category </label>
          <select
          defaultValue="Select Category"
          {...register("category")}
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
          {...register("name")}
          name="name"
          placeholder="Service Name"
          type="text"
          className="inputField"
           autoComplete="off"
           defaultValue={singleServices?.name}
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
             defaultValue={singleServices?.title}
          />
        </div>
       
        <div className="singleForm">
          <label>Sub Title </label>
          <input
            {...register("subtitle")}
            name="subtitle"
            placeholder="Sub Title  "
            type="text"
            className="inputField"
             autoComplete="off"
             defaultValue={singleServices?.subtitle}
          />
        </div>
        <div className="singleForm">
            <label> Description </label> 
            <textarea
            defaultValue={singleServices?.description}
             {...register("description")}
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

export default UpdateSingleServices;
