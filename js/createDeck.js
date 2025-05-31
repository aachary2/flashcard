
  const createFlashCardBtn = document.querySelector('.create-btn');
  const cards = document.querySelector('.container');


  createFlashCardBtn.addEventListener("click", ()=> {
    createFlashCard();


  });


  function createFlashCard(){
    const questionContainers = document.createElement('div');
    const questions= document.createElement('div');
    const element= document.createElement('h5');
    const textAreaQ = document.createElement('textarea');


    const answerContainer = document.createElement('div');
    const answerElement= document.createElement('h5');
    const textareaAnswer= document.createElement('textarea');
    questionContainers.classList.add('outer-container');

    questions.classList.add('question-container');
    element.innerHTML='Question:';

    textAreaQ.setAttribute('cols', '25');
    textAreaQ.setAttribute('rows', '5');
    
    textareaAnswer.setAttribute('cols', '25');
    textareaAnswer.setAttribute('rows', '5');

    answerContainer.classList.add('answer-container');
    answerElement.innerHTML='Answer:';

   
    
    questions.appendChild(element);
    questions.appendChild(textAreaQ);
    questionContainers.appendChild(questions);

    answerContainer.appendChild(answerElement);
    answerContainer.appendChild(textareaAnswer);
    questionContainers.appendChild(answerContainer);
    cards.appendChild(questionContainers);

    
  }
  