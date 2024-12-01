import React from "react";
import "../styles/Logo.css"; // 로고 스타일 관리

function Logo({ src, alt }) {
  return <img className="logo" src={src} alt={alt} />;
}

export default Logo;
