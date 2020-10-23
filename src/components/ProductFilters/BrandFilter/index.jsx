import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCompanies } from "../../../redux/selectors";
import BrandItem from "./BrandItem";
import "./style.scss";

function BrandFilter({ companies, updateFilters }) {
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

  const companiesList = companies.map((company) => (
    <BrandItem
      key={company}
      label={company}
      isChecked={selectedBrands[company]}
      toggle={toggleCheck}
    />
  ));

  return (
    <fieldset>
      <legend>Brands</legend>
      {companiesList}
    </fieldset>
  );
}

const mapStateToProps = (state) => ({ companies: getCompanies(state) });

export default connect(mapStateToProps)(BrandFilter);
