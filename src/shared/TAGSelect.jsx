import React, { forwardRef, memo } from "react";
import TAGLoader from "./TAGLoader";

const FRMSelect = forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      label,
      dynamicOptions,
      isError,
      disabled,
      isRequired = false,
      isLoading = true,
    },
    ref,
  ) => {
    return (
      <div className="input-wrapper">
        <label className="input-label" htmlFor={name}>
          {isRequired ? `${label}*` : label} {isLoading ? <TAGLoader /> : " "}
        </label>
        <select
          className="input-field"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          disabled={isError || isLoading || disabled}
        >
          {dynamicOptions?.map(({ id, title }) => {
            return (
              <option key={id} value={id}>
                {title}
              </option>
            );
          })}
        </select>
      </div>
    );
  },
);
export default memo(FRMSelect);
