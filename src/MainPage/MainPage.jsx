import React from 'react'

const MainPage = ({history}) => {
    console.log(history);
    return (
        <div onClick={()=> history.push('/quiz')}>
            Main 페이지입니다
        </div>
    )
}

export default MainPage
