import React, { useImperativeHandle, useRef } from "react";

const Input = ({
  placeholder,
  className,
  ref,
}: {
  placeholder: string;
  className: string;
  ref: any;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus_method() {
          if (inputRef.current !== null) {
            inputRef.current.focus();
          }
        },
        scrollIntoView_method() {
          if (inputRef.current !== null) {
            inputRef.current.scrollIntoView();
          }
        },
      };
    },
    []
  );

  return (
    <input placeholder={placeholder} ref={inputRef} className={className} />
  );
};

export default Input;
