import _ from "prop-types";
import { useList } from "@uidotdev/usehooks";

DynamicSelect.propTypes = {
  label: _.string,
};
function DynamicSelect({ label, ...rest }) {
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
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
              className="text-[12px] font-medium text-_designBlue-600 bg-_designBlue-300 w-fit px-3 py-2 rounded-full flex items-center gap-3"
            >
              <span>{item}</span>
              <img
                src="/icons/close.svg"
                alt="remove"
                className="h-[10px] w-fit"
              />
            </div>
          ))}
        </div>
        <input
          className="border-t border-t-_designGray-200 p-3 w-full text-[12px] md:text-sm placeholder:font-medium placeholder:text-_designGray-300 focus:outline-_designBlue-500 rounded-bl-lg rounded-br-lg"
          placeholder="Type here"
          {...rest}
        />
      </div>
    </div>
  );
}

export default DynamicSelect;
