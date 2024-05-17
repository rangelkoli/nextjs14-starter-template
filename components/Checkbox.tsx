import React from "react";

function Checkbox() {
  return (
    <div>
      <div className="content">
        <label className="block cursor-pointer w-8 h-8 relative overflow-hidden">
          <input type="checkbox" id="ch1 " className="absolute " />
          <div className="w-16 h-16 bg-black absolute"></div>
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
