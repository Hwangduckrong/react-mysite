//import 라이브러리
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser, setauthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    const handleLogout = () => {
        console.log("로그아웃")

        //로컬스토리지에서 삭제
        localStorage.removeItem('token');

        //로컬스토리지에서 유저삭제
        localStorage.removeItem('authUser');

        setauthUser(null);
        setToken(null);
    }
    return (
        <>

            <div id="header" className="clearfix">
                <h1>
                    <Link to="/" rel="noreferrer noopener">HDR</Link>
                </h1>
                
                {(token != null) ? (
                    <ul>
                        <li> {authUser.name}님 반가워용 ㅎㅅㅎ</li>
                        <li><button className='btn_s' onClick={handleLogout}>로그아웃</button></li>
                        <li><Link to="/modifyform"> 회원정보수정</Link></li>
                    </ul>) : (
                    <ul>
                        <li><button className='=btn_s'><Link to="/loginform" rel="noreferrer noopener">로그인</Link></button></li>
                        <li><button className='=btn_s'><Link to="/joinform" rel="noreferrer noopener">회원가입</Link></button></li>
                    </ul>)

                }
               

            </div>
            <div id="nav">
                <ul className="clearfix">
                    <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                    <li><Link to="/list" rel="noreferrer noopener">게시판</Link></li>
                    <li><Link to="" rel="noreferrer noopener">갤러리</Link></li>
                    <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                </ul>
            </div>
            {/* nav */}
        </>
    );
}
export default Header;