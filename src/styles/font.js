function FontDH({ weight, size }) {
  return `
                  font-family: "Do Hyeon", sans-serif;
                  font-size: ${size}rem;
                  font-weight: ${weight};

                  font-style: normal;
                  `;
}
function FontInt({ weight, size }) {
  return `
                  font-family: "Inter", sans-serif;
                  font-size: ${size}rem;
                  font-weight: ${weight};

                  font-optical-sizing: auto;
                  font-style: normal;
                  `;
}
function FontNG({ weight, size }) {
  return `
                  font-family: "Nanum Gothic Coding", monospace;
                  font-size: ${size}rem;
                  font-weight: ${weight};

                  font-style: normal;
                  `;
}
function FontSN({ weight, size }) {
  return `
                  font-family: "Seoul Namsan";
                  font-size: ${size}rem;
                  font-weight: ${weight};

                  font-style: normal;
                  font-display: swap;

                  src: url("https://cdn.jsdelivr.net/gh/fonts-archive/SeoulNamsan/SeoulNamsan-Medium.woff2")
                      format("woff2"), url("https://cdn.jsdelivr.net/gh/fonts-archive/SeoulNamsan/SeoulNamsan-Medium.woff")
                      format("woff"),
                    url("https://cdn.jsdelivr.net/gh/fonts-archive/SeoulNamsan/SeoulNamsan-Medium.ttf")
                      format("truetype");
                  `;
}

const font = {
  // 10px = 1rem
  // (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

  // Nanum Gothic Coding
  ng_regular_20: FontNG({ weight: 400, size: 2.0 }),
  ng_bold_12: FontNG({ weight: 700, size: 1.2 }),

  // Inter
  int_regular_20: FontInt({ weight: 400, size: 2.0 }),

  // Do Hyeon
  do_regular_24: FontDH({ weight: 400, size: 2.4 }),

  // SeoulNamsan CM
  sn_regular_17: FontSN({ weight: 400, size: 1.7 }),
};

export default font;
