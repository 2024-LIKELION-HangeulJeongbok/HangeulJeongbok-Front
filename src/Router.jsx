import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopbarLayout from "layouts/TopbarLayout";

import NotFound from "pages/NotFound";
import MainPage from "pages/MainPage";
import CheckScorePage from "pages/CheckScorePage";
import WrongQuestionPage from "pages/WrongQuestionPage";
import SubjugationQuestionPage from "pages/SubjugationQuestionPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/main" element={<MainPage />} />

        <Route path="/*" element={<TopbarLayout />}>
          {/* 점수 확인 */}
          <Route path="check-score" element={<CheckScorePage />} />
          {/* 틀린 문제 */}
          <Route path="wrong-question" element={<WrongQuestionPage />} />
          {/* 문제 정복 */}
          <Route path="subjugation-question" element={<SubjugationQuestionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
