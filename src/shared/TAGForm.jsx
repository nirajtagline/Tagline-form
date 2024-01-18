import React, { memo } from "react";

const TAGForm = ({ handleSubmit, children, ...rest }) => {
  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}
    </form>
  );
};

export default memo(TAGForm);
