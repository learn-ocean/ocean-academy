import * as PropTypes from "prop-types";
import * as React from "react";
import {Option} from "../Select/Select.view"
import { Link } from 'react-router-dom'
import { SubMenuStyled } from "./SubMenu.style";

import {useState} from 'react';


type SubMenuProps = {
  options: Option[];
  label: string;
  selectCallback: (e: Option) => void;
};

export const SubMenuView = ({ options, label, selectCallback }: SubMenuProps) => {

  const [isActive, setActive] = useState<boolean>(false);


  return (
        <SubMenuStyled>
            <div className="sec-center" onMouseDown={() => {setActive(!isActive)} }> 	
	  	<input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label className="for-dropdown" htmlFor="dropdown"> {label} <em className={!isActive ? "arrow" : "arrowDown"}></em></label>
  		<div className="section-dropdown"> 
          {options.map(option =>  			
          <Link to={option.path}>{option.name}<i className="uil uil-arrow-right"></i></Link>
 )}
 
  		</div>
  	</div>
        </SubMenuStyled>
  );
};

SubMenuView.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  selectCallback: PropTypes.func.isRequired,
};

SubMenuView.defaultProps = {};
