import React from "react";

function ItemsPerPageSelector({
  itemsPerPage,
  setItemsPerPage,
  listOfOptions = [0],
}) {
  const itemsPerPageOptions = listOfOptions.map((el) => (
    <option key={el} value={el}>
      {el || "all"}
    </option>
  ));

  return (
    <div className='ItemsPerPageSelector'>
      <select
        id='items-per-page-selector'
        value={itemsPerPage}
        onChange={({ target }) => setItemsPerPage(Number(target.value))}
      >
        {itemsPerPageOptions}
      </select>
      <label htmlFor='items-per-page-selector'> per page</label>
    </div>
  );
}

export default ItemsPerPageSelector;
