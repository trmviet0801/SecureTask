import * as React from "react";
import Svg, { Path } from "react-native-svg";

const EditIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M0 9.5V12h2.5l7.373-7.373-2.5-2.5L0 9.5Zm11.807-6.807c.26-.26.26-.68 0-.94l-1.56-1.56a.664.664 0 0 0-.94 0l-1.22 1.22 2.5 2.5 1.22-1.22Z"
    />
  </Svg>
);
export default EditIcon;
