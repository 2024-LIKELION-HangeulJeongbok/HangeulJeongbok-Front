import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/QuizPage.css";

function QuizPage() {
  const [authToken, setAuthToken] = useState(null);

  const navigate = useNavigate();
  const [currentQuiz, setCurrentQuiz] = useState(null); // 현재 퀴즈 데이터
  const [progress, setProgress] = useState([]); // O/X 결과 저장
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 선택된 답안
  const [showResultModal, setShowResultModal] = useState(false); // 정답/오답 모달
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // 정답 여부
  const [showExitModal, setShowExitModal] = useState(false); // 종료 확인 모달

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
  }, []);

  // 초기 퀴즈 데이터를 GET 요청으로 가져오기
  const fetchQuizData = async () => {
    try {
      const url = `https://www.yuyujr.store/quiz/quizes/`;
      // console.log("Requesting quiz data from:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`, // 인증 토큰
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch quiz data: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched quiz data:", data); // 반환된 데이터 확인

      setCurrentQuiz(data); // 현재 퀴즈 데이터 설정
      setSelectedAnswer(null); // 선택 초기화
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  // POST 요청으로 사용자의 선택을 서버로 전송하고 다음 퀴즈 데이터를 가져오기
  const submitAnswer = async () => {
    try {
      const url = `https://www.yuyujr.store/quiz/quizes/`;
      console.log("Submitting answer to:", url);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${authToken}`, // 인증 토큰
        },
        body: JSON.stringify({
          quiz_id: currentQuiz.id,
          selected_option: selectedAnswer + 1, // 서버는 1-based index 사용
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit answer: ${response.status}`);
      }

      const data = await response.json();
      console.log("Submitted answer response:", data);

      // 결과와 다음 퀴즈 데이터 처리
      setProgress((prevProgress) => [...prevProgress, data.result]);
      setIsAnswerCorrect(data.result === "O");
      setShowResultModal(true);

      if (data.next_quiz) {
        setTimeout(() => {
          setCurrentQuiz(data.next_quiz); // 다음 퀴즈로 이동
          setShowResultModal(false); // 결과 모달 닫기
          setSelectedAnswer(null); // 선택 초기화
        }, 1000);
      } else {
        setTimeout(() => {
          navigate("/score", { state: { results: [...progress, data.result] } }); // 결과 페이지로 이동
        }, 1000);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchQuizData(); // 컴포넌트가 로드될 때 초기 퀴즈 데이터 요청
    }
  }, [authToken]);

  if (!currentQuiz) {
    return <div>Loading...</div>; // 데이터 로드 중
  }

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
        <span>진행 현황 {progress.length >= 10 ? 10 : progress.length + 1}/10</span>
      </div>

      {/* 진행 바 */}
      <div className="progress-bar">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`progress-box ${
                progress[index] === "O" ? "correct" : progress[index] === "X" ? "wrong" : ""
              }`}
            >
              {progress[index] === "O" && (
                <img src={require("../img/p_o.png")} alt="정답" className="progress-icon" />
              )}
              {progress[index] === "X" && (
                <img src={require("../img/p_x.png")} alt="오답" className="progress-icon" />
              )}
            </div>
          ))}
      </div>

      {/* 문제 */}
      <div className="question">{currentQuiz.question}</div>

      {/* 선지 */}
      <div className="options">
        {currentQuiz.options.map((option, index) => {
          const cleanedOption = option.replace(/^\d+\.\s*\d+\.\s*/, "");

          return (
            <React.Fragment key={index}>
              <div
                className={`option ${index === 0 ? "yellow" : "orange"} ${
                  selectedAnswer === index ? "selected" : ""
                }`}
                onClick={() => setSelectedAnswer(index)}
              >
                <span className="option-text">{cleanedOption}</span>
              </div>
              {index === 0 && <div className="vs">vs</div>}
            </React.Fragment>
          );
        })}
      </div>

      {/* 제출하기 버튼 */}
      <button className="submit-button" onClick={submitAnswer} disabled={selectedAnswer === null}>
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
            <button className="modal-close" onClick={() => setShowExitModal(false)}>
              <img src={require("../img/modal_end.png")} alt="닫기" />
            </button>
            <p>퀴즈를 끝내시겠습니까?</p>
            <div className="modal-buttons">
              <button className="end_button" onClick={() => navigate("/home")}>
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
