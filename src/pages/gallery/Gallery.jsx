//import 라이브러리
import React from 'react';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { Link } from 'react-router-dom';

const Gallery = () => {

   /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
   return (
      <>
         <div id="wrap">

            <Header />


            <div id="container" class="clearfix">
               <div id="aside">
                  <h2>갤러리</h2>
                  <ul>
                     <li><Link to="/gallery/list"  rel="noreferrer noopener">일반갤러리</Link></li>
                     <li><Link to="/attach/form" rel="noreferrer noopener">파일첨부연습</Link></li>
                  </ul>
               </div>
              

               <div id="content">
                  <div id="content-head">
                     <h3>일반갤러리</h3>
                     <div id="location">
                        <ul>
                           <li>홈</li>
                           <li>갤러리</li>
                           <li class="last">일반갤러리</li>
                        </ul>
                     </div>
                     <div class="clear"></div>
                  </div>
                 


                  <div id="gallery">
                     <div id="list">


                        <button id="btnImgUpload">이미지올리기</button>
                        <div class="clear"></div>


                        <ul id="viewArea">

                       
                           <li>
                              <div class="view">
                                 <img class="imgItem" src="${pageContext.request.contextPath}/assets/image/Gangho-dong.jpg"/>
                                    <div class="imgWriter">
                                       작성자: <strong>유재석</strong>
                                    </div>
                              </div>
                           </li>

                           <li>
                              <div class="view">
                                 <img class="imgItem" src="../../assets/image/Jeongjae-Lee.jpg"/>
                                    <div class="imgWriter">
                                       작성자: <strong>유재석</strong>
                                    </div>
                              </div>
                           </li>

                           <li>
                              <div class="view">
                                 <img class="imgItem" src="../../assets/image/JeonSoMin.jpg"/>
                                    <div class="imgWriter">
                                       작성자: <strong>유재석</strong>
                                    </div>
                              </div>
                           </li>

                           <li>
                              <div class="view">
                                 <img class="imgItem" src="../../assets/image/JiseokJin.jpg"/>
                                    <div class="imgWriter">
                                       작성자: <strong>유재석</strong>
                                    </div>
                              </div>
                           </li>

                           <li>
                              <div class="view">
                                 <img class="imgItem" src="../../assets/image/JungWooSung.jpg"/>
                                    <div class="imgWriter">
                                       작성자: <strong>유재석</strong>
                                    </div>
                              </div>
                           </li>
                         


                        </ul>
                     </div>
                    
                  </div>
                

               </div>
            

            </div>
            


           <Footer/>
           
         </div>
        


      </>
   );
}
export default Gallery;