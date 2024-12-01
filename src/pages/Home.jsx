import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "../styles/Home.css"; // 스타일을 별도로 관리

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="logo-wrapper">
        <Logo src={require("../img/logo.png")} alt="한글정복 로고" />
      </div>
      <div className="button-group">
        <Button onClick={() => navigate("/quiz")} text="퀴즈 시작" backgroundColor="#FFFB96" />
        <Button onClick={() => navigate("/check-score")} text="점수 확인" backgroundColor="#FFF84F" />
        <Button onClick={() => navigate("/wrong-question")} text="틀린 문제" backgroundColor="#F6EE2F" />
        <Button onClick={() => navigate("/subjugation-question")} text="문제 정복" backgroundColor="#E0DE9A" />
      </div>
    </div>
  );
}

export default Home;
