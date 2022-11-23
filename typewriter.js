
const sentence = "hello there from lighthouse labs";
const animate = () => {
  aniSentence = sentence + '\n';
  let timeDelay = 50;
  for (const char of aniSentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeDelay);
    timeDelay += 50;
  };
};
animate(sentence)

