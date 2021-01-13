import * as PropTypes from "prop-types";
import * as React from "react";

import { SelectView, Option } from "./Select.view";

type SelectProps = {
  options: Option[];
  defaultOption: Option;
  selectCallback: (e: Option) => void;
};

export const Select = ({ options, defaultOption, selectCallback }: SelectProps) => {
  return <SelectView options={options} defaultOption={defaultOption} selectCallback={selectCallback} />;
};

Select.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  selectCallback: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  defaultOption: undefined,
  selectCallback: () => { },
};
