import React from 'react'
import './MainPage.scss'

const poster_data_ary = [
    {'title': '연애 심리테스트', 'id':0},
    {'title': '재미있는 심리테스트', 'id':1},
    {'title': '사랑/연애 심리테스트', 'id':2},
    {'title': '연애/성격 심리테스트', 'id':3},
]

const MainPage = ({history}) => {
    /* 들여쓰기는 필수입니다!! */
    return (
        <div className="container">  {/* 왜 여기에 onClick={()=> history.push('/quiz')가 있었죠?? */}
           <img src="src\logo.png" style={{width:'8%'}}/>
           <h1> 당신을 심쿵하게 만드는 심리테스트</h1>
           <div className="polaroid_list">

            {       /* 똑같은 컴포넌트이면 반복문을 사용합시다 */
                poster_data_ary.map(v => {
                    return(
                        <div className="polaroid_outer" id ={v.id} key={v.id}> {/*className이 test라뇨? className도 변수명처럼 의미가 있어야합니다 */}
                            <div className="polaroid_inner">
                                <img onClick={() => history.push(`/quiz/${v.id}`)} src="src\1.png"/> {/*'(따옴표)가 아니라 `(백틱)입니다. 템플릿 리터럴은 유용하게 쓰이니 꼭 알아둡시다 */}
                                <div className="polaroid_caption">  
                                    {v.title}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default MainPage
