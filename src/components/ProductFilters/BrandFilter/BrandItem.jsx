import React from "react";

function BrandItem({ label, isChecked = false, isDisabled, toggle }) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={label}
          checked={isChecked}
          // disabled={isDisabled}
          onChange={() => toggle(label)}
        />
        {label}
      </label>
    </div>
  );
}

export default BrandItem;
