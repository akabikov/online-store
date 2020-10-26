import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getCompanies,
  getFilteredProductsCompanies,
} from "../../../redux/selectors";
import BrandItem from "./BrandItem";
import "./style.scss";

function BrandFilter({ companies, filteredCompanies, updateFilters }) {
  const [selectedBrands, setSelectedBrands] = useState({});
  console.log("BrandFilter component rendered");

  useEffect(() => {
    updateFilters({ company: selectedBrands });
  }, [selectedBrands, updateFilters]);

  const toggleCheck = (company) =>
    setSelectedBrands((selectedBrands) => {
      const { [company]: deleted, ...rest } = selectedBrands;
      return deleted ? rest : { ...selectedBrands, [company]: true };
    });

  const selectAll = () =>
    setSelectedBrands(
      companies.reduce((obj, company) => {
        obj[company] = true;
        return obj;
      }, {})
    );

  const unselectAll = () => setSelectedBrands({});

  const companiesList = companies.map((company) => (
    <BrandItem
      key={company}
      label={company}
      isChecked={selectedBrands[company]}
      // isDisabled={!filteredCompanies.has(company)}
      toggle={toggleCheck}
    />
  ));

  return (
    <fieldset>
      <legend>Brands</legend>
      <BrandItem label='select all' toggle={selectAll} />
      <BrandItem label='unselect all' toggle={unselectAll} />
      {companiesList}
    </fieldset>
  );
}

const mapStateToProps = (state) => ({
  companies: getCompanies(state),
  // filteredCompanies: getFilteredProductsCompanies(state),
});

export default connect(mapStateToProps)(BrandFilter);
