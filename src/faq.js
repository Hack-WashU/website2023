function showAnswer(index) {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('answerContainer').style.display = 'block';
    document.getElementById('answer').innerText = getAnswer(index);
  }
  
  function hideAnswer() {
    document.getElementById('answerContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
  }
  
  function getAnswer(index) {
    const answers = [
      "Answer to Question 1",
      "Answer to Question 2",
      "Answer to Question 3",
      // Add more answers as needed
    ];
    return answers[index] || "Answer not found";
  }
  