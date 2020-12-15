import React from "react";
import { connect } from "react-redux";
import { getCompanies } from "../../../redux/selectors/products";
import objectFromArray from "../../../helpers/objectFromArray";
import BrandItem from "./BrandItem";
import "./style.scss";

const FILTER_NAME = "company";

function BrandFilter({ companies, company: selectedBrands = {}, setFilter }) {
  const toggleCheck = (company) =>
    setFilter(FILTER_NAME, addOrDelEntry(selectedBrands, company, true));

  const selectAll = () =>
    setFilter(FILTER_NAME, objectFromArray(companies, true));

  const unselectAll = () => setFilter(FILTER_NAME, {});

  const companiesList = companies.map((company) => (
    <li key={company}>
      <BrandItem
        label={company}
        isChecked={selectedBrands[company]}
        toggle={toggleCheck}
      />
    </li>
  ));

  return (
    <fieldset className='BrandFilter'>
      <legend>Brands</legend>
      <ul>{companiesList}</ul>
      <div>
        <button type='button' title='select all' onClick={selectAll}>
          <i className='zmdi zmdi-check-all'></i>
        </button>
        <button type='button' title='deselect all' onClick={unselectAll}>
          <i className='zmdi zmdi-square-o'></i>
        </button>
      </div>
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
