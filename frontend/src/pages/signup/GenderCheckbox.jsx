import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      {/* male */}
      <div className="form-control">
        <label className="cursor-pointer label mr-2">
          <span className="label-text mr-1">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </label>
      </div>

      {/* female */}
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text mr-1">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
