import * as PropTypes from "prop-types";
import * as React from "react";

import { DialogView } from "./Dialog.view";

type DialogProps = {
  children: string[];
  character: string;
};

export const Dialog = ({ children, character }: DialogProps) => {
  return <DialogView text={children[0]} character={character} />;
};

Dialog.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  character: PropTypes.string,
};

Dialog.defaultProps = {
  character: "admiral",
};
