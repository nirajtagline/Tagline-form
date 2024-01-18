import React, { forwardRef, memo } from "react";

const TAGTextField = forwardRef(
  (
    { onChange, onBlur, name, label, isRequired = false, inputError = false },
    ref,
  ) => {
    return (
      <div className="input-wrapper">
        <label className="input-label" htmlFor={name}>
          {isRequired ? (
            <>
              {label} <span className="required">*</span>
            </>
          ) : (
            label
          )}
        </label>
        <input
          className={`input-field ${inputError ? " error" : ""}`}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  },
);

export default memo(TAGTextField);
