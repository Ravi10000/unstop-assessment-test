import AddAssessment from "#/components/add-assessment-button";
import AddAssessmentPopup from "#/components/add-assessment-popup";
import AssessmentCard from "#/components/assessment-card";
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
    <div className="flex flex-col gap-3 bg-white p-5 md:rounded-bl-lg md:rounded-br-lg">
      <FloatingAddButton {...{ openPopup }} />
      <AddAssessmentPopup {...{ closePopup, isPopupOpen }} />
      <h2 className="text-_designBlue-600 font-semibold">
        Assessments Overview
      </h2>
      <AssessmentStats />
      <div className="flex items-center justify-between mt-5">
        <h2 className="text-_designBlue-600 font-semibold">My Assessments</h2>
        <div className="flex gap-2 md:hidden">
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
      <div className="flex flex-col gap-3 lg:flex-row flex-wrap">
        <AddAssessment {...{ openPopup }} />
        <AssessmentCard />
        <AssessmentCard count={1} />
        <AssessmentCard count={2} />
        <AssessmentCard count={3} />
        <AssessmentCard count={200} />
        <AssessmentCard count={32_4090} />
      </div>
    </div>
  );
}

export default AssessmentPage;
