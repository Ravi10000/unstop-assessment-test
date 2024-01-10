import { cn } from "#/utilities/cn";
import { Link } from "react-router-dom";
import _ from "prop-types";

TabSwitcher.propTypes = {
  tabs: _.arrayOf(
    _.shape({
      label: _.string.isRequired,
      value: _.string.isRequired,
    })
  ).isRequired,
  selectedTab: _.string.isRequired,
};
function TabSwitcher({ tabs, selectedTab }) {
  return (
    <div className="grid grid-cols-2 w-full bg-white">
      {tabs?.map(({ label, value }) => (
        <Link
          key={value}
          to={"?tab=" + value}
          className={cn(
            "border-b-2 border-b-_designGray-100 text-_designBlue-100 pb-3 font-medium text-sm text-center ",
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
