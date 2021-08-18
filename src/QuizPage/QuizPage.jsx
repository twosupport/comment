import React from 'react'
import './QuizPage.scss'
import Quiz from './Component/Quiz'
import Choice from'./Component/Choice'
const QuizPage = ({history}) => {
    return (
        <div className="container">
            <Quiz history={history}/>
            <Choice history={history}/>
        </div>
    )
}

export default QuizPage
