import React from "react";
import { connect } from "react-redux";
import { getCompanies } from "../../../redux/selectors";
import objectFromArray from "../../../helpers/objectFromArray";
import BrandItem from "./BrandItem";
import "./style.scss";

function BrandFilter({ companies, company: selectedBrands = {}, setFilter }) {
  const toggleCheck = (company) =>
    setFilter("company", addOrDelEntry(selectedBrands, company, true));

  const selectAll = () =>
    setFilter("company", objectFromArray(companies, true));

  const unselectAll = () => setFilter("company", {});

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
      <BrandItem label='select all' toggle={selectAll} />
      <BrandItem label='unselect all' toggle={unselectAll} />
      {companiesList}
    </fieldset>
  );
}

function addOrDelEntry(obj, key, defaultValue) {
  const { [key]: deleted, ...rest } = obj;
  return deleted ? rest : { ...obj, [key]: defaultValue };
}

const mapStateToProps = (state) => ({
  companies: getCompanies(state),
});

export default connect(mapStateToProps)(BrandFilter);
