
import {useState, useEffect} from 'react'
/*
  useEffect
  - 두 개의 argument 를 가지는 함수!
  - 첫번째 argument 는
      :: 우리가 딱 한번만 실행하고 싶은 코드
  - 두번째 argument 는
      :: 특정 state 가 변경될 때만 함수 실행!
*/

function App2(){
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword]= useState("")
  const onClick=()=>{
    setValue(prev => prev + 1)
  }
  const onChange=(event)=>{
    setKeyword(event.target.value)
  }

  console.log("I run all the time")
  // const iRunOnlyOnce=()=>{
  //   console.log("I run only once")
  // }
  // useEffect(iRunOnlyOnce, []);
  useEffect(()=>{
    console.log("I run only once")
    /*
      react가 []에 지켜보고 있는 state 가 없기 때문에
      한 번만 실행됨!
    */
  }, []);
  /*
    useEffect 에는 컴포넌트가 처음 렌더링 될 때 실행되고
    다시는 실행되지 않을 function을  넣을 것임
    -----
    맨 처음 페이지 로딩 시, useEffect 내부의 함수가 한번 실행되고,
    그 이후 state 변경 시에는 useEffect 내부의 함수를 제외한 코드들만 리렌더링됨..!!!
  */
  useEffect(()=>{
    //input에 타이핑 할 때만 실행되도록 조건문 작성!
   if(keyword !== "" && keyword.length > 5){
    console.log("I run when 'keyword' changes")
    } 
    /*
      keyword state 에 변경이 일어나면
      여기 함수를 실행하라!
    */
  }, [keyword]);

  useEffect(()=>{
    if(counter !== 0){
      console.log("I run when 'counter' changes")
    }
  }, [counter]);

  useEffect(()=>{
    console.log("I run when 'keyword & counter' changes")

  }, [keyword, counter]);
  return(
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...'/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App2;
