import * as PropTypes from "prop-types";
import * as React from "react";

import { SelectView } from "./Select.view";

type SelectProps = {
  options: string[];
  defaultOption: string;
  selectCallback: (e: string) => void;
};

export const Select = ({ options, defaultOption, selectCallback }: SelectProps) => {
  return <SelectView options={options} defaultOption={defaultOption} selectCallback={selectCallback} />;
};

Select.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  selectCallback: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  defaultOption: undefined,
  selectCallback: () => {},
};
