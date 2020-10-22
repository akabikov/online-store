import React from "react";

function BrandItem({ label, isChecked = false, toggle }) {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          name={label}
          checked={isChecked}
          onChange={() => toggle(label)}
        />
        {label}
      </label>
    </div>
  );
}

export default BrandItem;
