const quizData=[
    {
        question:'how old is niiki?',
        a:'10',
        b:'18',
        c:'14',
        d:'17',
        correct:'c'
    },
    {
        question:'Best programming language?',
        a:'ja',
        b:'python',
        c:'java',
        d:'C',
        correct:'b'
    },
    {
        question:'President of india?',
        a:'modi',
        b:'shah',
        c:'rajnath singh',
        d:'sindhya',
        correct:'a'
    },
    {
        question:'President of US?',
        a:'cathy',
        b:'trumph',
        c:'obama',
        d:'pop',
        correct:'b'
    },
    {
        question:'js stands for?',
        a:'java sex',
        b:'joker sex',
        c:'java script',
        d:'JSon',
        correct:'c'
    },
    {
        question:'js launched in?',
        a:'19978',
        b:'1996',
        c:'1995',
        d:'None of the above',
        correct:'b'
    }
];
var eleEl = document.getElementsByName('answer'); 
var quiz = document.querySelector('#quiz'); 

const questionEl=document.getElementById('question');
const a_text =document.getElementById("a_text")
const b_text =document.getElementById("b_text")
const c_text =document.getElementById("c_text")
const d_text =document.getElementById("d_text")
const submitBtn= document.getElementById('submit');


let currentQuiz=0; 
let score=0;
loadQuiz();
function loadQuiz(){
    deSelectAnswer()
    questionEl.innerHTML=quizData[currentQuiz].question;
    a_text.innerHTML=quizData[currentQuiz].a;
    b_text.innerHTML=quizData[currentQuiz].b;
    c_text.innerHTML=quizData[currentQuiz].c;
    d_text.innerHTML=quizData[currentQuiz].d;
    
}
submitBtn.addEventListener('click',()=>{

     answer=  getSelected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
            console.log(score);
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
            
            
        }
        else{
            // Show Score
quiz.innerHTML= `<h2> Your Score is ${score} out of ${quizData.length} </h2>`      
}
    }
})
function getSelected() { 
let answer=undefined;

      eleEl.forEach((answerEl)=>{
          if(answerEl.checked){
              answer= answerEl.id;
              
          }
          
        })
        return answer;
    } 
function deSelectAnswer(){
    eleEl.forEach((answerEl)=>{
        answerEl.checked=false;
    })
}