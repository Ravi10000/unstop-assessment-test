import { cn } from "#/utilities/cn";
import _ from "prop-types";

AssessmentCard.propTypes = {
  count: _.number,
};
function AssessmentCard({ count = 0 }) {
  const countStringLength = count?.toString?.()?.length;
  const labelCount = countStringLength > 4 ? 2 : count > 3 ? 3 : count;
  const remaning = count - labelCount;
  console.log({ remaning });
  return (
    <div className="border border-_designGray-200 rounded-lg min-w-[300px] max-w-[390px] p-3 flex flex-col gap-3 md:gap-4">
      <div className="flex justify-between items-start border-b border-b-_designGray-200 border-dashed pb-3 md:pb-4">
        <div className="flex gap-3 items-center lg:flex-col lg:items-start">
          <img src="/icons/assessment-3.svg" alt="assessment" />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-sm text-_designBlue-600">
              Math Assessment
            </h3>
            <div className="flex gap-2 items-center text-[12px] font-medium">
              <p>Job</p>
              <div className=" h-2/3 w-[1px] bg-_designGray-200" />
              <img src="/icons/clock.svg" alt="time and date" />
              <p className="text-_designGray-300">20 Apr 23</p>
            </div>
          </div>
        </div>
        <button>
          <img src="/icons/more.svg" alt="options" />
        </button>
      </div>
      <div className="flex gap-2 justify-between">
        <div className="flex gap-2">
          <div className="font-medium text-[10px] text-_designBlue-600">
            <p>00</p>
            <p>Duration</p>
          </div>
          <div className="font-medium text-[10px] text-_designBlue-600">
            <p>00</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="flex items-center gap-2 font-medium text-[12px] text-_designBlue-600 border border-_designBlue-600 rounded-full px-2 py-1">
            <img src="/icons/share.svg" alt="share" />
            <span>Share</span>
          </button>
          {count > 0 && (
            <>
              <div
                className="flex"
                style={{ width: `${30 + (labelCount - 1) * 15}px` }}
              >
                {Array(labelCount)
                  ?.fill()
                  ?.map((_, idx) => (
                    <p
                      key={idx}
                      style={{
                        ...(idx !== 0 && {
                          transform: `translateX(calc(-50% * ${idx}))`,
                        }),
                      }}
                      className={cn(
                        "h-[30px] aspect-square text-white bg-[#6548EE] rounded-full text-[12px] flex items-center justify-center border-2 border-white",
                        idx == 1 && "bg-[#3079E1]",
                        idx == 2 && "bg-[#E9407A]"
                      )}
                    >
                      LP
                    </p>
                  ))}
              </div>
              {count > 3 && (
                <span className="font-semibold text-[12px] text-_designBlue-600">
                  +{count - 3}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AssessmentCard;
