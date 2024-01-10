import AddAssessment from "#/components/add-assessment-button";
import AddAssessmentPopup from "#/components/add-assessment-popup";
import AssessmentStats from "#/components/assessment-stats";
import FloatingAddButton from "#/components/floating-add-button";
import { useState } from "react";

function AssessmentPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log({ isPopupOpen });
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 min-h-[150vh] bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-_designBlue-600 font-semibold">My Assessments</h2>
        <div className="flex gap-2">
          <button className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/icons/search.svg" alt="search" />
          </button>
          <button className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/icons/filter.svg" alt="filter" />
          </button>
          <button className="h-[50px] w-[50px] flex items-center justify-center bg-white rounded-full">
            <img src="/icons/bar_chart.svg" alt="chart" />
          </button>
        </div>
      </div>
      <FloatingAddButton {...{ openPopup }} />
      <AddAssessmentPopup {...{ closePopup, isPopupOpen }} />
      <AssessmentStats />
      <AddAssessment {...{ openPopup }} />
    </div>
  );
}

export default AssessmentPage;
