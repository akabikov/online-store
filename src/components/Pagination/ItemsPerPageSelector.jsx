import React from "react";

function ItemsPerPageSelector({
  itemsPerPage,
  setItemsPerPage,
  listOfOptions = [5, 10, 0],
}) {
  const itemsPerPageOptions = listOfOptions.map((el) => (
    <option key={el} value={el}>
      {el || "all"}
    </option>
  ));

  return (
    <div>
      <label>
        {"Show "}
        <select
          value={itemsPerPage}
          onChange={({ target }) => setItemsPerPage(Number(target.value))}
        >
          {itemsPerPageOptions}
        </select>{" "}
        {" items per page"}
      </label>
    </div>
  );
}

export default ItemsPerPageSelector;
