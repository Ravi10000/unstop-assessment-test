import { cn } from "#/utilities/cn";
import { motion } from "framer-motion";
import _ from "prop-types";
import CustomInput from "./custom-input";
import CustomSelect from "./custom-select";
import { useClickAway } from "@uidotdev/usehooks";
import DynamicSelect from "./dynamic-select";

AddAssessmentPopup.propTypes = {
  closePopup: _.func,
  isPopupOpen: _.bool,
};

const options = [
  {
    label: "test label 1",
    value: "test value 1",
  },
  {
    label: "test label 2",
    value: "test value 2",
  },
  {
    label: "test label 3",
    value: "test value 3",
  },
];

function AddAssessmentPopup({ closePopup, isPopupOpen }) {
  const ref = useClickAway(closePopup);
  if (!isPopupOpen) return null;
  return (
    <div className="w-screen h-screen fixed z-20 left-0 bottom-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full bg-black/10"
      ></motion.div>
      <div
        ref={ref}
        className={cn(
          "w-full bg-white h-[80%] md:h-fit max-w-[580px] absolute left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-40 rounded-tl-xl rounded-tr-xl md:rounded-xl transition-all flex flex-col -bottom-full",
          isPopupOpen ? "bottom-0" : "-bottom-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-b-_designGray-200">
          <h3 className="text-sm font-semibold text-_designBlue-600 ">
            Sub-Section Details
          </h3>
          <button onClick={closePopup}>
            <img src="/icons/close-red.svg" alt="close popup" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <CustomInput label="Name of assessment" />
          <CustomSelect label="Purpose of the test is" options={options} />
          <CustomSelect label="Description" options={options} />
          <DynamicSelect label="Skills" />
          <CustomInput label="Duration of assessment" placeholder="HH:MM:SS" />
        </div>
        <div className="p-4 border-t border-t-_designGray-200 mt-auto">
          <button className="w-full h-10 flex justify-center items-center bg-_designBlue-500 text-white font-semibold text-sm rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAssessmentPopup;
