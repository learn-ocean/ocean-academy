import * as PropTypes from "prop-types";
import * as React from "react";
import { useState, useEffect } from "react";

import { SelectStyled } from "./Select.style";

export type Option = {
  name: string
  path: string
}

type SelectViewProps = {
  options: Option[];
  defaultOption: Option;
  selectCallback: (e: Option) => void;
};

export const SelectView = ({ options, defaultOption, selectCallback }: SelectViewProps) => {
  const [classes, setClasses] = useState(["select-menu"]);
  const [selectedIndex, setSelectedIndex] = useState(options.indexOf(defaultOption) || 0);

  useEffect(() => {
    setSelectedIndex(options.indexOf(defaultOption) || 0);
  }, [defaultOption, options]);

  const handleClick = () => {
    if (!classes.includes("open")) setClasses([...classes, "open"]);
  };

  const handleSelect = (i: number) => {
    selectCallback(options[i]);
    setSelectedIndex(i);
    if (i > selectedIndex) setClasses([...classes, "tilt-down"]);
    else if (i < selectedIndex) setClasses([...classes, "tilt-up"]);
    else setClasses(["select-menu"]);
    setTimeout(() => {
      setClasses(["select-menu"]);
    }, 500);
  };

  return (
    <SelectStyled className={classes.join(" ")} onClick={() => handleClick()}>
      <select data-menu defaultValue={selectedIndex}>
        {options.map((option) => (
          <option key={option.path}>{option.name}</option>
        ))}
      </select>

      <div className="selector">

        <em></em>

        <ul style={{ transform: `translateY(-${selectedIndex * 36}px)` }}>
          {options.map((option) => (
            <li key={option.path}>{option.name}</li>
          ))}
        </ul>

      </div>

      <ul style={{ transform: `translateY(-${selectedIndex * 36}px)` }}>
        {options.map((option, i) => (
          <li key={option.path} onClick={() => handleSelect(i)}>
            {option.name}
          </li>
        ))}
      </ul>

    </SelectStyled>
  );
};

SelectView.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  selectCallback: PropTypes.func.isRequired,
};

SelectView.defaultProps = {};
