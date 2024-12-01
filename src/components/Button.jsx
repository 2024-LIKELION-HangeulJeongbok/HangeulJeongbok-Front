import React from "react";
import "../styles/Button.css"; // 버튼 스타일 관리

function Button({ onClick, text, backgroundColor }) {
  const style = {
    backgroundColor, // 전달받은 배경색을 스타일에 적용
  };

  return (
    <button className="custom-button" style={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
