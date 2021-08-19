import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators as userAction } from '../../../redux/module/user'
import {quiz_data} from '../QuizData' 

const Choice = (props) => {
    const dispatch = useDispatch();
    const { quiz_items } = quiz_data

    const submit_answer = (answer) => {
        dispatch(userAction.submit_answer(answer))
        // props.history.push('/quiz/result')
    }
    return (
        <div className="choice_border">
            {
                quiz_items[props.poster_id].choice.map((v,i) => {
                    return(
                        <li key={i} onClick={() => submit_answer(i+1)}>{v}</li>
                    )
                })
            }
        </div>
    )
}

export default Choice
