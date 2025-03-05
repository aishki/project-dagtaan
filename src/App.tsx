import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import DonorsPage from "./pages/DonorsPage";
import DonationDrivePage from "./pages/DonationDrivePage";
import ExpensesPage from "./pages/ExpensesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="donors" element={<DonorsPage />} />
        <Route path="donation-drive" element={<DonationDrivePage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
