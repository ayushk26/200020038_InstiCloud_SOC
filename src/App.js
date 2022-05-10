import './App.css';
import './question/question'
import Question from './question/question';


class QuestionClass{

  constructor(questionStatement,options,correctOption){
    this.questionStatement = questionStatement;
    this.optionA = options.A;
    this.optionB = options.B;
    this.optionC = options.C;
    this.optionD = options.D;
    this.correctOption = correctOption;
  
  }
}

var questions = [
  {
    questionStatement : "Random Question1",
    options:{
      A:"Option A",
      B:"Option B",
      C:"Option C",
      D:"Option D",
    },
    correctOption: "A",
  },
  {
    questionStatement : "Random Question2",
    options:{
      A:"Option A",
      B:"Option B",
      C:"Option C",
      D:"Option D",
    },
    correctOption: "B",
  }
]



for(var i=0;i<questions.length;i++){
  var question1 = new QuestionClass(questions[i].questionStatement,questions[i].options,questions[i].correctOption);
  questions[i] = question1;
}
console.log(questions)


function App() {
  return (
    <>
    <h1>Go Quizz</h1>
    {questions.map((q,i)=>{
      return <Question question={q} key ={i}/>
    })}
    </>
  );
}

export default App;
