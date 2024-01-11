function AssessmentStats() {
  return (
    <div className="border border-_designGray-200 rounded-lg text-sm font-medium text-_designBlue-600 md:font-semibold xl:flex xl:gap-12 xl:w-fit">
      <div className="flex justify-between border-b border-b-_designGray-200 xl:border-none min-w-[150px]">
        <div className="flex flex-col gap-3 px-3 py-2 md:py-4 flex-1">
          <h3 className="">Total Assessment</h3>
          <div className="flex items-center gap-3">
            <img src="/icons/assessment-2.svg" alt="" />
            <span className="font-semibold text-[16px] md:text-[20px]">34</span>
          </div>
        </div>
        <div className="w-[1px] bg-_designGray-200  xl:hidden" />
        <div className="flex flex-col gap-3  px-3 py-2 flex-1 xl:hidden md:py-4">
          <h3 className="">Total Purpose</h3>
          <div className="flex items-center gap-3">
            <img src="/icons/link.svg" alt="" />
            <span className="font-semibold text-[16px] md:text-[20px]">11</span>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 flex flex-col gap-3 border-b border-b-_designGray-200 xl:border-b-transparent xl:border-l xl:border-l-_designGray-200 md:py-4">
        <h3>Candidates</h3>
        <div className="flex gap-5">
          <img src="/icons/users.svg" alt="" />
          <div>
            <p className="flex items-center gap-1">
              <span className="font-semibold md:text-[20px]">11,145</span>
              <span className="text-_designGreen-300 text-[10px]">+89</span>
            </p>
            <p className="text-[10px]">Total Candidate</p>
          </div>
          <div className="w-[1px] bg-_designGray-200" />
          <div>
            <p className="flex items-center gap-1">
              <span className="font-semibold md:text-[20px]">1,14</span>
              <span className="text-_designGreen-300 text-[10px]">+89</span>
            </p>
            <p className="text-[10px]">Who Attamped</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 flex flex-col gap-3 border-l border-l-_designGray-200 md:py-4">
        <h3>Candidates Source</h3>
        <div className="flex gap-5">
          <img src="/icons/source.svg" alt="" />
          <div>
            <p className="flex items-center">
              <span className="font-semibold md:text-[20px]">11,000</span>
              <span className="text-_designGreen-300 text-[10px]">+89</span>
            </p>
            <p className="text-[10px]">E-mail</p>
          </div>
          <div className="w-[1px] bg-_designGray-200" />
          <div>
            <p className="flex items-center">
              <span className="font-semibold md:text-[20px]">11,000</span>
              <span className="text-_designGreen-300 text-[10px]">+89</span>
            </p>
            <p className="text-[10px]">Social Share</p>
          </div>
          <div className="w-[1px] bg-_designGray-200" />
          <div>
            <p className="flex items-center">
              <span className="font-semibold md:text-[20px]">11,000</span>
              <span className="text-_designGreen-300 text-[10px]">+89</span>
            </p>
            <p className="text-[10px]">Unique Link</p>
          </div>
        </div>
      </div>
      <div className="flex-col gap-3 px-3 py-2 hidden xl:flex border-l border-l-_designGray-200 md:py-4 md:gap-5 min-w-[200px]">
        <h3 className="">Total Purpose</h3>
        <div className="flex items-center gap-3">
          <img src="/icons/link.svg" alt="" />
          <span className="font-semibold text-[16px] md:text-[20px]">11</span>
        </div>
      </div>
    </div>
  );
}

export default AssessmentStats;
