import React from 'react'
import {quiz_data} from '../QuizData' 
import { HomeOutlined } from '@ant-design/icons'

const Quiz = (props) => {
    const { quiz_items } = quiz_data

    return (
        <div className="Quiz_border">
            <img src={quiz_items[props.poster_id].img_src} style={{height:'200px'}}/>
            <HomeOutlined 
                style={{fontSize:'30px'}} 
                className="home_button"
                onClick={() => props.history.push('/')}/>
            <h3>{quiz_items[props.poster_id].name}</h3>
            <p>{quiz_items[props.poster_id].quiz}</p>
        </div>
    )
}

export default Quiz
