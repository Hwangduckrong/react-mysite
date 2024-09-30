import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';



//css
import '../../css/user.css'
import Header from '../include/Header';
import Footer from '../include/Footer';

const LoginForm = () => {

   
 const navigate=useNavigate();
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //아이디 입력
    let handleId = (e) => {
        setId(e.target.value);
    };
    //비밀번호 입력     
    let handlePW = (e) => {
        setPw(e.target.value);
    };
    //로그인 버튼을 클릭했을때
    const handleSubmit =(e)=>{
        e.preventDefault();
        //데이터묶기
        const userVo={
            id:id,
            password:pw
        }
        console.log(userVo);
        axios({
            method: 'post',//리스트 불러오는 거는 get이었음,꼬랑지 안보임               
            url: `${process.env.REACT_APP_API_URL}/api/users/login`,
            headers: { "Content-Type": "application/json; charset=utf-8" },  // post put,보낼 때 제이슨으로 보낼꺼야
            data: userVo,     // put, post,  JSON(자동변환됨)
            
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);

            JSON.stringify(response.data.apiData)
            //해더에서 토큰꺼내기
           const token = response.headers['authorization'].split (' ')[1]//소문자로 써야한다
            console.log(token);

            //로컬스토리지에 토큰저장
            localStorage.setItem("token",token)
            //로컬스토리지에 authUser 저장
            localStorage.setItem("authUser",JSON.stringify(response.data.apiData));
            navigate("/");
        }).catch(error => {
            console.log(error);
        });
        
    }

    return (
        <>
            <div id="wrap">

               <Header/>

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
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/*content-head*/}

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="" onSubmit={handleSubmit}>

                                    {/*아이디 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label>
                                        <input type="text" id="input-uid" name="id" value={id} placeholder="아이디를 입력하세요"
                                            onChange={handleId} />
                                    </div>

                                    {/* 비밀번호 */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label>
                                        <input type="text" id="input-pass" name="password" value={pw} placeholder="비밀번호를 입력하세요"
                                            onChange={handlePW} />
                                    </div>


                                    {/* 버튼영역 */}
                                    <div className="button-area">
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
                <Footer/>
                {/* footer  */}

            </div>
            {/*wrap */}
        </>
    );
}

export default LoginForm;
