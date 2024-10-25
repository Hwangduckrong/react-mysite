//import 라이브러리
import React, { useState } from 'react';
import axios from 'axios';

import Header from '../include/Header';
import Footer from '../include/Footer';
import '../../css/ai.css'
import { Link } from 'react-router-dom';
const Chat = () => {
    /*---라우터관련-----*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )--*/
    const [question, setQuestion] = useState("");
    const [msgList, setMsgList] = useState([]);
    /*---일반변수--------------------------------*/
    /*---일반메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드------*/
    const handleQuestion = (e) => {
        setQuestion(e.target.value);
    };

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        console.log(question);

        //질문 리스트에 추가
        //새로운 주소의 배열을 파라미터로 전달해야한다.
        setMsgList((prevMsgList) => {

            const msgVo = {
                role: "user",
                msg: question

            }
            const newMsgList = [...prevMsgList, msgVo]
            console.log(newMsgList);
            return newMsgList

        });




        //question 스프링으로 보내기

        axios({
            method: 'post', 			// put, post, delete                   
            url: `${process.env.REACT_APP_API_URL}/api/ai/chats`,

            params: { question: question }, // get delete 쿼리스트링(파라미터)

            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            const answer = response.data.apiData
            setMsgList((prevMsgList) => {

                const msgVo = {

                    role: "bot",
                    msg: answer

                };

                const newMsgList = [...prevMsgList, msgVo]
                console.log(newMsgList);
                return newMsgList

            });


        }).catch(error => {
            console.log(error);
        });






        setQuestion('');

    };
    return (
        <>
            <div id="wrap">

                <Header />



                <div id="container" class="clearfix">
                    <div id="aside">
                        <h2>생성형 AI</h2>
                        <ul>
                            <li><Link to="">챗봇</Link> </li>
                            <li><a href="">이미지생성</a></li>
                        </ul>
                    </div>



                    <div id="content">

                        <div id="content-head">
                            <h3>챗봇</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li class="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>



                        <div id="ai">

                            <div id="chat-box">
                                {msgList.map((msgVo) => {
                                    return (
                                        (msgVo.role === "user") ? (
                                            <div className="use-msgbox clearfix">
                                                <div className="use-msg">{msgVo.msg}</div>
                                            </div>
                                        ) : (
                                            <div className='bot-msgbox clearfix'>
                                            <div className="bot-msg clearfix">{msgVo.msg}</div>
                                            </div>
                                        )


                                    )
                                })}


                            </div>
                            <div>
                                <form action='' method='' onSubmit={handleSubmitQuestion}>
                                    <input id="txt-question" type="text" name="" value={question} onChange={handleQuestion}></input>
                                    <button id="btn-sendMsg" type="submit" >보내기</button>
                                </form>
                            </div>


                        </div>


                    </div>


                </div>


                <Footer />

            </div>

        </>
    );
}
export default Chat;