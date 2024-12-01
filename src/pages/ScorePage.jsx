import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ScorePage.css";

function ScorePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [results, setResults] = useState([]); // 점수 데이터 상태
  const [showContinueModal, setShowContinueModal] = useState(false); // 계속하기 모달 상태

  // 데이터 초기화
  useEffect(() => {
    // 우선 navigate로 전달된 데이터를 확인
    const navigateResults = location.state?.results;

    if (navigateResults) {
      setResults(navigateResults); // 전달받은 데이터를 사용
    } else {
      // navigate로 데이터가 없으면 로컬 스토리지에서 가져오기
      const storedResults = JSON.parse(localStorage.getItem("results"));
      if (storedResults) {
        setResults(storedResults); // 로컬 스토리지 데이터 설정
      } else {
        // 데이터가 없으면 메인 페이지로 리다이렉트
        navigate("/home");
      }
    }
  }, [location, navigate]);

  // 총점 계산
  const totalScore = results.filter((result) => result === "O").length * 10;

  return (
    <div className="score-page-container">
      {/* 로고 */}
      <div className="logo-wrapper">
        <img src={require("../img/logo.png")} alt="한글정복 로고" className="score-logo" />
      </div>

      {/* 점수 */}
      <div className="score-display">
        <span className="score">{totalScore}</span>
        <span className="full-score">/100</span>
      </div>

      {/* 점선 */}
      <hr className="divider" />

      {/* 점수 현황 */}
      <div className="score-status-title">점수 현황</div>
      <div className="score-box-container">
        {/* 1번 ~ 5번 */}
        <div className="score-column">
          {results.slice(0, 5).map((result, index) => (
            <div className="score-box" key={index}>
              <span>{index + 1}.</span>
              <img
                src={require(`../img/${result === "O" ? "right_answer.png" : "worng_answer.png"}`)}
                alt={result === "O" ? "정답" : "오답"}
                className="result-icon-score"
              />
            </div>
          ))}
        </div>
        {/* 6번 ~ 10번 */}
        <div className="score-column">
          {results.slice(5, 10).map((result, index) => (
            <div className="score-box" key={index}>
              <span>{index + 6}.</span>
              <img
                src={require(`../img/${result === "O" ? "right_answer.png" : "worng_answer.png"}`)}
                alt={result === "O" ? "정답" : "오답"}
                className="result-icon-score"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 틀린 문제 보러가기 */}
      <div className="wrong-answers-link" onClick={() => navigate("/wrong-question")}>
        틀린 문제 보러 가기
      </div>

      {/* 버튼 */}
      <div className="button-container">
        <button className="continue-button" onClick={() => setShowContinueModal(true)}>
          계속하기
        </button>
        <button className="return-button" onClick={() => navigate("/home")}>
          돌아가기
        </button>
      </div>

      {/* 계속하기 모달 */}
      {showContinueModal && (
        <div className="modal-continue">
          <div className="modal-continue-content">
            <button className="modal-close" onClick={() => setShowContinueModal(false)}>
              <img src={require("../img/modal_end.png")} alt="닫기" />
            </button>
            <p>퀴즈를 계속하시겠습니까?</p>
            <div className="modal-buttons">
              <button
                className="continue-quiz-button"
                onClick={() => {
                  setShowContinueModal(false);
                  navigate("/quiz");
                }}
              >
                계속하기
              </button>
              <button className="cancel-button" onClick={() => setShowContinueModal(false)}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScorePage;
