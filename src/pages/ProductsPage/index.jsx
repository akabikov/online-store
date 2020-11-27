import React from "react";
import ProductFilters from "../../components/ProductFilters";
import ProductsSorting from "../../components/ProductsSorting";
import ProductList from "../../components/ProductList";
import ItemsPerPageSelector from "../../components/Pagination/ItemsPerPageSelector";
import PageSwitcher from "../../components/Pagination/PageSwitcher";
import { getPaginatedProducts } from "../../redux/selectors";
import usePagination from "../../hooks/usePagination";
import "./style.scss";

function ProductsPage() {
  const {
    itemsPerPage,
    setItemsPerPage,
    numOfPages,
    page,
    switchPage,
    products,
  } = usePagination(getPaginatedProducts);

  return (
    <div className='ProductsPage'>
      <ProductFilters />
      <div className='product-list-header'>
        <ProductsSorting />
        <ItemsPerPageSelector
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          listOfOptions={[3, 5, 10, 20, 0]}
        />
      </div>
      <ProductList products={products} />
      <PageSwitcher
        numOfPages={numOfPages}
        currentPage={page}
        switchPage={switchPage}
      />
    </div>
  );
}

export default ProductsPage;
