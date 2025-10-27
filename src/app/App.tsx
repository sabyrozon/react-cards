import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../widgets/MainLayout";
import HomePage from "../pages/HomePage";
import MainPage from "../pages/MainPage";
import AddQuestionPage from "../pages/AddQuestionPage";
import ForbiddenPage from "../pages/ForbiddenPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/forbidden" element={<ForbiddenPage />} />
          <Route path="/add-question" element={<AddQuestionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
