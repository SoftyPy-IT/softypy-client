import { useLoaderData } from "react-router-dom";
import "./ServiceData.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateServices = () => {
  const services = useLoaderData();
  const { _id} = services;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const title = data.title;
    const subtitle = data.title;
    const topservicetitle = data.topservicetitle;
    const topserviceDescription = data.topserviceDescription;
    const whatWedoDescription = data.whatWedoDescription;
    const productsDescription = data.productsDescription;
    const image = data.image;
    const description = data.description;
    const updatedServices = {
      name,
      title,
      subtitle,
      topservicetitle,
      topserviceDescription,
      whatWedoDescription,
      productsDescription,
      image,
      description,
    };
    fetch(`http://localhost:5000/services/${_id}`, {
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
            text: "Services Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update Services total </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>Name </label>
              <input
                {...register("name")}
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
                {...register("title")}
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
                {...register("subtitle")}
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
                {...register("topservicetitle")}
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
                {...register("topserviceDescription")}
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
                {...register("whatWedoDescription")}
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
                {...register("productsDescription")}
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

export default UpdateServices;
