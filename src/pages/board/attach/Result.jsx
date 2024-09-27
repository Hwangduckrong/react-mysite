//import 라이브러리
import React from 'react';
import Header from '../../include/Header';
import Footer from '../../include/Footer';

import'../../../css/gallery.css'

const Result = () => {
/*---라우터관련-----*/
/*---상태관리 변수들(값이 변화면 화면 랜더링 )--*/
/*---일반변수--------------------------------*/
/*---일반메소드 -----------------------------*/
/*---훅(useEffect)+이벤트(handle)메소드------*/

return (
<>

<div id="wrap">

		<Header/>
		


		<div id="container" class="clearfix">
			<div id="aside">
				<h2>갤러리</h2>
				<ul>
					<li><a href="">일반갤러리</a></li>
					<li><a href="">파일첨부연습</a></li>
				</ul>
			</div>
		
			
			
			<div id="content">
		
				<div id="content-head">
					<h3>첨부파일연습</h3>
					<div id="location">
						<ul>
							<li>홈</li>
							<li>갤러리</li>
							<li class="last">첨부파일연습</li>
						</ul>
					</div>
					<div class="clear"></div>
				</div>
		
			
			
				<div id="file">
					
						<div>
							<img id="resultImg" src="${pageContext.request.contextPath}/upload/${requestScope.saveName}"/>
						</div>
						<p>
							<a id="btnUpload" href="">다시 업로드 하기</a>
						</p>
					
				</div>
				
		
			</div>
			
		
		</div>
	

    <Footer/>
	
	</div>



</>
);
}
export default Result;