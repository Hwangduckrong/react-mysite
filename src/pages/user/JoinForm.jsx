import React from 'react';
import { Link } from 'react-router-dom';

const JoinForm = () => {
    return (
        <>
            <div id="wrap">

                <div id="header" className="clearfix">
                    <h1>
                        <Link to="">MySite</Link>
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
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
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
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* content-head */}

                        <div id="user">
                            <div id="joinForm">
                                <form action="/mysite/user/join" method="get">

                                    {/* 아이디 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" placeholder="아이디를 입력하세요" />
                                        <button type="button" id="btnIdCheck">중복체크</button>
                                    </div>
                                    <div id="message"></div>

                                    {/* 비밀번호 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input type="password" id="input-pass" name="password" placeholder="비밀번호를 입력하세요" />
                                    </div>

                                    {/* 이름 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input type="text" id="input-name" name="name" placeholder="이름을 입력하세요" />
                                    </div>

                                    {/* 성별 */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span>
                                        <label htmlFor="rdo-male">남</label>
                                        <input type="radio" id="rdo-male" name="gender" value="male" />
                                        <label htmlFor="rdo-female">여</label>
                                        <input type="radio" id="rdo-female" name="gender" value="female" />
                                    </div>

                                    {/* 약관 동의 */}
                                    <div className="form-group">
                                        <span className="form-text">약관 동의</span>
                                        <input type="checkbox" id="chk-agree" name="agree" />
                                        <label htmlFor="chk-agree">서비스 약관에 동의합니다.</label>
                                    </div>

                                    {/* 버튼 영역 */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">회원가입</button>
                                    </div>

                                </form>
                            </div>
                            {/* joinForm */}
                        </div>
                        {/* user */}
                    </div>
                    {/* content */}
                </div>
                {/* container */}

                <div id="footer">
                    Copyright ⓒ 2020 황덕룡. All right reserved
                </div>
                {/* footer */}

            </div>
            {/* wrap */}
        </>
    );
}

export default JoinForm;
