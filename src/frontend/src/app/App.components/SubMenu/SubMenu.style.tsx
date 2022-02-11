import styled from 'styled-components/macro'
import { bgTextColor, primaryColor, backgroundColorLight, textColor } from 'styles'

const bgColorhover = "#e000cf"

export const SubMenuStyled = styled.div`

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}
.dropdown:not(:checked) + label .uil {
    font-size: 24px;
    margin-left: 10px;
    transition: transform 200ms linear;
  }
  .dropdown:checked + label .uil {
    transform: rotate(180deg);
    font-size: 24px;
    margin-left: 10px;
    transition: transform 200ms linear;
  }
.dropdown:checked + label,
.dropdown:not(:checked) + label{
background-color:#141414
  color: ${textColor};
  line-height: 50px;
  font-size: 14px;
 font-weight: 700;
  position: relative;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  cursor: pointer;
}

.dropdown:checked + label:before,
.dropdown:not(:checked) + label:before{
  position: fixed;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: auto;
  pointer-events: none;
}
.dropdown:checked + label:before{
  pointer-events: auto;
}
.dropdown:not(:checked) + label .uil {
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.dropdown:checked + label .uil {
  transform: rotate(180deg);
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.section-dropdown {
  position: absolute;
  padding: 5px;
  background-color: #111;
  top: 55px;
  left: 0;
  width: 200px;
  border-radius: 4px;
  display: block;
  box-shadow: 0 14px 35px 0 rgba(9,9,12,0.4);
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
  transition: all 200ms linear;
}
.dark-light:checked ~ .sec-center .section-dropdown {
  background-color: #fff;
  box-shadow: 0 14px 35px 0 rgba(9,9,12,0.15);
}
.dropdown:checked ~ .section-dropdown{
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.section-dropdown:before {
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  content: '';
  display: block;
  z-index: 1;
}
.section-dropdown:after {
  position: absolute;
  top: -7px;
  left: 30px;
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent; 
  border-bottom: 8px solid #111;
  content: '';
  display: block;
  z-index: 2;
  transition: all 200ms linear;
}
.dark-light:checked ~ .sec-center .section-dropdown:after {
  border-bottom: 8px solid #fff;
}

a {
  position: relative;
  color: #fff;
  transition: all 200ms linear;
  font-weight: 700;
  font-size: 14px;
  border-radius: 2px;
  padding: 5px 0;
  padding-left: 20px;
  padding-right: 15px;
  margin: 2px 0;
  text-align: left;
  text-decoration: none;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  justify-content: space-between;
    -ms-flex-pack: distribute;
}
.dark-light:checked ~ .sec-center .section-dropdown a {
  color: #102770;
}
a:hover {
  color: #fff;
  background-color: ${bgColorhover};
}
.dark-light:checked ~ .sec-center .section-dropdown a:hover {
  color: ${bgColorhover};
  background-color: #102770;
}
a .uil {
  font-size: 22px;
}

.dark-light:checked ~ .sec-center .section-dropdown .for-dropdown-sub{
  color: #102770;
}
.dark-light:checked ~ .sec-center .section-dropdown .for-dropdown-sub:hover{
  color: ${bgColorhover};
  background-color: #102770;
}

.arrowDown{

}

em {
    --r: 225deg;
    display: block;
    position: relative;
    right: 1px;
    top: 0;
    width: 7px;
    height: 7px;
    margin-bottom: 7px;
    padding-left: 9px;
    -webkit-backface-visibility: hidden;


    &:before {
      --o: 0.4;
      content: '';
      width: 7px;
      height: 7px;
      opacity: var(--o);
      display: block;
      position: relative;
      transition: opacity 0.2s ease;
      transform: rotate(var(--r)) scale(0.75);
    }

    &:before {
      border-left: 2px solid ${textColor};
      border-top: 2px solid ${textColor};
      top: 1px;
    }

    &:after {
      border-right: 2px solid ${textColor};
      border-bottom: 2px solid ${textColor};
      bottom: 1px;
    }


}


`




