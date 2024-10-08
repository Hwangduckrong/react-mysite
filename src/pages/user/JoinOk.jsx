import React from 'react';
import { Link } from 'react-router-dom';

const JoinOk = () => {
    return (
        <>
            <div id="wrap">

                <div id="header" className="clearfix">
                    <h1>
                        <a href="">MySite</a>
                    </h1>

                    {/* 
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><a href="" className="btn_s">로그아웃</a></li>
                        <li><a href="" className="btn_s">회원정보수정</a></li>
                    </ul> 
                    */}
                    <ul>
                        <li><a href="" className="btn_s">로그인</a></li>
                        <li><a href="" className="btn_s">회원가입</a></li>
                    </ul>
                </div>
                {/* header */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><a href="">입사지원서</a></li>
                        <li><a href="">게시판</a></li>
                        <li><a href="">갤러리</a></li>
                        <li><a href="">방명록</a></li>
                    </ul>
                </div>
                {/* nav */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* aside */}

                    <div id="content">
                        <div id="content-head">
                            <h3>회원가입</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">회원가입</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* content-head */}

                        <div id="user">
                            <div id="joinOK">
                                <p className="text-large bold">
                                    회원가입을 축하합니다.<br /> <br /><Link to="/loginform">[로그인하기]</Link>
                                </p>
                            </div>
                            {/* joinOK */}
                        </div>
                        {/* user */}
                    </div>
                    {/* content */}
                </div>
                {/* container */}

                <div id="footer">Copyright ⓒ 2020 황일영. All right reserved</div>
                {/* footer */}
            </div>
            {/* wrap */}
        </>
    );
}

export default JoinOk;
