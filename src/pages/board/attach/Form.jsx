import React from 'react';

import Footer from '../../include/Footer';
import Header from '../../include/Header';

import '../../../css/gallery.css'

const Form = () => {
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
                onSubmit={(e) => {
                  e.preventDefault();
                  // 파일 업로드 처리 로직 추가
                }}
                encType="multipart/form-data"
              >
                <table>
                  <colgroup>
                    <col style={{ width: '600px' }} />
                    <col style={{ width: '220px' }} />
                  </colgroup>
                  <tr>
                    <td className="text-left">
                      <input type="file" name="file" />
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

export default Form;
