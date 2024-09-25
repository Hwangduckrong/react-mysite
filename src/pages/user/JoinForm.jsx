import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JoinForm = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [gender, setGender] = useState('');
  
    const navigate = useNavigate();
    // 이름 입력
    let handleName = (event) => {
        setName(event.target.value);
    };

    // 아이디 입력
    let handleId = (event) => {
        setId(event.target.value);
    };

    // 비밀번호 입력
    let handlePw = (e) => {
        setPw(e.target.value);
    };

    // 성별 체크
    let handleGender = (e) => {
        setGender(e.target.value);
    };

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();

        // 데이터 묶기
        const userVo = {
            id: id,
            password: pw,
            name: name,
            gender: gender,
        };
        
        console.log(userVo);
       
        axios({
            method: 'post',//리스트 불러오는 거는 get이었음,꼬랑지 안보임               
            url: 'http://localhost:9000/api/users',
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put,보낼 때 제이슨으로 보낼꺼야
            data: userVo,     // put, post,  JSON(자동변환됨)
            
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            if(response.data===1){
                //리다이렉트
                
                navigate("/joinok");//주소말고 어디로 보낼지 잘 써놔라
            }else
            alert("등록실패")

        }).catch(error => {
            console.log(error);
        });

    };

    return (
        <>
            <div id="wrap">
                <div id="header" className="clearfix">
                    <h1>
                        <Link to="">MySite</Link>
                    </h1>

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
                                <form action="" method="" onSubmit={handleSubmit}>

                                    {/* 아이디 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" value={id} placeholder="아이디를 입력하세요" 
                                        onChange={handleId} />
                                        <button type="button" id="btnIdCheck">중복체크</button>
                                    </div>
                                    <div id="message"></div>

                                    {/* 비밀번호 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">패스워드</label>
                                        <input type="password" id="input-pass" name="password" value={pw} placeholder="비밀번호를 입력하세요" 
                                        onChange={handlePw} />
                                    </div>

                                    {/* 이름 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-name">이름</label>
                                        <input type="text" id="input-name" name="name" value={name} placeholder="이름을 입력하세요" 
                                        onChange={handleName} />
                                    </div>

                                    {/* 성별 */}
                                    <div className="form-group">
                                        <span className="form-text">성별</span>
                                        <label htmlFor="rdo-male">남</label>
                                        <input type="radio" id="rdo-male" name="gender" value="male" checked={gender==='male'} 
                                        onChange={handleGender} />
                                        <label htmlFor="rdo-female">여</label>
                                        <input type="radio" id="rdo-female" name="gender" value="female" checked={gender==='female'} 
                                        onChange={handleGender}/>
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
                    Copyright ⓒ 2024 황덕룡. All right reserved
                </div>
                {/* footer */}

            </div>
            {/* wrap */}
        </>
    );
}

export default JoinForm;
