import React, { useState } from 'react';
import Footer from '../include/Footer';
import Header from '../include/Header';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';






const Form2 = () => {
    const [profileImg, setProFileImg] = useState();
    const [content, setContent] = useState();

    const navigate = useNavigate();

    const handleContent = (e) => {
        setContent(e.target.value);
    }


    const handleImg = (e) => {

        setProFileImg(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("전송");

        const formData = new FormData();
        formData.append("content", content);
        formData.append("img", profileImg);

        axios({
            method: 'post', // put, post, delete
            url: `${process.env.REACT_APP_API_URL}/api/attachs2`,

            headers: { "Content-Type": "multipart/form-data" }, //첨부파일
            data: formData, // 첨부파일 multipart방식
            responseType: 'json' //수신타입
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data);
            const savename = response.data.apiData;
            console.log(savename);
            navigate(`/attach/result?img=${savename}`);

            //결과페이지로 이동

        }).catch(error => {
            console.log(error);
        });
    }






    return (
        <>
            <div id="wrap">
                <Header />

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>갤러리</h2>
                        <ul>
                            <li><a href="#">일반갤러리</a></li>
                            <li><a href="#">파일첨부연습</a></li>
                        </ul>
                    </div>

                    <div id="content">
                        <div id="content-head">
                            <h3>첨부파일연습</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li className="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="file">
                            <form
                                action="d" // 서버의 실제 경로로 수정 필요
                                method="post"
                                onSubmit={handleSubmit}
                            >
                                <table>
                                    <colgroup>
                                        <col style={{ width: '600px' }} />
                                        <col style={{ width: '220px' }} />
                                    </colgroup>
                                    <tr>
                                        <td className="text-left">
                                            <input type="text" name="text" value={content} onChange={handleContent} />
                                        </td>
                                        <td className="text-left">
                                            <input type="file" name="file" onChange={handleImg} />
                                        </td>
                                        <td className="text-right">
                                            <button type="submit">파일업로드</button>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Form2;
