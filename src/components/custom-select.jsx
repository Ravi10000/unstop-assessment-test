import { useState } from "react";
import _ from "prop-types";
import { cn } from "#/utilities/cn";
import { useClickAway } from "@uidotdev/usehooks";

CustomSelect.propTypes = {
  label: _.string,
  options: _.arrayOf(
    _.shape({
      label: _.string.isRequired,
      value: _.string.isRequired,
    })
  ).isRequired,
};

function CustomSelect({ label, options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((ps) => !ps);
  };
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <div role="select" className="flex flex-col gap-2" ref={ref}>
      {label && (
        <label
          className="text-_designBlue-600 font-medium text-[12px]  md:text-[16px]"
          onClick={toggle}
        >
          {label}
        </label>
      )}
      <div
        className="border border-_designGray-200 text-_designGray-300 p-3 rounded-lg text-[12px] md:text-sm flex justify-between items-center relative"
        onClick={toggle}
      >
        <h4>Select</h4>
        <img src="/icons/down-arrow.svg" alt="" />
        {isOpen && (
          <ul className="absolute top-full mt-2 left-0 bg-white w-full border border-_designGray-300 rounded-lg text-_designBlue-600 z-50">
            {options?.map(({ label, value }, idx) => (
              <li
                key={value}
                className={cn(
                  "p-4 hover:bg-_designGray-100 cursor-pointer",
                  options?.length - 1 > idx &&
                    "border-b border-b-_designGray-200 hover:text-_designBlue-500",
                  idx === 0 && "rounded-tl-lg rounded-tr-lg ",
                  options?.length - 1 === idx && "rounded-bl-lg rounded-br-lg "
                )}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CustomSelect;
