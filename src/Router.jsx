import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopbarLayout from "layouts/TopbarLayout";

import NotFound from "pages/NotFound";
import CheckScorePage from "pages/CheckScorePage";
import WrongQuestionPage from "pages/WrongQuestionPage";
import SubjugationQuestionPage from "pages/SubjugationQuestionPage";

// 메인, 퀴즈, 결과 페이지
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import ScorePage from "./pages/ScorePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route element={<TopbarLayout />}>
          {/* 점수 확인 */}
          <Route path="/check-score" element={<CheckScorePage />} />
          {/* 틀린 문제 */}
          <Route path="/wrong-question" element={<WrongQuestionPage />} />
          {/* 문제 정복 */}
          <Route path="/subjugation-question" element={<SubjugationQuestionPage />} />
        </Route>

        {/* 추가한 경로 */}
        {/* 메인 페이지 */}
        <Route path="/home" element={<Home />} />
        {/* 퀴즈 페이지 */}
        <Route path="/quiz" element={<QuizPage />} />
        {/* 점수 페이지 */}
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
}
