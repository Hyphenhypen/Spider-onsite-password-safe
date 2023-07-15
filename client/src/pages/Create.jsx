import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import './Create.css'
export default function Create() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        questionName: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: '',
        questionUserName: '',
    })

    const createQuizz = async (e) =>{
        e.preventDefault();
        const {questionName, option1, option2, option3, option4, correctAnswer, questionUserName} = data
        try{
            const {data} = await axios.post('/create', {
                questionName, option1, option2, option3, option4, correctAnswer, questionUserName
            })
            if(data.error){
                toast.error(data.error);
            }
            else{
                setData({})
                toast.success('Question Submitted Successfully')
                navigate('/create')
            }
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className="create">
        <div className="create-container">
        <form onSubmit={createQuizz}>
            <label>Question: </label>
            <input type="text" placeholder='Enter your question'
            value = {data.questionName}
            onChange={(e)=> setData({...data, questionName : e.target.value})}/>
            <br/>
            <label>Option1: </label>
            <input type="text" placeholder='Enter your first option'
            value = {data.option1}
            onChange={(e)=> setData({...data, option1 : e.target.value})}/>
            <br/>
            <label>Option2: </label>
            <input type="text" placeholder='Enter your second option'
            value = {data.option2}
            onChange={(e)=> setData({...data, option2 : e.target.value})}/>
            <br/>
            <label>Option3: </label>
            <input type="text" placeholder='Enter your third option'
            value = {data.option3}
            onChange={(e)=> setData({...data, option3 : e.target.value})}/>
            <br/>
            <label>Option4: </label>
            <input type="text" placeholder='Enter your fourth option'
            value = {data.option4}
            onChange={(e)=> setData({...data, option4 : e.target.value})}/>
            <br/>
            <label>CorrectAnswer: </label>
            <input type="text" placeholder='Enter your fourth option'
            value = {data.correctAnswer}
            onChange={(e)=> setData({...data, correctAnswer : e.target.value})}/>
            <br/>
            <label>Username: </label>
            <input type="text" placeholder='Enter your name'
            value = {data.questionUserName}
            onChange={(e)=> setData({...data, questionUserName : e.target.value})}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}
