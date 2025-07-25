import * as React from "react";
import Svg, { Path } from "react-native-svg";
const LockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10 5.333h-.667V4a3.335 3.335 0 0 0-6.666 0v1.333H2c-.733 0-1.333.6-1.333 1.334v6.666c0 .734.6 1.334 1.333 1.334h8c.733 0 1.333-.6 1.333-1.334V6.667c0-.734-.6-1.334-1.333-1.334ZM4 4c0-1.107.893-2 2-2s2 .893 2 2v1.333H4V4Z"
    />
  </Svg>
);
export default LockIcon;
