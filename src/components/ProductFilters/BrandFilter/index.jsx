import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCompanies } from "../../../redux/selectors";
import BrandItem from "./BrandItem";
import "./style.scss";

function BrandFilter({ companies }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  console.log("BrandFilter component rendered");

  const toggleCheck = (company) =>
    setSelectedBrands({
      ...selectedBrands,
      [company]: !selectedBrands[company],
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
