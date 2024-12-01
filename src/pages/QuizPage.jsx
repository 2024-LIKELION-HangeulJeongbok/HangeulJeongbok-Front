import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuizPage.css"; // 스타일 파일 연결

function QuizPage() {
  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(1); // 현재 퀴즈 번호
  const [progress, setProgress] = useState([]); // O/X 결과 저장
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답안
  const [question, setQuestion] = useState("‘폐쇄’ 또는 ‘마찰’의 단계를 거쳐 발음되는 소리가 없는 것은?"); // 문제 텍스트
  const [options, setOptions] = useState(["오류", "회의"]); // 선지 데이터
  const [showResultModal, setShowResultModal] = useState(false); // 정답/오답 모달
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // 정답 여부
  const [showExitModal, setShowExitModal] = useState(false); // 종료 확인 모달

  // 제출하기 버튼 클릭 시 호출
  const handleSubmit = () => {
    const isCorrect = selectedAnswer === "오류"; // 정답 확인
    const result = isCorrect ? "O" : "X";

    // progress 상태 업데이트
    setProgress((prevProgress) => {
      const updatedProgress = [...prevProgress, result];
      // 10번째 문제일 경우 navigate 호출
      if (currentQuiz === 10) {
        setTimeout(() => {
          navigate("/score", { state: { results: updatedProgress } });
        }, 1100);
      }
      return updatedProgress; // 업데이트된 progress 반환
    });

    setIsAnswerCorrect(isCorrect); // 정답 여부 설정
    setShowResultModal(true); // 결과 모달 표시

    // 모달 닫기 및 다음 문제로 이동 (10번째 문제는 제외)
    if (currentQuiz < 10) {
      setTimeout(() => {
        handleNextQuestion();
      }, 1100);
    }
  };

  // 다음 문제로 넘어가기
  const handleNextQuestion = () => {
    setShowResultModal(false); // 모달 닫기
    if (currentQuiz < 10) {
      setCurrentQuiz(currentQuiz + 1); // 다음 퀴즈로 이동
      setSelectedAnswer(null); // 선택 초기화
    } else {
      // 마지막 문제를 푼 경우, progress를 최신 상태로 반영한 뒤 navigate 호출
      setTimeout(() => {
        navigate("/score", { state: { results: [...progress] } });
      }, 0); // 상태 업데이트 후 실행 보장
    }
  };

  // 종료 확인 모달 닫기
  const handleExitQuiz = () => {
    setShowExitModal(false);
    navigate("/home"); // 홈으로 이동
  };

  return (
    <div className="quiz-page-container">
      {/* 상단 로고 및 뒤로 가기 버튼 */}
      <div className="header">
        <button className="back-button" onClick={() => setShowExitModal(true)}>
          <img src={require("../img/back_icon.png")} alt="뒤로가기" className="back-icon" />
        </button>
        <div className="logo_quiz_div">
          <img src={require("../img/logo.png")} alt="한글정복 로고" className="quiz_logo" />
        </div>
      </div>

      {/* 진행 현황 */}
      <div className="progress-header">
        <span>진행 현황 {currentQuiz}/10</span>
      </div>

      {/* 진행 바 */}
      <div className="progress-bar">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`progress-box ${progress[index] === "O" ? "correct" : progress[index] === "X" ? "wrong" : ""}`}
            >
              {progress[index] === "O" && <img src={require("../img/p_o.png")} alt="정답" className="progress-icon" />}
              {progress[index] === "X" && <img src={require("../img/p_x.png")} alt="오답 " className="progress-icon" />}
            </div>
          ))}
      </div>

      {/* 문제 */}
      <div className="question">{question}</div>

      {/* 선지 */}
      <div className="options">
        {options.map((option, index) => (
          <React.Fragment key={index}>
            <div
              className={`option ${option.length > 15 ? "dynamic" : ""} ${index === 0 ? "yellow" : "orange"} ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              <span className="option-text">{option}</span>
            </div>
            {index === 0 && <div className="vs">vs</div>} {/* 첫 번째 옵션 뒤에 "vs" 추가 */}
          </React.Fragment>
        ))}
      </div>

      {/* 제출하기 버튼 */}
      <button className="submit-button" onClick={handleSubmit} disabled={!selectedAnswer}>
        제출하기
      </button>

      {/* 정답/오답 모달 */}
      {showResultModal && (
        <div className="modal">
          <div className="modal-content">
            <img
              src={require(isAnswerCorrect ? "../img/modal_o.png" : "../img/modal_x.png")}
              alt={isAnswerCorrect ? "정답" : "오답"}
              className="result-icon"
            />
          </div>
        </div>
      )}

      {/* 종료 확인 모달 */}
      {showExitModal && (
        <div className="modal_end">
          <div className="modal_content_end">
            {/* 닫기 버튼 (오른쪽 상단 X 이미지) */}
            <button className="modal-close" onClick={() => setShowExitModal(false)}>
              <img src={require("../img/modal_end.png")} alt="닫기" />
            </button>
            <p>퀴즈를 끝내시겠습니까?</p>
            <div className="modal-buttons">
              <button className="end_button" onClick={handleExitQuiz}>
                끝내기
              </button>
              <button className="return_button" onClick={() => setShowExitModal(false)}>
                퀴즈로 돌아가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
