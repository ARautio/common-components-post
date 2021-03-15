import React from "react";
import { oneOf, oneOfType, node, arrayOf } from "prop-types";

import classnames from "classnames";
import "./typography.scss";

/**
 *  Heading1 is a largest Header typography component
 *
 * @component
 * @example
 * return (
 *   <Heading1>Bodytext</Heading1>
 * )
 **/

const propTypes = {
  /**
   * Aligns text either left, center or right
   */
  align: oneOf(["left", "center", "right"]),
  children: oneOfType([arrayOf(node), node]).isRequired,
};

const Heading1 = ({ children, align }) => (
  <h1 className={classnames("text", "text--heading1", `text--align-${align}`)}>
    {children}
  </h1>
);

Heading1.propTypes = propTypes;
export default Heading1;
