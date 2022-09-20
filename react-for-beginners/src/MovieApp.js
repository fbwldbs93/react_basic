import { useState, useEffect } from "react";
import Movie from "./Movie";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function MovieApp() {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        >
          {/* <Detail/> */}
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
          {/* <Home/> */}
        </Route>
      </Routes>
      {/* switch 는 route 를 찾을 거임*/}
    </Router>
  );
  //여기서 router 를 랜더할거임
}

export default MovieApp;

/*
  Browser Router
  - Browser Router 에서 URL 은 보통의 웹사이트 처럼 생김

  Hash Router
  - URL 앞에 #이 붙는 형식으로 생김

  Routes(이전 버전 : Switch) 
  - 한 번에 하나의 Route 만 렌더링 할 수 있게 해줌

  Link
  - 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트!
  - a 태그를 사용하면 클릭 시, 페이지 새로고침이 되면서 API 를 다시 받아와야 하는 상황이 발생

  :id
  - URL 뒤에 변수를 입력할 수 있도록 해주는 것
  - 상세 페이지에 들어갈 때 URL 뒤에 붙여서 상세 분류를 해주는 변수같은 의미
  - :id 에 들어오는 값은 무엇이든 가능함
    :: 어떻게 설정해서 넣냐에 따라 달라짐

  useParams
  - url 에 있는 값을 반환해주는 함수
*/

/*
  npm i gh-pages 설치
  - 결과물을 github 페이지에 업로드 할 수 있게 해주는 나이스한 패키지임

  npm build 를 실행하면
  - production ready code 를 생성하게 됨
    :: production ready 란 코드가 압축되고 모든게 최적화 된다는 의미

  deploy 안되는 이유
  - 지금 하나의 react app 안에 여러 프로젝트 들이 섞여있어서 그런듯..?
*/
