import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RemoveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M1 10.667C1 11.4 1.6 12 2.333 12h5.334C8.4 12 9 11.4 9 10.667v-8H1v8Zm8.667-10H7.333L6.667 0H3.333l-.666.667H.333V2h9.334V.667Z"
    />
  </Svg>
);
export default RemoveIcon;
