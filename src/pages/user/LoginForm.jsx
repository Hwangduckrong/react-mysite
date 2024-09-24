import React from 'react';
import { Link } from 'react-router-dom';

//css
import '../../css/user.css'

const LoginForm = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    return (
        <>
            <div id="wrap">

                <div id="header" class="clearfix">
                    <h1>
                        <Link to="">MySite</Link>
                     </h1>   

                    {/*
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><a href="" class="btn_s">로그아웃</a></li>
                        <li><a href="" class="btn_s">회원정보수정</a></li>
                    </ul>
                    */}
                    <ul>
                        <li><a href="" class="btn_s">로그인</a></li>
                        <li><a href="" class="btn_s">회원가입</a></li>
                    </ul>

                </div>
                {/*header*/}

                <div id="nav">
                    <ul class="clearfix">
                        <li><Link to="">입사지원서</Link></li>
                        <li><Link to="">게시판</Link></li>
                        <li><Link to="">갤러리</Link></li>
                        <li><Link to="">방명록</Link></li>
                    </ul>
                </div>
                {/*nav*/}

                <div id="container" class="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/*aside*/}

                    <div id="content">

                        <div id="content-head">
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li class="last">로그인</li>
                                </ul>
                            </div>
                            <div class="clear"></div>
                        </div>
                        {/*content-head*/}

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="get">

                                    {/*아이디 */}
                                    <div class="form-group">
                                        <label class="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" value="" placeholder="아이디를 입력하세요"/>
                                    </div>

                                   {/* 비밀번호 */}
                                    <div class="form-group">
                                        <label class="form-text" htmlFor="input-pass">비밀번호</label>
                                        <input type="text" id="input-pass" name="password" value="" placeholder="비밀번호를 입력하세요"	/>
                                    </div>


                                    {/* 버튼영역 */}
                                    <div class="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>

                                </form>
                            </div>
                           {/* loginForm */}
                        </div>
                        {/* user*/}
                    </div>
                    {/* content*/}
                </div>
                {/* container  */}
                <div id="footer">
                    Copyright ⓒ 2024 황덕룡. All right reserved
                </div>
               {/* footer  */}

            </div>
            {/*wrap */}
        </>
    );
}

export default LoginForm;
