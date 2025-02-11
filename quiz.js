const questionelement=document.getElementById('questions');
        const optionelement=document.getElementById('question_options');
        const correctAnswerElement=document.getElementById('correct_score');
        const totalAnswerElement=document.getElementById('total_score');
        const checkbtnElement=document.getElementById('check-btn');
        const resultElement=document.getElementById('result')
        const playagainElement=document.getElementById('playagain-btn')
        

        console.log(playagainElement)
 
        let correctAnswer="",correctScore = askedCount = 0 ,totalQuestion=10;
        
       
        async function fetchQuestions(){
            
        
            try{
                const response=await fetch("https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple");
                const data = await response.json();
                resultElement.innerHTML = "";
                const question=data.results;
                showQuestion(question[0])
				//console.log(data.results[0] )
                
                
            }
            catch(error){
                console.log("error fetching question", error); 

            }
        }
      //event listener
      function eventListener(){
         checkbtnElement.addEventListener('click',checkAnswer);
         playagainElement.addEventListener("click",restartQuiz);
        }
        

        document.addEventListener('DOMContentLoaded',()=>{
            totalAnswerElement.textContent=totalQuestion;
            correctAnswerElement.textContent=correctScore;
            fetchQuestions(); 
            eventListener()
        })
        
        function showQuestion(data){
            checkbtnElement.disabled = false;
         correctAnswer=data.correct_answer;
        let incorrectAnswer=data.incorrect_answers;
        let optionList=incorrectAnswer;
        optionList.splice(Math.floor(Math.random()+(incorrectAnswer.length+1)),0,correctAnswer);
        //console.log(incorrectAnswer)
      
        questionelement.innerHTML=`${data.question}`
        optionelement.innerHTML=`${optionList.map((options,index)=> `
        <li class="card-body choices-btn border " >${index+1 }.<span class="px-4">${options}</span></li>`).join('')}`

        selectOption()
        console.log(correctAnswer)

        }
         //option selection 
         function selectOption(){
            optionelement.querySelectorAll('li').forEach((option)=>{
                option.addEventListener('click',()=>{
                    if(optionelement.querySelector('.selected')){
                        const activeOption=optionelement.querySelector('.selected');
                        activeOption.classList.remove('selected');
                    
                    }
                    option.classList.add('selected')
                })
            })
         }

        
    function checkAnswer() {
        checkbtnElement.disabled = true;
        if (optionelement.querySelector('.selected')) {
            let selectedAnswer = optionelement.querySelector('.selected span').textContent;
            console.log(selectedAnswer)
            if (selectedAnswer == HTMLDecode(correctAnswer)) {
                correctScore++;
                resultElement.innerHTML = `<p class="text-success"><b>Correct Answer!!....</b></p>`;
            } else {
                resultElement.innerHTML = `<p class="text-danger">Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
            }
            checkCount()
        }
        else {
        resultElement.innerHTML = `<p class="text-danger h2">Please select an option!</p>`;
        checkbtnElement.disabled = false;
    }
    }

    // to convert html entities into normal text of correct answer if there is any
    function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}
    
function checkCount(){
    askedCount++;
    setCount();
    if(askedCount == totalQuestion){
        setTimeout(function(){
            console.log("");
        }, 5000);


        resultElement.innerHTML += `<p class="h2">Your score is ${correctScore}.</p>`;
        playagainElement.style.display = "block";
        checkbtnElement.style.display = "none";
    } else {
        setTimeout(function(){
            fetchQuestions();
        }, 300);
    }
}


function setCount(){
    totalAnswerElement.textContent = totalQuestion;
    correctAnswerElement.textContent = correctScore;
}

function restartQuiz(){
    correctScore = askedCount = 0;
    playagainElement.style.display = "none";
    checkbtnElement.style.display = "block";
    checkbtnElement.disabled = false;
    setCount();
    fetchQuestions();
}

