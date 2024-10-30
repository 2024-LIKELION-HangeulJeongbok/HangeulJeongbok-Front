// 폰트 수정 필요
function FONT({ weight, size }) {
  return `
            font-family: Pretendard, sans-serif;
            font-size: ${size}rem;
            font-weight: ${weight};
            `;
}

const font = {
  // 10px = 1rem
  // (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

  regular_20: FONT({ weight: 400, size: 2.0 }),
};

export default font;
