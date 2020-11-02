import React from "react";

function ItemsPerPageSelector({
  listOfItemsPerPage,
  itemsPerPage,
  setItemsPerPage,
}) {
  const itemsPerPageOptions = listOfItemsPerPage.map((el) => (
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
