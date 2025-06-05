
  const createFlashCardBtn = document.querySelector('.create-btn');
  const cards = document.querySelector('.container');


  createFlashCardBtn.addEventListener("click", ()=> {
    createFlashCard();


  });


  function createFlashCard(){
    const answerContainer = document.createElement('div');
    const answerElement= document.createElement('h5');
    const textareaAnswer= document.createElement('textarea');
    const questionContainers = document.createElement('div');
    const questions= document.createElement('div');
    const element= document.createElement('h5');
    const textAreaQ = document.createElement('textarea');


    element.innerHTML='Question:';

    textAreaQ.setAttribute('cols', '20');
    textAreaQ.setAttribute('rows', '4');
    
    textareaAnswer.setAttribute('cols', '20');
    textareaAnswer.setAttribute('rows', '4');
    questionContainers.classList.add('outer-container');
    questions.classList.add('question-container');
    answerElement.innerHTML='Answer:';

    answerContainer.appendChild(answerElement);
    answerContainer.appendChild(textareaAnswer);
    
    questions.appendChild(element);
    questions.appendChild(textAreaQ);
    questionContainers.appendChild(questions);
    questionContainers.appendChild(answerContainer);
    cards.appendChild(questionContainers);

    
  }
  