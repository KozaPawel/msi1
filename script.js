// QUESTIONS

const questions = [
  {
    "question": "Nie lubisz załatwiać spraw osobistych przy innych ludziach?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Nie potrzebujesz pracy w zespole, ponieważ w pojedynkę dobrze sobie radzisz?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Łatwiej napisać ci e-maila opisującego twoje odczucia niż wyrazić je prosto w oczy drugiej osobie?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Nie lubisz spontanicznych spotkań/wyjazdów?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Samotny wieczór w domu to dla ciebie dobry moment na przemyślenia i odpoczynek od ludzi?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Przytłaczają cię zbyt rozmowne osoby?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "W piątkowy wieczór wybrałbyś kawiarnię lub małe bistro zamiast głośnego klubu?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Sam nie wychodzisz z inicjatywą zapoznania się z kimś nowym, nawet jeśli dany człowiek cię zainteresował?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Większość podjętych przez ciebie decyzji życiowych jest solidnie przemyślana?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Czasami martwisz się bez wyraźnego powodu?",
    "answer1": "Tak",
    "answer1Total": "1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "-1"
  },
  {
    "question": "Wolisz spędzać czas wolny w towarzystwie przyjaciół niż sam/sama w domu",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Podoba ci się bycie w centrum uwagi?",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Często sam/sama nawiązujesz kontakt z obcymi ci ludźmi",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Uważasz, że ludziom można ufać?",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Rywalizacja cię nie paraliżuje, ale działa mobilizująco",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Porażki życiowe nie wywołują u ciebie smutku, a raczej motywują do dalszego działania",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Masz wielu znajomych, z którymi regularnie utrzymujesz kontakt na portalach społecznościowych",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Nie jesteś skrępowany, gdy poznajesz nowych ludzi i rozmawiasz z nimi po pierwszy raz",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Czy konsultujesz się z innymi, gdy musisz rozwiązać jakiś życiowy problem?",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  },
  {
    "question": "Wolisz zabawną atmosferę niż powagę i opanowanie na spotkaniach towarzyskich",
    "answer1": "Tak",
    "answer1Total": "-1",
    "answer2": "Nie mam zdania",
    "answer2Total": "0",
    "answer3": "Nie",
    "answer3Total": "1"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');
const resultContainer = document.querySelector('.result-container');

function generateQuestions(index) {
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  questionEl.innerHTML = `${index + 1}. ${question.question}`
  option1.setAttribute('data-total', `${option1Total}`);
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option1.innerHTML = `${question.answer1}`
  option2.innerHTML = `${question.answer2}`
  option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  if (!selectedOption) {
    alert('Wybierz odpowiedź!');
    return;
  }
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  score.push(answerScore);

  selectedAnswersData.push()

  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  currentQuestion++;
  selectedOption.checked = false;

  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Zakończ';
  }
  if (currentQuestion == totalQuestions) {
    // container.style.display = 'none';
    container.classList.add("d-none");
    resultContainer.classList.remove("d-none");
    let wynik = "";
    if (totalScore < -10) {
      wynik = "ekstrawertykiem";
    }
    else if (totalScore >= -10 && totalScore <= 10) {
      wynik = "ambiwertykiem";
    }
    else {
      wynik = "introwertykiem";
    }
    result.innerHTML =
      `<h1>Jesteś ${wynik}</h1>
        <button class="restart btn btn-dark">Wykonaj test jeszcze raz</button>
         `;
    return;
  }
  generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
  if (currentQuestion != 0) {
    currentQuestion--;
    score.pop();
    if (currentQuestion != totalQuestions - 1) {

      nextButton.textContent = 'Następne';
    }
    generateQuestions(currentQuestion);
    console.log(currentQuestion);
  }
}

function restartQuiz(e) {
  if (e.target.matches('button')) {
    currentQuestion = 0;
    score = [];
    location.reload();
  }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);
