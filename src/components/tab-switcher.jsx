import { cn } from "#/utilities/cn";
import { Link, useSearchParams } from "react-router-dom";

const tabs = [
  {
    label: "My Assessments",
    value: "my-assessments",
  },
  {
    label: "Unstop Assessments",
    value: "unstop-assessments",
  },
];
function TabSwitcher() {
  const [searchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab") || tabs[0].value;
  return (
    <div className="grid grid-cols-2 w-full bg-white sticky top-[75px] md:top-[64px]">
      {tabs?.map(({ label, value }) => (
        <Link
          key={value}
          to={"?tab=" + value}
          className={cn(
            "border-b-2 border-b-_designGray-100 text-_designBlue-100 pb-3 font-medium text-sm text-center md:py-6",
            selectedTab === value
              ? "border-b-_designBlue-500 text-_designBlue-500"
              : ""
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default TabSwitcher;
