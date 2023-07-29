import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import './Create.css'
export default function Create() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        questionName: '',
        option:{ 
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        },
        correctAnswer: '',
        questionUserName: '',
    })

    const createQuizz = async (e) =>{
        e.preventDefault();
        const {questionName, option, correctAnswer} = data
        try{
            const {data} = await axios.post('/create', {
                questionName, option, correctAnswer
            })
            if(data.error){
                toast.error(data.error);
            }
            else{
                toast.success('Question Submitted Successfully')
                setData({});
            }
        }
        catch(error){
            console.log(error)
        }
    }
    console.log(data)
  return (
    <div className="create">
        <div className="create-container">
        <form onSubmit={createQuizz}>
            <div className="questionName">
                {/* <label>Question: </label> */}
                <input type="text" placeholder='Enter your question'
                value = {data.questionName}
                onChange={(e)=> setData({...data, questionName : e.target.value})}/>
            </div>
            <div className="option">
                {/* <label>Option1: </label> */}
                <input type="text" placeholder='Enter your first option'
                value = {data.option.option1}
                onChange={(e)=> {
                    const updatedMainObject = { ...data };
                    data.option.option1 = e.target.value;
                    setData(updatedMainObject);
                }}/>
            </div>
            <div className="option">
            {/* <label>Option2: </label> */}
            <input type="text" placeholder='Enter your second option'
            value = {data.option.option2}
            onChange={(e)=> {
                const updatedMainObject = { ...data };
                data.option.option2 = e.target.value;
                setData(updatedMainObject);
            }}/>
            </div>
            <div className="option">
                {/* <label>Option3: </label> */}
                <input type="text" placeholder='Enter your third option'
                value = {data.option.option3}
                onChange={(e)=> {
                    const updatedMainObject = { ...data };
                    data.option.option3 = e.target.value;
                    setData(updatedMainObject);
                }}/>
            </div>
            <div className="option">
                {/* <label>Option4: </label> */}
                <input type="text" placeholder='Enter your fourth option'
                value = {data.option.option4}
                onChange={(e)=> {
                    const updatedMainObject = { ...data };
                    data.option.option4 = e.target.value;
                    setData(updatedMainObject);
                }}/>
            </div>
            <div className="correctAnswer">
                {/* <label>CorrectAnswer: </label> */}
                <input type="text" placeholder='Enter your fourth option'
                value = {data.correctAnswer}
                onChange={(e)=> setData({...data, correctAnswer : e.target.value})}/>
            </div>
            <div className="submit">
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}
