(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
                    // show number of correct answers out of total and display photo

     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    var img = document.createElement("img");
    img.src = "https://thehollywoodminute.typepad.com/.a/6a00e55001693a8833011278fdae1628a4-800wi";
    var src = document.getElementById("results");
    src.appendChild(img);
        answerContainers[questionNumber].style.color = 'lightgreen';



            }
      // if answer is wrong or blank
      else{

                    // show number of correct answers out of total and display photo
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    var img = document.createElement("img");
    img.src = "https://i.ytimg.com/vi/IQKo_uiZQdM/hqdefault.jpg";
    var src = document.getElementById("results");
    src.appendChild(img);

        // color the answers red
        answerContainers[questionNumber].style.color = 'red';



      }
    });


  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Co to jest Tangle Teezer?",
      answers: {
        a: "Marka modnych ubrań",
        b: "Nazwa koloru w odcieniu fioletu",
        c: "Firma produkująca szczotki do włosów"
      },
      correctAnswer: "c"
    },
    {
      question: "2. Zalotka służy do:",
      answers: {
        a: "pokręcania",
        b: "skęcania",
        c: "prostowania"
      },
      correctAnswer: "a"
    },
    {
      question: "3. Utwardzacz nadkłada się na:",
      answers: {
        a: "lakier do paznokci",
        b: "pilniczek",
        c: "pomiędzy warstwy lakieru"
      },
      correctAnswer: "a"
    },
    {
      question: "4. Gdzie nosi sie chocker?",
      answers: {
        a: "na nadgarstku",
        b: "na szyi",
        c: "na nodze"
      },
      correctAnswer: "b"
    },
    {
      question: "5. Kolor seledynowy dobrze wygląda jedynie na:",
      answers: {
        a: "policzkach",
        b: "ustach",
        c: "powiekach"
      },
      correctAnswer: "c"
    },
    {
      question: "6. French można zrobić:",
      answers: {
        a: "w solarium",
        b: "na paznokciach",
        c: "na włosach"
      },
      correctAnswer: "b"
    },

    {
      question: "7. Hybryda to:",
      answers: {
        a: "rodzaj obcasa w szpilkach",
        b: "bufiaste rękawy w marynarce",
        c: "technika malowania paznokci"
      },
      correctAnswer: "c"
    },

    {
      question: "8. Co to są legginsy:",
      answers: {
        a: "materiałowe, obcisłe getry",
        b: "kolorowe bransoletki na kostkę",
        c: "wysokie, najczęściej kolorowe skarpety"
      },
      correctAnswer: "a"
    },


    {
      question: "9. Fiszbiny to jaki element stanika:",
      answers: {
        a: "sylikon wypełniający miseczki",
        b: "drut usztywniający",
        c: "bezbarwne ramiączka"
      },
      correctAnswer: "b"
    },

    {
      question: "10. Gofrownica poza robieniem gofrów służy do:",
      answers: {
        a: "polerowania paznokci",
        b: "karbowania włosów",
        c: "oczyszczania ubrań ze zmechaceń"
      },
      correctAnswer: "c"
    },

    {
      question: "11. Co to jest top?",
      answers: {
        a: "koszulka na ramiączkach",
        b: "zabudowany stnaik",
        c: "okrycie wierzchnie"
      },
      correctAnswer: "b"
    },

    {
      question: "12. Co to jest tunika?",
      answers: {
        a: "długa, luźna bluzka",
        b: "rodzaj peleryny przeciwdeszczowej",
        c: "szeroka, podłużna bransoletka"
      },
      correctAnswer: "a"
    },

    {
      question: "13. Gdzie nosi sie celebrytke?",
      answers: {
        a: "w torebce",
        b: "na nodze",
        c: "na szyi"
      },
      correctAnswer: "a"
    },

    {
      question: "14. Mascara to:",
      answers: {
        a: "podkład do twarzy",
        b: "tusz do rzęs",
        c: "cień do powiek"
      },
      correctAnswer: "a"
    },

    {
      question: "15. Co to jest baskinka:",
      answers: {
        a: "rozkloszowany dół bluzki",
        b: "popularna fryzura w Hiszpanii",
        c: "spódnica z plisami"
      },
      correctAnswer: "c"
    },
  ];


  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


