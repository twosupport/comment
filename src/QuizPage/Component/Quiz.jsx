import React from 'react'
import {quiz_data} from '../QuizData' 
import { HomeOutlined } from '@ant-design/icons'

const Quiz = ({history}) => {
    const { quiz_items } = quiz_data

    return (
        <div className="Quiz_border">
            <img src={quiz_items[0].img_src} style={{height:'200px'}}/>
            <HomeOutlined 
                style={{fontSize:'30px'}} 
                className="home_button"
                onClick={() => history.push('/')}/>
            <h3>{quiz_items[0].name}</h3>
            <p>{quiz_items[0].quiz}</p>
        </div>
    )
}

export default Quiz
