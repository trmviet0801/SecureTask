import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WorkIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 12H3V8a2 2 0 0 1 2-2h4m-5 6v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M4 12h6m10 0h1V8a2 2 0 0 0-2-2h-4m5 6h-6m0 0v-2h-4v2m4 0v2h-4v-2M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M9 6h6"
    />
  </Svg>
);
export default WorkIcon;
