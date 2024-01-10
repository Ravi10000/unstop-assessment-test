import { Link, useSearchParams } from "react-router-dom";

function AssessmentPage() {
  const [searchParams] = useSearchParams();
  const selectedTab = searchParams.get("tab") || "my-assessment";
  console.log({ selectedTab });
  return (
    <div className="flex ">
      <Link to="?tab=my-assessment">My Assessment</Link>
      <Link to="?tab=unstop-assessment">Unstop Assessment</Link>
    </div>
  );
}

export default AssessmentPage;
