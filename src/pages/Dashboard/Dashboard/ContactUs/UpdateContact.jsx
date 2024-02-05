const UpdateContact = () => {
    return (
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Update Contact Content </h2>
        <div className="w-full mx-auto addServicesWrap">
          <form>
            <div className="formControl">
              <div className="singleForm">
                <label>Contact Title </label>
                <input
                  name="city"
                  placeholder="Contact Title"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
             
              <div className="singleForm">
                <label>Image Upload </label>
                <input
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default UpdateContact;
  