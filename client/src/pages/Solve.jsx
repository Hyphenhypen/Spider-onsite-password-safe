import React, { useEffect, useState } from 'react'
import QuizResult from './SolveResult';
import axios from 'axios';
import './Solve.css';

function Solve() {

    const [question, setQuestion] = useState([]);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    let option = '';
    useEffect(()=>{
        axios.get('/questions')
        .then((response) => {
            setQuestion(response.data) 
        })
        .catch((err) => console.log(err));
    }, [])

    const changeQuestion = async ()=>{
        updateScore();
        if(currentQuestion < 3){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }
        else{
            setShowResult(true)
            setCurrentQuestion(0);
        }
    }

    const updateScore=()=>{
        if(clickedOption === question[0].correctAnswer){
            setScore(score+1);
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    console.log(question)
    console.log(currentQuestion)

    const optionResult = () =>{
        option = document.getElementById('question-text').value;
        console.log(option)
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="solve">
        <div className="Solve-container">
            {showResult ? (
                <QuizResult score={score} totalScore={question.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{question[0].questionName}</span>
            </div>
            <div className="option-container">
                <button id="question-txt" className="options" onClick={optionResult}>{question[0].option1}</button>
                <button id="question-txt" className="options">{question[0].option2}</button>
                <button id="question-txt" className="options">{question[0].option3}</button>
                <button id="question-txt" className="options">{question[0].option4}</button>
            </div>
            <input type="button" value="Next" id="solve-next-button" onClick={changeQuestion} />
            </>)}
        </div>
        </div>
    </div>
  )
}

export default Solve