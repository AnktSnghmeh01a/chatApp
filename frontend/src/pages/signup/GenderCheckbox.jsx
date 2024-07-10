import React from "react";

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (

    <div className="flex">
      {/* male */}
      <div className="form-control">
        <label className="cursor-pointer label mr-2">
          <span className="label-text mr-1">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender==="male"}   
            onChange = {()=> onCheckboxChange("male") }
   />
        </label>
      </div>

      {/* female */}
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text mr-1">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info"
            checked={selectedGender==="female"}   
            onChange={()=> onCheckboxChange("female") }
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
