(function () {
  const questions = [
    { q: "What is the Capital Of India", a: "new delhi" },
    { q: "Which planet is known as the red planet", a: "mars" },
    { q: "What is 5 + 7", a: "12" },
    { q: "Who is the president of Russia", a: "Vladimir putin" },
    { q: "Which language is used for web development", a: "javascript" },
     
  ];

  let score = 0;

  function normalize(input) {
    if (input === null) return "";
    return String(input).toLowerCase().trim();
  }

  function askQuestion(item, index, total) {
    const raw = prompt(`Question ${index + 1} of ${total}:\n${item.q}`);
    const answer = normalize(raw);
    const correct = answer === normalize(item.a);

    if (correct) {
      score++;
      alert("Correct! ✅");
      console.log(`Q${index + 1}: Correct (your answer: "${raw}")`);
    } else {
      alert(`Incorrect . The correct answer is: ${item.a}`);
      console.log(`Q${index + 1}: Incorrect (your answer: "${raw}", correct: "${item.a}")`);
    }

    return correct;
  }

  for (let i = 0; i < questions.length; i++) {
    askQuestion(questions[i], i, questions.length);
  }

  alert(`Quiz finished! Your score: ${score} / ${questions.length}`);
  console.log(`Final score: ${score} / ${questions.length}`);
})();