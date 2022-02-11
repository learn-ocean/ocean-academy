import * as PropTypes from "prop-types";
import * as React from "react";
import {Option} from "../Select/Select.view"
import { SubMenuView } from "./SubMenu.view";

type SubMenuProps = {
  options: Option[];
  label: string;
  selectCallback: (e: Option) => void;
};

export const SubMenu = ({ options, label, selectCallback }: SubMenuProps) => {
  return <SubMenuView options={options} label={label} selectCallback={selectCallback} />;
};

SubMenu.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  selectCallback: PropTypes.func,
};

SubMenu.defaultProps = {
  options: [],
  defaultOption: undefined,
  selectCallback: () => { },
};
