const robotSequence = [
  "\u00A0└[●ω●]┘\u00A0\u00A0\u00A0",
  "\u00A0└[●ω●]┐\u00A0\u00A0\u00A0",
  "\u00A0\u00A0└[●ω●]┐\u00A0\u00A0",
  "\u00A0\u00A0\u00A0└[●ω●]┐\u00A0",
  "\u00A0\u00A0\u00A0┌[●ω●]┐\u00A0",
  "\u00A0\u00A0\u00A0┌[●ω●]┐\u00A0",
  "\u00A0\u00A0┌[●ω●]┐\u00A0\u00A0",
  "\u00A0┌[●ω●]┐\u00A0\u00A0\u00A0",
  "\u00A0┌[●ω●]┘\u00A0\u00A0\u00A0",
  "\u00A0┌[●ω●]┘\u00A0\u00A0\u00A0",
  "\u00A0┌[●ω●]┘\u00A0\u00A0\u00A0",
  "\u00A0└[●ω●]┘\u00A0\u00A0\u00A0",
  "\u00A0└[●ω●]┘\u00A0\u00A0\u00A0",
];

const faces = [
  "***", "***",
  "(^_^)", "(>_<)",
  "(O_o)", "(o_O)",
  "(◑_◑)", "(◐_◐)",
  robotSequence[0],
  robotSequence[4],
];

const faceSequences = [
  ["(O_o)", "(o_O)"],
  ["(>_<)", "(^_^)"],
  ["(◑_◑)", "(◐_◐)"],
  robotSequence,
];

const fastFaces = [
  ...robotSequence,
];

const randomDelay = (ms) => Math.floor(Math.random() * ms) + ms;

document.querySelectorAll("hr").forEach(element => {
  const initFace = faces[Math.floor(Math.random() * faces.length)];
  element.style.setProperty("--face", `"${initFace}"`);

  const faceSequence = faceSequences.find(s => s.includes(initFace));
  if (!faceSequence) return;
  
  let currentIndex = faceSequence.indexOf(initFace);

  const step = () => {
    currentIndex = (currentIndex + 1) % faceSequence.length;
    const nextFace = faceSequence[currentIndex];
    element.style.setProperty("--face", `"${nextFace}"`);

    let ms = 4000;
    if (fastFaces.includes(nextFace)) {
      ms = 100;
    }

    setTimeout(step, randomDelay(ms));
  };

    setTimeout(step, randomDelay(500));
});
