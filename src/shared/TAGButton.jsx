import React, { memo } from "react";

const TAGButton = ({ text = "Submit", type = "submit", ...rest }) => {
  return (
    <button className="submit-btn" {...rest}>
      {text}
    </button>
  );
};

export default memo(TAGButton);
