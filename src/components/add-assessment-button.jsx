import _ from "prop-types";

AddAssessment.propTypes = {
  openPopup: _.func,
};
function AddAssessment({ openPopup }) {
  return (
    <button
      className="bg-_designGray-100 border border-dashed border-_designGray-200 rounded-xl p-5 flex flex-col gap-2 items-center text-_designBlue-600 max-w-[390px] md:gap-4"
      onClick={openPopup}
    >
      <div className="h-[50px] aspect-square flex items-center justify-center bg-white rounded-full md:h-[70px]">
        <img src="/icons/add.svg" alt="add" />
      </div>
      <h3 className="text-sm font-semibold md:text-[18px]">New Assessment</h3>
      <p className="text-[12px] max-w-[285px] font-medium">
        From here you can add questions of multiple types like MCQs, subjective
        &#40;text or paragraph&#41;!
      </p>
    </button>
  );
}

export default AddAssessment;
