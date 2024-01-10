import _ from "prop-types";
import { useList } from "@uidotdev/usehooks";
import { useState } from "react";

DynamicSelect.propTypes = {
  label: _.string,
};
function DynamicSelect({ label, ...rest }) {
  const [currentText, setCurrentText] = useState("");
  const [list, { push, removeAt }] = useList([
    "UI/UX",
    "React.js",
    "Node.js",
    "Tailwind",
    "MongoDB",
    "Firebase",
  ]);
  return (
    <div>
      {label && (
        <label className="text-_designBlue-600 font-medium text-[12px] md:text-[16px]">
          {label}
        </label>
      )}
      <div className="border border-_designGray-200 rounded-lg">
        <div className="min-h-20 flex flex-wrap gap-3 p-3">
          {list?.map((item, idx) => (
            <div
              key={idx}
              className="text-[12px] font-medium text-_designBlue-600 bg-_designBlue-300 w-fit px-3 py-2 rounded-full flex items-center gap-3 h-fit"
            >
              <span>{item}</span>
              <button
                onClick={() => {
                  removeAt(idx);
                }}
              >
                <img
                  src="/icons/close.svg"
                  alt="remove"
                  className="h-[10px] w-fit"
                />
              </button>
            </div>
          ))}
        </div>
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            if (currentText?.length) push(currentText);
            setCurrentText("");
          }}
        >
          <input
            value={currentText}
            onChange={(e) => {
              setCurrentText(e.target.value);
            }}
            className="border-t border-t-_designGray-200 p-3 w-full text-[12px] md:text-sm placeholder:font-medium placeholder:text-_designGray-300 focus:outline-_designBlue-500 rounded-bl-lg rounded-br-lg"
            placeholder="Type here"
            {...rest}
          />
          <button className="border border-_designBlue-500 text-white rounded-full h-6 flex justify-center items-center aspect-square absolute right-2 top-1/2 -translate-y-1/2">
            <img src="/icons/add.svg" className="h-3 w-fit" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default DynamicSelect;
