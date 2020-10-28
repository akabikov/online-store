import React from "react";
import { connect } from "react-redux";
import { getCompanies } from "../../../redux/selectors";
import objectFromArray from "../../../helpers/objectFromArray";
import BrandItem from "./BrandItem";
import "./style.scss";

function BrandFilter({ companies, company: selectedBrands = {}, setFilter }) {
  const toggleCheck = (company) => {
    const { [company]: deleted, ...rest } = selectedBrands;
    setFilter(
      "company",
      deleted ? rest : { ...selectedBrands, [company]: true }
    );
  };

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

const mapStateToProps = (state) => ({
  companies: getCompanies(state),
});

export default connect(mapStateToProps)(BrandFilter);
