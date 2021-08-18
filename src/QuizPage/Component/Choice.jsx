import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators as userAction } from '../../../redux/module/user'
import {quiz_data} from '../QuizData' 

const Choice = ({history}) => {
    const dispatch = useDispatch();
    const { quiz_items } = quiz_data

    const submit_answer = (answer) => {
        dispatch(userAction.submit_answer(answer))
        history.push('/quiz/result')
    }
    return (
        <div className="choice_border">
            {
                quiz_items[0].choice.map((v,i) => {
                    return(
                        <li key={i} onClick={() => submit_answer(i+1)}>{v}</li>
                    )
                })
            }
        </div>
    )
}

export default Choice
