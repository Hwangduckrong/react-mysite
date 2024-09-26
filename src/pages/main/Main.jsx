import React from 'react';
import { Link } from 'react-router-dom';

// css 전역에 적용되지만 #main 아래만 적용되도록 css를 코딩했음
import '../../css/main.css'

//헤더 푸터
import Footer from '../include/Footer';
import Header from '../include/Header';
const Main = () => {

   

    return (
        <>
            <div id="wrap">
                <Header/>

                

                <div id="container" className="clearfix">
                    <div id="main">
                        <img id="profile-img" src="/images/homepage.jpg" alt="프로필 이미지" />

                        <div id="greetings">
                            <p className="text-xlarge">
                                <span className="bold">안녕하세요!!<br />
                                    황덕룡의 MySite에 오신 것을 환영합니다.<br />
                                    <br />
                                    이 사이트는 웹 프로그램밍 실습과제 예제 사이트입니다.<br />
                                </span>
                                <br />
                                사이트 소개, 회원가입, 방명록, 게시판으로 구성되어 있으며<br />
                                리액트(React) 방식으로 제작되었습니다.<br />
                                <br />
                                자바 수업 + 데이터베이스 수업 + 웹프로그래밍 수업<br />
                                배운 거 있는 거 없는 거 다 합쳐서 만들어 놓은 사이트입니다.<br />
                                <br />
                                (배가 많이 고프네요 끝나고 밥 먹고 공부합시다)<br />
                                <br /><br />
                                <Link to="" rel="noreferrer noopener">[방명록에 글 남기기]</Link>
                            </p>
                        </div>
                        {/* greetings */}
                    </div>
                    {/* main */}

                    <div className="clear"></div>
                    {/*footer*/}
                     <Footer/>
                </div>
                {/* container */}
            </div>
            {/* wrap */}
        </>
    );
}

export default Main;
