import TabSwitcher from "#/components/tab-switcher";
import { useSearchParams } from "react-router-dom";

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

function AssessmentPage() {
  const [searchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab") || tabs[0].value;
  return (
    <div className="flex flex-col gap-10">
      <TabSwitcher {...{ tabs, selectedTab }} />
    </div>
  );
}

export default AssessmentPage;
