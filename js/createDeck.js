const flashcards = document.querySelector(".flashcards");
const box_container = document.querySelector(".container");
const buttons = document.querySelector("#check");
let data= [];

function viewCard() {
  
    let study_card = {
      question: question.value,
      answer: answer.value,
    };
    data.push(study_card);
    createCard(data[data.length - 1]);
  }

function createCard(notecard) {
    flashcards.style.display="flex";
    buttons.style.display="flex";
    box_container.style.display = "none";

     container = document.createElement("div");
     question_ = document.createElement("h3");
     answer_ = document.createElement("h3");
     
  
    
    question_.innerHTML = notecard.question;
    answer_.style.display='none'
    answer_.innerHTML = notecard.answer;
    answer_.style.border='5px solid green';

   
    container.appendChild(question_);
    container.appendChild(answer_);
    
    
    flashcards.appendChild(container);

    buttons.addEventListener("click", () => {

      if(answer_.style.display === "none"){
        answer_.style.display = "block"
        }else{
            answer_.style.display = "none";
        }
       
         
        
    });

   
  
}