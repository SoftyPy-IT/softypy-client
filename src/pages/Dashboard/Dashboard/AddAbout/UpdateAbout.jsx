import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateAbout = () => {
  const { register, handleSubmit } = useForm();
  const aboutItem = useLoaderData();
  console.log(aboutItem)
  const { _id, title, subtitle, managementName, position, managmentdescription, missionDescription, vissionDescription, teamName, teamPosition, teamDescriptions, description } = aboutItem;


  const onSubmit = (data) => {
    const { title, subtitle, managementName, position, managmentdescription, missionDescription, vissionDescription, teamName, teamPosition, description, teamDescriptions, imageUrl } = data
    const updateAboutItem = {
      title,
      subtitle,
      managementName,
      position,
      managmentdescription,
      missionDescription,
      vissionDescription,
      teamName,
      teamPosition,
      image: imageUrl,
      description,
      teamDescriptions

    }
    fetch(`https://softypy-server-fzco.vercel.app/about/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateAboutItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "About Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };


  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center">Update About Content total {aboutItem.length} </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>About Title </label>
              <input
                {...register("title")}
                name="title"
                placeholder={title}
                type="text"
                className="inputField"
                autoComplete="off"
              />

            </div>
            <div className="singleForm">
              <label>About Sub Title </label>
              <input
                {...register("subtitle")}
                name="subtitle"
                placeholder={subtitle}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Name </label>
              <input
                {...register("managementName")}
                name="managementName"
                placeholder={managementName}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Position </label>
              <input
                {...register("position")}
                name="position"
                placeholder={position}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Description </label>
              <input
                {...register("managmentdescription")}
                name="managmentdescription"
                placeholder={managmentdescription}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Mission Description </label>
              <input
                {...register("missionDescription")}
                name="missionDescription"
                placeholder={missionDescription}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>

            <div className="singleForm">
              <label>Vission Descripton </label>
              <input
                {...register("vissionDescription")}
                name="vissionDescription"
                placeholder={vissionDescription}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Name </label>
              <input
                {...register("teamName")}
                name="teamName"
                placeholder={teamName}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Position </label>
              <input
                {...register("teamPosition")}
                name="teamPosition"
                placeholder={teamPosition}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Description </label>
              <input
                {...register("teamDescriptions")}
                name="teamDescriptions"
                placeholder={teamDescriptions}
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image Upload </label>
              <input
                {...register("image")}
                name='image'
                type="file"
                multiple={true}
                accept="image/*"
                placeholder="Upload Images"
                className="file-input file-input-bordered  w-full "
                autoComplete="off"
              />

            </div>
            <div className="singleForm">
              <label> Description </label>
              <textarea
                {...register("description")}
                name="description"
                placeholder={description}
                id=""
                cols="30"
                rows="10"
                autoComplete="off"
              ></textarea>
            </div>
          </div>

          <div className="formControl">
            <button className="submitBtn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAbout;
