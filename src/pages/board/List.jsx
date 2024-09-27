//import 라이브러리
import React,{useEffect,useState} from 'react';
import axios from 'axios';

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../css/main.css';
import '../../css/board.css';

const List = () => {
    const [TboardList,setTboardList]=useState([]);

    //서버에서 데이터 가져오기
    const getTboardList=()=>{
        axios({
            method: 'get',
            url: 'http://localhost:9000/api/tboards',
            responseType: 'json'
        }).then(response=>{
            setTboardList(response.data.apiData);
        }).catch(error=>{
            console.log(error);
        });
    }

    useEffect(()=>{
        getTboardList();
    },[]);

    return (
        <div id="wrap">
            <Header/>
            <div id="container" className="clearfix">
                <div id="aside">
                    <h2>게시판</h2>
                    <ul>
                        <li><a href="">일반게시판</a></li>
                        <li><a href="">댓글게시판</a></li>
                    </ul>
                </div>
                <div id="content">
                    <div id="content-head">
                        <h3>일반게시판</h3>
                        <div id="location">
                            <ul>
                                <li>홈</li>
                                <li>게시판</li>
                                <li className="last">일반게시판</li>
                            </ul>
                        </div>
                    </div>
                    <div id="board">
                        <div id="list">
                            <form action="" method="">
                                <div className="form-group text-right">
                                    <input type="text" />
                                    <button type="submit" id="btn_search">검색</button>
                                </div>
                            </form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>글쓴이</th>
                                        <th>조회수</th>
                                        <th>작성일</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TboardList.map((TboardVo)=>(
                                        <tr key={TboardVo.no}>
                                            <td>{TboardVo.no}</td>
                                            <td className="text-left"><a href="#">{TboardVo.title}</a></td>
                                            <td>{TboardVo.content}</td>
                                            <td>{TboardVo.hit}</td>
                                            <td>{TboardVo.regdate}</td>
                                            <td><a href="">[삭제]</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div id="paging">
                                <ul>
                                    <li><a href="">◀</a></li>
                                    <li><a href="">1</a></li>
                                    <li><a href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">4</a></li>
                                    <li className="active"><a href="">5</a></li>
                                    <li><a href="">6</a></li>
                                    <li><a href="">7</a></li>
                                    <li><a href="">8</a></li>
                                    <li><a href="">9</a></li>
                                    <li><a href="">10</a></li>
                                    <li><a href="">▶</a></li>
                                </ul>
                            </div>
                            <a id="btn_write" href="">글쓰기</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default List;