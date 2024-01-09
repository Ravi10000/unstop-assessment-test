import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardWrapper from "#/components/dashboard-wrapper";
import MyAssessmentsPage from "#/pages/my-assessments.page";
// import UnstopAssessmentsPage from "./pages/unstop-assessments.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/assessment" />} />
        <Route path="/dashboard" element={<DashboardWrapper />}>
          <Route path="assessment" element={<MyAssessmentsPage />} />
          <Route path="my-library" element={<h1>My Library</h1>} />
          <Route path="round-status" element={<h1>Round Status</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
