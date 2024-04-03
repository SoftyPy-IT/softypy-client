import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddAbout = () => {
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

        const { title, subtitle, managementName, position, managmentdescription, missionDescription, vissionDescription, teamName, teamPosition, description, teamDescriptions } = data
        const aboutItem = {
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
        fetch('http://localhost:5000/about', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(aboutItem)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.insertedId) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'About Items added Successfully !',
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
      <h2 className="text-3xl font-bold text-center">Add About Content </h2>
      <div className="w-full mx-auto addServicesWrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formControl">
            <div className="singleForm">
              <label>About Title </label>
              <input
                {...register("title", { required: true })}
                name="title"
                placeholder="About Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />

            </div>
            <div className="singleForm">
              <label>About Sub Title </label>
              <input
                {...register("subtitle", { required: true })}
                name="subtitle"
                placeholder="About Sub Title"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Name </label>
              <input
                {...register("managementName", { required: true })}
                name="managementName"
                placeholder="Management Name"
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Position </label>
              <input
                {...register("position", { required: true })}
                name="position"
                placeholder="Management Position  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Management Description </label>
              <input
                {...register("managmentdescription", { required: true })}
                name="managmentdescription"
                placeholder="Management Description  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Mission Description </label>
              <input
                {...register("missionDescription", { required: true })}
                name="missionDescription"
                placeholder="Mission Description "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>

            <div className="singleForm">
              <label>Vission Descripton </label>
              <input
                {...register("vissionDescription", { required: true })}
                name="vissionDescription"
                placeholder="Vission Descripton "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Name </label>
              <input
                {...register("teamName", { required: true })}
                name="teamName"
                placeholder="Team Name "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Position </label>
              <input
                {...register("teamPosition", { required: true })}
                name="teamPosition"
                placeholder="Team Position "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Team Description </label>
              <input
                {...register("teamDescriptions", { required: true })}
                name="teamDescriptions"
                placeholder="Team Description  "
                type="text"
                className="inputField"
                autoComplete="off"
              />
            </div>
            <div className="singleForm">
              <label>Image Upload </label>
              <input
                {...register("image", { required: true })}
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

export default AddAbout;
