import { useId } from "react";
import _ from "prop-types";

CustomInput.propTypes = {
  label: _.string,
};
function CustomInput({ label, ...rest }) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-_designBlue-600 font-medium text-[12px] md:text-[16px]"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        placeholder="Type Here"
        {...rest}
        className="border border-_designGray-200 p-3 w-full rounded-lg text-[12px] md:text-sm placeholder:font-medium placeholder:text-_designGray-300 focus:outline-_designBlue-500"
      />
    </div>
  );
}

export default CustomInput;
